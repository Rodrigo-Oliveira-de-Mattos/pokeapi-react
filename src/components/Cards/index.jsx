import { useQuery } from "@tanstack/react-query"
import Card from "../Card"
import styled from "styled-components"

export default function Cards({ url }) {

    const fetchCards = () => {
        return fetch(url)
            .then(res => res.json())
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['pokemon', url],
        queryFn: fetchCards
    })

    if (isPending) return <main><span className="loading" style={{ display: 'grid', placeItems: 'center' }}><img src="./vite.png" alt="loading" /></span></main>
    if (isError) return <main><span>Error: {error.message}</span></main>

    return (
        <Ul>
            {data.results?.map((pokemon) => (
                <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
            {data.pokemon?.map((pokemon) => (
                <Card key={pokemon.pokemon.name} name={pokemon.pokemon.name} url={pokemon.pokemon.url} />
            ))}
        </Ul>
    )
}

const Ul = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2.5rem;
    @media (width < 550px){
        grid-template-columns: repeat(auto-fill, minmax(117px, 1fr));
        padding: 2.5rem 0;
        font-size: .7em;
    }
`