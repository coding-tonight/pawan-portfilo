import { useState , useEffect } from "react"


/**
 *  custom hook debounce
 * @param value 
 * @param delay 
 * @returns 
 */
const useDebounce = (value: string, delay: number | string) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
         const handler = setTimeout(() => {
             setDebouncedValue(value)
         }, Number(delay))

         return () => {
            clearInterval(handler)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce