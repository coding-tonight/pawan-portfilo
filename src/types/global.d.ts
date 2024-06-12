/**
 *  children node types
 */
type children = JSX.Element | React.ReactNode

export interface ChildrenNode {
    children: children
}


export interface TerminalCommand {
    description: string;
    usage: string;
    command: string,
    index: number
}