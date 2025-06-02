import {  useRef, useEffect, KeyboardEventHandler } from 'react'

import { CgClose , CgTerminal} from "react-icons/cg"

import { Card, CardHeader, CardContent } from "@/components/ui/card"

import { TerminalLayout } from "@/layouts"
import { useTerminal } from '@/context/TerminalContext'
import { LS, CLEAR } from '@/context/TerminalContext/types'


const Terminal = () => {
    const commandRef = useRef<HTMLInputElement | null>(null)
    const { state, dispatch } = useTerminal()

    console.log(state?.display)

    const handleEnterPress: KeyboardEventHandler<HTMLInputElement> = (event): void => {
        if(event?.key === 'Enter') {
            const inputValue = event.currentTarget as HTMLInputElement
            switch(inputValue.value) {
                case LS:
                    dispatch({ type: LS, payload: '' })
                    break

                case CLEAR:
                    dispatch({ type: 'reset'})
                    break

                default:
                    break
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
                     {state?.display.length ? (
                         <>
                          {state?.display.map(data=> (
                           <>
                              <div className="flex gap-2" key={data.command}>
                                <h1>guest:~$</h1>
                                <input type='text' className="bg-transparent border-none outline-none w-[100%]"
                                  value={data.command}
                                />
                              </div>
                              <div>
                                  {data.results.map(item => (
                                        <span key={item?.toString()} className='me-2'>{item}</span>
                                  ))}
                              </div>
                            </>
                            ))}
                         </>
                     ): (
                          <div className="flex gap-2">
                            <h1>guest:~$</h1>
                            <input type='text' className="bg-transparent border-none outline-none w-[100%]"
                                ref={commandRef} 
                                onKeyUp={handleEnterPress} 
                            />
                          </div>
                        )}

                     {state?.commands.length ? (
                         <div className="flex gap-2">
                         <h1>guest:~$</h1>
                         <input type='text' className="bg-transparent border-none outline-none w-[100%]"
                             ref={commandRef} 
                             onKeyUp={handleEnterPress} 
                         />
                       </div>
                     ): ''}
                </CardContent>
             </Card>
            </section>
        </TerminalLayout>
    )
}

export default Terminal
