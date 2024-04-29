import { useContext, useEffect } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import styled from "styled-components"

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        const toggleTheme = document.getElementById('toggle-theme')
        const labelTheme = document.getElementById('label-theme')
        if (toggleTheme.checked) {
            labelTheme.classList.add('light-mode')
            labelTheme.classList.remove('dark-mode')
        } else {
            labelTheme.classList.remove('light-mode')
            labelTheme.classList.add('dark-mode')
        }
    }, [, theme])

    return (
        <HeaderStyled style={{ color: theme.text, backgroundColor: theme.backgroundElement }}>
            <h1>PokéAPI</h1>
            <ToggleTheme>
                <input id="toggle-theme" type="checkbox" onChange={() => {
                    setTheme(theme === themes.dark ? themes.light : themes.dark)
                }} />
                <label id="label-theme" htmlFor="toggle-theme" ><img src="./toggler-theme.png" alt="switch theme" /></label>
            </ToggleTheme>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    height: 75px;
    font-size: 1.5em;
    h1{
        cursor: default;
    }

`

const ToggleTheme = styled.div`
    input[type="checkbox"] {
        display: none;
    }
    label{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: .5rem;
        img{
            width: 30px;
            height: 30px;
            padding: .5rem;
        }
    }
    label.light-mode{
        &::before{
            content: 'Dark Mode';
        }
        img{
            filter: invert(0);
            transform: rotate(180deg);
        }
    }
    label.dark-mode{
        &::before{
            content: 'Light Mode';
        }
        img{
            filter: invert(1);
        }
    }
`
