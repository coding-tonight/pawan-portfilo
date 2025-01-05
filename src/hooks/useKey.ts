import { useEffect } from "react"

/**
 *  usekey Hook
 * @param action 
 * @param key 
 */
const useKey = (action: Function, key: string): void => {
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