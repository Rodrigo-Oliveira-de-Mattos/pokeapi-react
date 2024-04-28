import styled from "styled-components"
import Cards from "../../components/Cards"
import { useEffect, useState } from 'react'

export default function Home() {

    const [count, setCount] = useState(10)

    return (
        <Main>
            <Cards url={`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`} />
            <Div>
                <button onClick={() => setCount(count + 10)}>Carregar mais</button>
            </Div>
        </Main>
    )
}

const Main = styled.main`
    input, select ,button{
        padding: 1rem;
        background-color: var(--background-element);
        color: var(--text);
        border: none;
        border-radius: 1rem;
        
        &:hover{
            box-shadow: 0 0 5px var(--shadow-hover);
            transform: scale(1.01);
        }
    }
`

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    button{
        width: min(100%, 900px);
        cursor: pointer;
        font-size: 2rem;
        cursor: pointer;
    }
`