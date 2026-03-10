/**
 * Metadata type for chat messages
 * This can be extended to include additional message metadata like timestamps, user info, etc.
 */
export interface Metadata {
	// Add any metadata fields as needed
	timestamp?: number
	model?: string
}
