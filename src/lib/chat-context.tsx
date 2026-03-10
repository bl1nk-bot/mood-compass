"use client"

import type { DataUIPart } from "ai"
import { createContext, type ReactNode, useContext, useMemo, useRef } from "react"
import { toast } from "sonner"
import { useDataStateMapper } from "@/app/state"
import type { DataPart } from "@/messages/data-parts"

interface ChatContextValue {
	chat: {
		onToolCall: () => void
		onData: (data: DataUIPart<DataPart>) => void
		onError: (error: Error) => void
	}
}

const ChatContext = createContext<ChatContextValue | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
	const mapDataToState = useDataStateMapper()
	const mapDataToStateRef = useRef(mapDataToState)
	mapDataToStateRef.current = mapDataToState

	// Chat handlers for AI communication
	// To fully enable AI chat, configure a provider and use useChat or useCompletion from ai/react
	const chat = useMemo(
		() => ({
			onToolCall: () => {
				// Tool call handler - triggered when AI calls a tool
				console.log("Tool called")
			},
			onData: (data: DataUIPart<DataPart>) => {
				// Data part handler - for streaming data responses
				mapDataToStateRef.current(data as DataPart)
			},
			onError: (error: Error) => {
				toast.error(`Communication error with the AI: ${error.message}`)
				console.error("Error sending message:", error)
			},
		}),
		[],
	)

	return <ChatContext.Provider value={{ chat }}>{children}</ChatContext.Provider>
}

export function useSharedChatContext() {
	const context = useContext(ChatContext)
	if (!context) {
		throw new Error("useSharedChatContext must be used within a ChatProvider")
	}
	return context
}
