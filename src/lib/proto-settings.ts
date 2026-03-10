import { invoke } from "@tauri-apps/api/core"

export interface AgentConfig {
	command: string
	args: string[]
	env: Record<string, string>
}

export interface AgentsConfig {
	agents: Record<string, AgentConfig>
}

export async function getSettings(): Promise<AgentsConfig> {
	return await invoke("get_agents_config")
}

export async function updateSettings(config: AgentsConfig): Promise<void> {
	// Convert to protobuf format if needed
	await invoke("update_agents_config", { config })
}
