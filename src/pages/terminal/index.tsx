import { FormEvent, useState } from 'react'

import { CgClose , CgTerminal} from "react-icons/cg"

import { Card, CardHeader, CardContent } from "@/components/ui/card"

import { TerminalLayout } from "@/layouts"

const Terminal = () => {
    const [command, setCommand] = useState<string>('')

    const handleInput = (event: FormEvent<HTMLInputElement>): void => {
        setCommand(event.currentTarget.value);
        };

    return (
        <TerminalLayout>
            <section className="container mx-auto md:w-[65%] sm:w-[80%]">
             <Card>
                <CardHeader className="shadow bg-black rounded-[5px]">
                  <div className="flex justify-between items-center container">
                     <h5 className="flex items-center gap-2 text-sm"><CgTerminal /> Terminal</h5>
                     <CgClose className="cursor-pointer text-sm" />
                  </div>
                </CardHeader>
                <CardContent className="h-[400px] terminal-content p-4">
                     <div className="flex gap-2">
                        <h1>user@user:~$</h1>
                        <input type='text' className="bg-transparent border-none outline-none w-[100%]" 
                            value={command}
                            onInput={handleInput} 
                        />
                     </div>
                </CardContent>
             </Card>
            </section>
        </TerminalLayout>
    )
}

export default Terminal