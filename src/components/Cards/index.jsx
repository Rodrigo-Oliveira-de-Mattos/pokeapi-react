import { useQuery } from "@tanstack/react-query"
import Card from "../Card"
import styled from "styled-components"

export default function Cards({ url, search }) {

    const fetchCards = () => {
        return fetch(url)
            .then(res => res.json())
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['pokemon', url],
        queryFn: fetchCards
    })

    if (isPending) return <main><span>Loading...</span></main>
    if (isError) return <main><span>Error: {error.message}</span></main>

    return (
        <Ul>
            {data.results.map((pokemon) => (
                <Card find={search} key={pokemon.name} name={pokemon.name} url={pokemon.url} />
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
    li:hover{
        background-color: red;
    }
`