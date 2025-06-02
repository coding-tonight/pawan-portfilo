import { createContext, useContext, useMemo, useReducer } from "react"
import CommandReducer from './reducer'

import { ChildrenNode } from "@/types/global"
import { ActionType } from "./types"

type Status = 'success' | 'error' | 'idle' | 'loading'
type Commands = 'ls' | 'whoiam' | 'clear' | 'help'

interface Display {
   key: string,
   command: string
}

export interface InitialValue {
    inputs: string [],
    commands: string [],
    display: Display [],
    status: Status
    session: number | string
    line: number | string
}

const initialValue: InitialValue = {
    inputs: [],
    commands: [],
    display: [],
    status: 'idle', // loading, error, success, idle
    session: 1, 
    line: 1
}

const TerminalCommand = createContext<[InitialValue, React.Dispatch<ActionType>] | undefined>(undefined)

const TerminalContextProvider = ({ children }: ChildrenNode) => {
    const [state, dispatch] = useReducer<React.Reducer<InitialValue , ActionType>>(CommandReducer, initialValue)
    const value: [InitialValue, React.Dispatch<ActionType>] = useMemo(() => [state, dispatch], [state])

    return (
        <TerminalCommand.Provider value={value}>
            {children}
        </TerminalCommand.Provider>
    )
}

export default TerminalContextProvider


export const useTerminal = () => {
    const context = useContext(TerminalCommand)

    if(!context) {
        throw new Error('useTerminal must be use within the context of Terminal Context')
    }

    const [state, dispatch] = context

    return {
        state, dispatch
    }
}
