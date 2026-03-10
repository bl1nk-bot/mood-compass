/**
 * ToolSet type for AI chat
 * This defines all available tools that the AI can use
 * Based on AI SDK's UITools type requirements
 */
export interface ToolSet {
	[Key: string]: {
		description?: string
		parameters?: Record<string, unknown>
	}
}
