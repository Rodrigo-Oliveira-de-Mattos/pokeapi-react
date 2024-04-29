import { createContext, useState } from 'react'

export const themes = {
    dark: {
        backgroundElement: '#313434',
        backgroundMain: '#212424',
        text: '#f4f4f4',
        shadow: '#1119',
    },
    light: {
        backgroundElement: '#e1e1e1',
        backgroundMain: '#d4d4d4',
        text: '#022',
        shadow: '#60829f50',
    }
}



export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}