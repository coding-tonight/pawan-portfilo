const USER_COMMAND: string = 'USER_COMMAND';
const HELP: string = 'help';
const WHO_IAM: string = 'whoiam'
const LS: string = 'ls'
const CLEAR: string = 'clear'

const DIR: string [] = ['education', 'about', 'skills', 'projects']


interface TerminalCommand {
	help: typeof HELP
	who_iam: typeof WHO_IAM
	ls: typeof LS
}

export type UserCommands = keyof TerminalCommand

export type ActionType =
	| { type: string , payload: string }
	| { type: 'reset' }


export { USER_COMMAND,HELP ,WHO_IAM ,DIR ,LS ,CLEAR }


