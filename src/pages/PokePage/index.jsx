import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query"
import SwitchPokemon from '../../components/SwitchPokemon';
import AbilityUl from '../../components/AbilityUl';
import Moves from '../../components/Moves';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme-context';
import { useContext } from 'react';

export default function PokePage() {
    const { theme } = useContext(ThemeContext);
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

    const actualId = data.id
    const prevId = data.id == 1 ? 1 : data.id - 1
    const nextId = data.id + 1

    return (
        <>
            <Main style={{ color: theme.text, backgroundColor: theme.backgroundMain }}>
                <Link style={{ color: theme.text, backgroundColor: theme.backgroundElement, boxShadow: '0px 0px 5px' + theme.shadow }} to="/pokeapi-react/"><span>⬅ Back</span></Link>
                <p>#{actualId}</p>
                <SwitchPokemon data={data} prevId={prevId} nextId={nextId}/>
                <AbilityUl data={data} />
                <Moves data={data} />
            </Main>
        </>
    )
}

const Main = styled.main`
    p{
        font-size: 1.5em;
    }
    a{
        width: fit-content;
        font-size: 1.6em;
        padding: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 2rem;
        z-index: 99;
        &:hover{
            transform: scale(1.1);
        }
    }
`