/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
import type { IncomingMessage, ServerResponse } from 'node:http';
import { v4 as uuid } from 'uuid';
import useApi from '~~/shared/utils/api';
import type { REST } from '@discordjs/rest';

export async function createContext({ req, res }: { req: IncomingMessage; res: ServerResponse<IncomingMessage> }) {
	const requestId = uuid();
	res.setHeader('x-request-id', requestId);
	res.setHeader('x-powered-by', 'trpc');

	return {
		event: createEvent(req, res),
		requestId,
		session: await getUserSession(createEvent(req, res)),
		response: res,
		request: req,
		api: (rest?: REST) => useApi(rest)
	};
}
export type Context = Awaited<ReturnType<typeof createContext>>;
