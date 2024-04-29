import styled from "styled-components"
import Cards from "../../components/Cards"
import { useState } from 'react'
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"


export default function Home() {
    const { theme } = useContext(ThemeContext)

    const [count, setCount] = useState(10)

    return (
        <main style={{ backgroundColor: theme.backgroundMain, boxShadow: 'inset 0px 1px 15px' + theme.shadow }}>
            <Cards url={`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`} />
            <Div >
                <button style={{ color: theme.text, backgroundColor: theme.backgroundElement, boxShadow: '0px 0px 5px' + theme.shadow }} onClick={() => setCount(count + 10)}>Carregar mais</button>
            </Div>
        </main>
    )
}

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    button{
        width: min(100%, 900px);
        cursor: pointer;
        font-size: 2rem;
        padding: 1rem;
        border: none;
        border-radius: 1rem;
        
        &:hover{
            transform: scale(1.01);
        }
    }
`