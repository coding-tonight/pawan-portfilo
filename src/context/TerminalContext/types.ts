const USER_COMMAND: string = 'USER_COMMAND';
const HELP: string = 'help';
const WHO_IAM: string = 'whoiam'
const LS: string = 'ls'

const DIR: string [] = ['education', 'about', 'skills', 'projects']

export type UserCommands = 'help' | 'ls'| 'whoiam' | 'clear'

export type ActionType =
	| { type: UserCommands, payload: string }
	| { type: 'reset' }


export { USER_COMMAND, HELP, WHO_IAM, DIR, LS }



