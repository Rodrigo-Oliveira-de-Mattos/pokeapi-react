import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"

export default function Card({ name, url }) {
    const { theme } = useContext(ThemeContext);

    const fetchPokemon = () => {
        return fetch(url)
            .then(res => res.json())
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['pokemonCard', name],
        queryFn: fetchPokemon
    })

    if (isPending) return <span className="loading" style={{display: 'grid', placeItems: 'center'}}><img src="./vite.png" alt="loading" /></span>
    if (isError) return <main><span>Error: {error.message}</span></main>

    return (
        <Li style={{ backgroundColor: theme.backgroundElement, boxShadow: '0 0 10px' + theme.shadow }}>
            <Link style={{ color: theme.text }} to={{
                pathname: `/pokeapi-react/poke-info/${data.name}`,
            }}>
                <i># {data.id}</i>
                <Img src={data.sprites.other.showdown.front_default} alt={data.name} />
                <p>{name}</p>
            </Link>
        </Li>
    )
}

const Li = styled.li`
    border-radius: 1rem;
    padding: 2rem;
    cursor: pointer;
    a{
        gap: 4rem;
        font-size: 2em;
        width: 100%;
        display: grid;
        place-items: center;
    }
    i{
        width: 100%;
        font-style: normal;
        font-size: .7em;
    }
    p{
        text-transform: uppercase;
    }
    &:hover{
        transform: scale(1.02);
    }
`

const Img = styled.img`
    height: 100px;
    max-width: 100%;
`