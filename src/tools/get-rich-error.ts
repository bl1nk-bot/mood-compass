interface RichErrorInput {
	action: string
	args: Record<string, unknown>
	error: unknown
}

interface RichError {
	message: string
	error: {
		name: string
		message: string
		stack?: string
	}
}

export function getRichError({ action, args, error }: RichErrorInput): RichError {
	const errorMessage = error instanceof Error ? error.message : String(error)
	const errorStack = error instanceof Error ? error.stack : undefined

	return {
		message: `Failed to ${action} with args: ${JSON.stringify(args)}. Error: ${errorMessage}`,
		error: {
			name: error instanceof Error ? error.name : "Error",
			message: errorMessage,
			stack: errorStack,
		},
	}
}
