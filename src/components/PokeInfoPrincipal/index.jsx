import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"

export default function PokeInfoPrincipal( { data } ) {
    const { theme } = useContext(ThemeContext)
    
    return (
        <Pokemon>
            <Ol>{data.types.map((type) => {
                return <li style={{ backgroundColor: theme.backgroundElement }} key={type.type.name}>{type.type.name}</li>
            })}</Ol>
            <H2>{data.name}</H2>
            <Sprite src={data.sprites.other.dream_world.front_default} alt={data.name} />
        </Pokemon>
    )
}

const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    min-width: 18rem;
    max-width: 18rem;
`

const Ol = styled.ol`
    list-style: none;
    display: flex;
    gap: 2rem;
    justify-content: center;
    width: min(100%, 45rem);
    li{ 
        flex: 1;
        font-size: 1.5em;
        border-radius: 99rem;
        text-align: center;
        padding: .75rem;
    }
`

const H2 = styled.h2`
    font-size: 3em;
    text-transform: uppercase;
    text-align: center;
    margin: 2rem 0;
    width: 100svw;
`

const Sprite = styled.img`
    height: 40rem;
    max-width: 100%;
`