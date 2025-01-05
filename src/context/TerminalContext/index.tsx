import { createContext, useContext, useMemo, useReducer } from "react"
import CommandReducer from './reducer'

import { ChildrenNode, JsxElement } from "@/types/global"
import { ActionType } from "./types"

type Status = 'success' | 'error' | 'idle' | 'loading'

export interface InitialValue {
    inputs: string [],
    command: string [],
    display: JsxElement[] | string[],
    status: Status
}

const initialValue: InitialValue = {
    inputs: [],
    command: [],
    display: [],
    status: 'idle' // loading, error, success, idle
}

const TerminalCommand = createContext(null)

const TerminalContextProvider = ({ children }: ChildrenNode) => {
    const [state, dispatch] = useReducer<React.Reducer<InitialValue, ActionType>>(CommandReducer, initialValue)

    const value = useMemo(() => [state, dispatch], [state])

    return (
        <TerminalCommand.Provider value={value}>
            {children}
        </TerminalCommand.Provider>
    )
}

export default TerminalContextProvider


export const useTerminal = () => {
    const context = useContext(TerminalCommand)

    if(context === null) {
        throw new Error('useTerminal must be use within the context of Terminal Context')
    }

    const [state, dispatch] = context

    return {
        state, dispatch
    }
}