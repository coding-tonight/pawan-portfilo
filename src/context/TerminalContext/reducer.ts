import { InitialValue } from './index.tsx';
import { LS, HELP, WHO_IAM, ActionType, DIR } from './types.ts'


export default function (state: InitialValue, action: ActionType): InitialValue {
	switch (action.type) {
		case HELP:
			break

		case LS:
			console.log('ls command is active')
			state.display = [...state.display, DIR]
			break

		case WHO_IAM:
			state.command = [...state.command]
			break

		default:	
			 break
	}

	return state
}
