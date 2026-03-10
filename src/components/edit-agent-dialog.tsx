import { Save } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { type AgentConfig, updateAgentConfig } from "../lib/config-manager"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface EditAgentDialogProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	name: string
	config: AgentConfig
	onAgentUpdated?: () => void
}

export function EditAgentDialog({
	open,
	onOpenChange,
	name,
	config,
	onAgentUpdated,
}: EditAgentDialogProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [command, setCommand] = useState(config.command)
	const [args, setArgs] = useState(config.args.join(", "))

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			await updateAgentConfig(
				name,
				command,
				args
					.split(",")
					.map((s) => s.trim())
					.filter(Boolean),
				config.env,
			)
			toast.success("Agent updated", { description: name })
			onOpenChange(false)
			onAgentUpdated?.()
		} catch (error) {
			const message = error instanceof Error ? error.message : "Failed to update agent"
			toast.error("Failed to update agent", { description: message })
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle>Edit Agent</DialogTitle>
					<DialogDescription>Update agent configuration for {name}.</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<Label htmlFor="name">Name</Label>
						<Input id="name" value={name} disabled />
					</div>
					<div>
						<Label htmlFor="command">Command</Label>
						<Input
							id="command"
							value={command}
							onChange={(e) => setCommand(e.target.value)}
							required
						/>
					</div>
					<div>
						<Label htmlFor="args">Arguments (comma-separated)</Label>
						<Input id="args" value={args} onChange={(e) => setArgs(e.target.value)} />
					</div>
					<div className="flex gap-2 justify-end">
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
							disabled={isSubmitting}
						>
							Cancel
						</Button>
						<Button type="submit" disabled={isSubmitting}>
							<Save className="w-4 h-4 mr-2" />
							{isSubmitting ? "Saving..." : "Save Changes"}
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
