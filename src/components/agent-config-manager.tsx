import { Edit2, Plus, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import {
	type AgentConfig,
	type AgentsConfig,
	getAgentsConfig,
	onConfigChanged,
	removeAgentConfig,
} from "../lib/config-manager"
import { AddAgentDialog } from "./add-agent-dialog"
import { EditAgentDialog } from "./edit-agent-dialog"
import { Button } from "./ui/button"

export function AgentConfigManager() {
	const [config, setConfig] = useState<AgentsConfig | null>(null)
	const [addDialogOpen, setAddDialogOpen] = useState(false)
	const [editingAgent, setEditingAgent] = useState<{
		name: string
		config: AgentConfig
	} | null>(null)

	useEffect(() => {
		getAgentsConfig().then(setConfig).catch(console.error)
		const unlisten = onConfigChanged(setConfig)
		return () => {
			unlisten.then((fn) => fn())
		}
	}, [])

	const handleRefresh = async () => {
		const updated = await getAgentsConfig()
		setConfig(updated)
	}

	const handleDelete = async (name: string) => {
		try {
			await removeAgentConfig(name)
			toast.success("Agent removed", { description: name })
			handleRefresh()
		} catch (error) {
			const message = error instanceof Error ? error.message : "Failed to remove agent"
			toast.error("Error", { description: message })
		}
	}

	if (!config) return <div>Loading...</div>

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h2 className="text-lg font-semibold">Agent Configurations</h2>
				<Button size="sm" onClick={() => setAddDialogOpen(true)}>
					<Plus className="w-4 h-4 mr-2" />
					Add Agent
				</Button>
			</div>

			<AddAgentDialog
				open={addDialogOpen}
				onOpenChange={setAddDialogOpen}
				onAgentAdded={handleRefresh}
			/>

			{editingAgent && (
				<EditAgentDialog
					open={!!editingAgent}
					onOpenChange={(open) => !open && setEditingAgent(null)}
					name={editingAgent.name}
					config={editingAgent.config}
					onAgentUpdated={handleRefresh}
				/>
			)}

			<div className="space-y-2">
				{Object.entries(config.agents).map(([name, agentConfig]) => (
					<div key={name} className="flex items-center justify-between p-3 border rounded-lg">
						<div>
							<div className="font-medium">{name}</div>
							<div className="text-sm text-muted-foreground">
								{agentConfig.command} {agentConfig.args.join(" ")}
							</div>
						</div>
						<div className="flex gap-2">
							<Button
								size="sm"
								variant="ghost"
								onClick={() => setEditingAgent({ name, config: agentConfig })}
							>
								<Edit2 className="w-4 h-4" />
							</Button>
							<Button size="sm" variant="ghost" onClick={() => handleDelete(name)}>
								<Trash2 className="w-4 h-4" />
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
