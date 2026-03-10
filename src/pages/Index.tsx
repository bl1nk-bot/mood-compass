import { AgentConfigManager } from "@/components/agent-config-manager"

const Index = () => {
	return (
		<div className="min-h-screen bg-background p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="mb-8 text-4xl font-bold">Mood Compass</h1>
				<AgentConfigManager />
			</div>
		</div>
	)
}

export default Index
