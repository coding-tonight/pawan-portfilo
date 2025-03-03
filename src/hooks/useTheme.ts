import { useState } from "react"

const mediaQuery: string = '(prefers-color-scheme: dark)'

function getSystemTheme(): string {
  if (window.matchMedia(mediaQuery).matches) {
    return 'dark'
  }

  return 'light'
}

const useTheme = (): [string, Function, Function] => {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || getSystemTheme())

    if(!theme) {
       setTheme(getSystemTheme())
       localStorage.setItem('theme', theme)
    }


   const switchMode = (): void =>  {
      const currentMode = getSystemTheme()
      console.log(currentMode)

      if(currentMode === 'dark') {
         localStorage.setItem('theme', 'light')
         setTheme('light')
      } else {
        localStorage.setItem('theme', 'dark')
        setTheme('dark')
      }
   }

    return [theme, getSystemTheme, switchMode]
}

export default useTheme