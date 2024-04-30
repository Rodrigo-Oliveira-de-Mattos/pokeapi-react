import { createContext, useEffect, useState } from 'react'

export const themes = {
    dark: {
        backgroundElement: '#313434',
        backgroundMain: '#212424',
        text: '#f4f4f4',
        shadow: '#1119',
        state: 'dark',
    },
    light: {
        backgroundElement: '#e1e1e1',
        backgroundMain: '#d4d4d4',
        text: '#022',
        shadow: '#60829f50',
        state: 'light',
    }
}



export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState('')

    useEffect(() => {
        const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

        function changeTheme(event) {
            event.matches ? setTheme(themes.dark) : setTheme(themes.light);
        }

        prefersColorScheme.addListener(changeTheme);
        changeTheme(prefersColorScheme);
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}