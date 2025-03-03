import { FormEvent, useState, useRef, useEffect } from 'react'

import { CgClose , CgTerminal} from "react-icons/cg"

import { Card, CardHeader, CardContent } from "@/components/ui/card"

import { TerminalLayout } from "@/layouts"
import { useTerminal } from '@/context/TerminalContext'
import { LS } from '@/context/TerminalContext/types'


const Terminal = () => {
    const [command, setCommand] = useState<string>('')
    const commandRef = useRef<HTMLInputElement | null>(null)
    const { state, dispatch } = useTerminal()

    console.log(state?.display)

    const handleInput = (event: FormEvent<HTMLInputElement>): void => {
        setCommand(event.currentTarget.value);
    };

    const handleEnterPress = (event: KeyboardEvent): void => {
        if(event?.key === 'Enter') {
            const inputValue = event.currentTarget as HTMLInputElement

            if(inputValue.value == 'ls') {
                dispatch({ type: LS })
            }
            console.log(inputValue.value)
        }
    }

    useEffect( () => {
      commandRef?.current?.focus()
    }, [])

    return (
        <TerminalLayout>
            <section className="container mx-auto md:w-[65%] sm:w-[80%]">
             <Card>
                <CardHeader className="shadow bg-black rounded-[6px] cursor-grab">
                  <div className="flex justify-between items-center container">
                     <h5 className="flex items-center gap-2 text-sm"><CgTerminal /> Terminal</h5>
                     <CgClose className="cursor-pointer text-sm" />
                  </div>
                </CardHeader>
                <CardContent className="h-[400px] terminal-content p-4">
                    <div className='highlight-color'>
                        Type / !help
                    </div>
                    <div className="flex gap-2">
                        <h1>guest:~$</h1>
                         <p></p>
                     </div>
                     <div className="flex gap-2">
                        <h1>guest:~$</h1>
                        <input type='text' className="bg-transparent border-none outline-none w-[100%]"
                            ref={commandRef} 
                            value={command}
                            onInput={handleInput}
                            onKeyUp={handleEnterPress} 
                        />
                     </div>
                </CardContent>
             </Card>
            </section>
        </TerminalLayout>
    )
}

export default Terminal
