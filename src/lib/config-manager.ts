import { invoke } from "@tauri-apps/api/core"
import { listen } from "@tauri-apps/api/event"

const isTauri = '__TAURI__' in window
const API_URL = 'http://localhost:3001/api'

export interface AgentConfig {
	command: string
	args: string[]
	env: Record<string, string>
}

export interface AgentsConfig {
	agents: Record<string, AgentConfig>
}

export async function getAgentsConfig(): Promise<AgentsConfig> {
	if (isTauri) return await invoke("get_agents_config")
	const res = await fetch(`${API_URL}/agents`)
	return await res.json()
}

export async function getConfigPath(): Promise<string> {
	if (isTauri) return await invoke("get_config_path")
	const res = await fetch(`${API_URL}/config-path`)
	const data = await res.json()
	return data.path
}

export async function addAgentConfig(
	name: string,
	command: string,
	args: string[],
	env: Record<string, string>,
): Promise<AgentsConfig> {
	if (isTauri) return await invoke("add_agent_config", { name, command, args, env })
	const res = await fetch(`${API_URL}/agents`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, command, args, env })
	})
	return await res.json()
}

export async function updateAgentConfig(
	name: string,
	command: string,
	args: string[],
	env: Record<string, string>,
): Promise<AgentsConfig> {
	if (isTauri) return await invoke("update_agent_config", { name, command, args, env })
	const res = await fetch(`${API_URL}/agents/${encodeURIComponent(name)}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ command, args, env })
	})
	return await res.json()
}

export async function removeAgentConfig(name: string): Promise<AgentsConfig> {
	if (isTauri) return await invoke("remove_agent_config", { name })
	const res = await fetch(`${API_URL}/agents/${encodeURIComponent(name)}`, { method: 'DELETE' })
	return await res.json()
}

export async function onConfigChanged(
	callback: (config: AgentsConfig) => void,
): Promise<() => void> {
	if (!isTauri) return () => {}
	const unlisten = await listen<AgentsConfig>("config-changed", (event) => {
		callback(event.payload)
	})
	return unlisten
}
