import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from '../../contexts/theme-context';
import { useContext } from 'react';

export default function Swipe({ id, arrow }) {
    const { theme } = useContext(ThemeContext);

    return (
        <Link to={{
            pathname: `/pokeapi-react/poke-info/${id}`
        }}><A style={{color: theme.text}}>{arrow}</A></Link>
    )
}

const A = styled.i`
    width: 50px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: none;
    font-size: 4em;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    @media (width < 500px){
        font-size: 2em;
    }
`