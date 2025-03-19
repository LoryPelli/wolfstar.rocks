import type { FlattenedCommand } from '~~/shared/types/discord';

export const useCommands = () => {
	const client = useClientTrpc();
	const commands = useState<FlattenedCommand[]>('commands', () => []);
	const loading = useState<boolean>('loading', () => false);
	const selectedCommand = shallowRef<FlattenedCommand | null>(null);

	const handleError = (error: Error, context: string) => {
		captureException(error, { extra: { context } });
		toast.error('Error', {
			description: `Failed to ${context.toLowerCase()}. Please try again.`
		});
	};

	const fetchCommands = async () => {
		loading.value = true;
		try {
			await client.commands.refresh.mutate();
			commands.value = await client.commands.getAll.query();
		} catch (error) {
			handleError(error as Error, 'Fetch Commands');
			commands.value = [];
		} finally {
			loading.value = false;
		}
	};

	return {
		commands,
		loading,
		selectedCommand,
		fetchCommands
	};
};
