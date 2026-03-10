import { Plus } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { addAgentConfig } from "../lib/config-manager"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface AddAgentDialogProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	onAgentAdded?: () => void
}

export function AddAgentDialog({ open, onOpenChange, onAgentAdded }: AddAgentDialogProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [name, setName] = useState("")
	const [command, setCommand] = useState("")
	const [args, setArgs] = useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			await addAgentConfig(
				name,
				command,
				args
					.split(",")
					.map((s) => s.trim())
					.filter(Boolean),
				{},
			)
			toast.success("Agent added", { description: name })
			onOpenChange(false)
			setName("")
			setCommand("")
			setArgs("")
			onAgentAdded?.()
		} catch (error) {
			const message = error instanceof Error ? error.message : "Failed to add agent"
			toast.error("Failed to add agent", { description: message })
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle>Add Agent</DialogTitle>
					<DialogDescription>Configure a new agent connection.</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<Label htmlFor="name">Name</Label>
						<Input
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="My Agent"
							required
						/>
					</div>
					<div>
						<Label htmlFor="command">Command</Label>
						<Input
							id="command"
							value={command}
							onChange={(e) => setCommand(e.target.value)}
							placeholder="npx"
							required
						/>
					</div>
					<div>
						<Label htmlFor="args">Arguments (comma-separated)</Label>
						<Input
							id="args"
							value={args}
							onChange={(e) => setArgs(e.target.value)}
							placeholder="@package/name@latest, --flag"
						/>
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
							<Plus className="w-4 h-4 mr-2" />
							{isSubmitting ? "Adding..." : "Add Agent"}
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
