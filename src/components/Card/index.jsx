import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Card({ name, url }) {

    const fetchPokemon = () => {
        return fetch(url)
            .then(res => res.json())
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['pokemonCard', name],
        queryFn: fetchPokemon
    })

    if (isPending) return <span><img src="./vite.png" alt="loading" /></span>
    if (isError) return <main><span>Error: {error.message}</span></main>

    return (
        <Li>
            <Link to={{
                pathname: `/pokeapi-react/poke-info/${data.name}`,
                state: { name: data.name }
            }}>
                <i># {data.id}</i>
                <Img src={data.sprites.other.showdown.front_default} alt={data.name} />
                <p>{name}</p>
            </Link>
        </Li>
    )
}

const Li = styled.li`
    background-color: var(--background-element);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 0 10px var(--shadow);
    cursor: pointer;
    a{
        gap: 4rem;
        color: var(--text);
        font-size: 2em;
        width: 100%;
        display: grid;
        place-items: center;
        color: var(--text);
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
        box-shadow: 0 0 40px var(--shadow-hover);
        transform: scale(1.02);
    }
`

const Img = styled.img`
    height: 100px;
    max-width: 100%;
    
`