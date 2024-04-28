import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query"
import Ability from '../../components/Ability';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function PokePage() {
    const location = useLocation();
    const name = location.pathname.replace("/pokeapi-react/poke-info/", "");

    const fetchPokemonInfo = () => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(res => res.json())
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['pokemonInfo', name],
        queryFn: fetchPokemonInfo
    })

    if (isPending) return <main><span><img src="./vite.png" alt="loading" /></span></main>
    if (isError) return <main><span>Error: {error.message}</span></main>
    
    return (
        <>
            <Main>
                <Link to="/pokeapi-react/"><span>⬅ Back</span></Link>
                <p>#{data.id}</p>
                <Pokemon>
                    <Ol>{data.types.map((type) => {
                        return <li key={type.type.name}>{type.type.name}</li>
                    })}</Ol>
                    <H2>{data.name}</H2>
                    <Sprite src={data.sprites.other.dream_world.front_default} alt={data.name} />
                </Pokemon>
                <Ul>
                    {data.abilities.map((ability) => {
                        return <li key={ability.ability.name}>
                            <Ability url={ability.ability.url} />
                        </li>
                    })}
                </Ul>
                <Moves>
                    <h3>Moves: </h3>
                    <ul>
                        {data.moves.map((move) => {
                            return <li key={move.move.name}>{move.move.name}</li>
                        })}
                    </ul>
                </Moves>
            </Main>
        </>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: var(--text);
    p{
        font-size: 1.5em;
    }
    a{
        width: fit-content;
        font-size: 1.6em;
        color: var(--text);
        background-color: var(--background-element);
        padding: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        &:hover{
            box-shadow: 0 0 10px var(--shadow-hover);
            transform: scale(1.1);
        }
    }
`

const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
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
        background-color: var(--background-element);
    }
`

const Ul = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 4rem;
    row-gap: 1rem;
    margin: 2rem 0;
`

const H2 = styled.h2`
    font-size: 3em;
    text-transform: uppercase;
    text-align: center;
    margin: 2rem 0;
`

const Sprite = styled.img`
    max-width: 40rem;
    width: 100%;
`

const Moves = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h3{
        font-size: 2em;
    }
    ul{
        list-style: none;
        display:  grid;
        font-size: 1.2em;
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
        gap: 2rem;
        li{
            border-radius: 1rem;
            text-align: center;
            padding: 1.5rem;
            background-color: var(--background-element);
        }
    }
`