import { USER_COMMAND, HELP, WHO_IAM } from './types.ts'


type ActionType =
	| { type: 'input', payload: string }
	| { type: 'reset' };

type Status = 'success' | 'error' | 'idle' | 'loading'

interface InitialValue {
	inputs: string[],
	command: string[],
	status: Status
}

export default function (state: InitialValue, action: ActionType,) {
	switch (action.type) {
		case USER_COMMAND:
			break

		case HELP:
			break

		case WHO_IAM:
			state.command = [...state.command]
			break

		default:
			return state.command
	}
}
