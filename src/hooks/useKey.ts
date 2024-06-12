import { useEffect } from "react"


const useKey = (action: Function, key: string) => {
    const callback = () => {
        action()
    }

    useEffect(() => {
        window.addEventListener('keyup', callback)

        return () => {
            window.removeEventListener('keyup', callback)
        }
    }, [key])
}

export default useKey