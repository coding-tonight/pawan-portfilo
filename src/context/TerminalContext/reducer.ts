import { InitialValue } from './index.tsx';
import { LS, HELP, WHO_IAM, ActionType, DIR, CLEAR } from './types.ts'


export default function (state: InitialValue, action: ActionType): InitialValue {
	switch (action.type.toLowerCase()) {
		case HELP:
			break

		case LS:
			state = {
         ...state,
         display: [...state.display, { command: 'ls', results: DIR }],
     }
			break

		case WHO_IAM:
     state = {
      ...state, 
      display: [], 
      commands: []
     }
			break

		case CLEAR:
      state = {
       ...state,
       display: [],
       commands: []
      }
			break

		default:
			 break
	}

	return state
}
