import type { UIMessagePart } from "ai"
import { memo } from "react"

interface Props {
	part: UIMessagePart<any, any>
	partIndex: number
}

export const MessagePart = memo(function MessagePart({ part }: Props) {
	if (part.type === "text") {
		return <div className="whitespace-pre-wrap">{part.text}</div>
	}

	if (part.type === "reasoning") {
		return (
			<details className="text-sm text-muted-foreground">
				<summary className="cursor-pointer">Reasoning</summary>
				<div className="mt-2 whitespace-pre-wrap">{part.text}</div>
			</details>
		)
	}

	return null
})
