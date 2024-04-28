import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"

export default function Ability ({ url }) {
    const fetchAbilities = () => {
        return fetch(url)
            .then(res => res.json())
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['pokemonAbilities', url],
        queryFn: fetchAbilities
    })
    
    if (isPending) return <span><img src="./vite.png" alt="loading" /></span>
    if (isError) return <main><span>Error: {error.message}</span></main>

    return (
        <>
            <Name>{data.names[7].name}</Name>
            <p>{data.effect_entries[1].effect}</p>
        </>
    )
}

const Name = styled.h4`
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2em;
`