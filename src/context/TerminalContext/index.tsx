import { createContext, useContext, useMemo, useReducer } from "react"
import CommandReducer from './reducer'

import { ChildrenNode } from "@/types/global"

type Status = 'success' | 'error' | 'idle' | 'loading'

interface InitialValue {
    inputs: string [],
    command: string [],
    status: Status
}

const initialValue: InitialValue = {
    inputs: [],
    command: [],
    status: 'idle' // loading, error, success, idle
}

const TerminalCommand = createContext<T>(null)

const TerminalContextProvider = ({ children }: ChildrenNode) => {
    const [state, dispatch] = useReducer<T>(CommandReducer, initialValue)

    const value = useMemo(() => [state, dispatch], [state])

    return (
        <TerminalCommand.Provider value={value}>
            {children}
        </TerminalCommand.Provider>
    )
}

export default TerminalContextProvider


const useTeriminal = () => {
    const context = useContext(TerminalCommand)

    if(context === null) {
        throw new Error('useTerminal must be use within the context of Terminal Context')
    }

    const [state, dispatch] = context

    return {
        state, dispatch
    }
}