import type { UIMessage } from "ai"
import type { DataPart } from "@/messages/data-parts"
import type { Metadata } from "@/messages/metadata"

export type ChatUIMessage = UIMessage<Metadata, DataPart, {}>
