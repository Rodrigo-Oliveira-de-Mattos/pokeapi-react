import { useContext, useEffect } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import styled from "styled-components"

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        const labelTheme = document.getElementById('label-theme')
        if (theme.state === 'light') {
            labelTheme.classList.replace('dark-mode', 'light-mode')
        } else if (theme.state === 'dark') {
            labelTheme.classList.remove('light-mode')
            labelTheme.classList.add('dark-mode')
        }
    }, [, theme])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const header = document.getElementById("header")
            header.classList.toggle("scroll", window.scrollY > 45)
        })
    })

    return (
        <HeaderStyled id="header" style={{ color: theme.text, backgroundColor: theme.backgroundElement, boxShadow: '0px 1px 15px' + theme.shadow }}>
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
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100svw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    height: 75px;
    font-size: 1.5em;

    h1{
        cursor: default;
    }
    &.scroll{
        transform: translateY(-75px);
        transition: .5s ease-out;
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
