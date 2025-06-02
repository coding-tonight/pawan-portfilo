import { ReactNode } from "react"

/**
 *  children node types     
 */
type JsxElement = JSX.Element | React.ReactNode | React.ReactElement

export interface ChildrenNode {
    children: JsxElement
}

export interface TerminalCommand {
    description: string
    usage: string
    command: string
    index: number
}

/**
 *  ContactMe Media Interface 
 */
export interface ContactMe {
     id: number | string
     key: string
     icon: ({ style }: any) => JsxElement
     link: string
}

/**
 *  Menu Item Interface
 */

export interface MenuItem {
    id: number | string
    name: string
    path: string
}

export interface Project {
     title: string
     urls: string
     stack: string
     type: string
}