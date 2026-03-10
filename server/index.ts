import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { z } from 'zod'
import fs from 'fs/promises'
import path from 'path'
import os from 'os'

// Validation schemas for API requests
const AgentConfigSchema = z.object({
	command: z.string().min(1, 'Command is required'),
	args: z.array(z.string()).default([]),
	env: z.record(z.string()).default({}),
})

const CreateAgentSchema = z.object({
	name: z.string().min(1, 'Agent name is required'),
	command: z.string().min(1, 'Command is required'),
	args: z.array(z.string()).default([]),
	env: z.record(z.string()).default({}),
})

const UpdateAgentSchema = CreateAgentSchema.partial()

const app = new Hono()
app.use('/*', cors())

const getConfigPath = () => path.join(os.homedir(), '.config', 'mood-compass', 'agents.json')

const loadConfig = async () => {
  try {
    const data = await fs.readFile(getConfigPath(), 'utf-8')
    return JSON.parse(data)
  } catch {
    const config = {
      agents: {
        "GitHub Copilot": { command: "npx", args: ["@github/copilot-language-server@latest", "--acp"], env: {} },
        "Claude Code": { command: "npx", args: ["@zed-industries/claude-code-acp@latest"], env: {} },
        "Gemini CLI": { command: "npx", args: ["@google/gemini-cli@latest", "--experimental-acp"], env: {} },
        "Qwen Code": { command: "npx", args: ["@qwen-code/qwen-code@latest", "--acp", "--experimental-skills"], env: {} },
      }
    }
    await fs.mkdir(path.dirname(getConfigPath()), { recursive: true })
    await fs.writeFile(getConfigPath(), JSON.stringify(config, null, 2))
    return config
  }
}

const saveConfig = async (config: any) => {
  await fs.mkdir(path.dirname(getConfigPath()), { recursive: true })
  await fs.writeFile(getConfigPath(), JSON.stringify(config, null, 2))
}

app.get('/api/agents', async (c) => c.json(await loadConfig()))
app.get('/api/config-path', async (c) => c.json({ path: getConfigPath() }))

app.post('/api/agents', async (c) => {
	const body = await c.req.json()
	const result = CreateAgentSchema.safeParse(body)
	if (!result.success) {
		return c.json({ error: 'Validation failed', details: result.error.flatten() }, 400)
	}
	const { name, command, args, env } = result.data
	const config = await loadConfig()
	config.agents[name] = { command, args, env }
	await saveConfig(config)
	return c.json(config)
})

app.put('/api/agents/:name', async (c) => {
	const name = c.req.param('name')
	const body = await c.req.json()
	const result = UpdateAgentSchema.safeParse(body)
	if (!result.success) {
		return c.json({ error: 'Validation failed', details: result.error.flatten() }, 400)
	}
	const { command, args, env } = result.data
	const config = await loadConfig()
	if (!config.agents[name]) return c.json({ error: 'Agent not found' }, 404)
	config.agents[name] = { command, args, env }
	await saveConfig(config)
	return c.json(config)
})

app.delete('/api/agents/:name', async (c) => {
  const name = c.req.param('name')
  const config = await loadConfig()
  delete config.agents[name]
  await saveConfig(config)
  return c.json(config)
})

serve({ fetch: app.fetch, port: 3001 })
console.log('API server running on http://localhost:3001')
