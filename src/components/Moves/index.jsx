import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

export default function Moves({ data }) {
    const { theme } = useContext(ThemeContext);

    return (
        <Div>
            <h3>Moves: </h3>
            <ul>
                {data.moves.map((move) => {
                    return <li style={{ backgroundColor: theme.backgroundElement }} key={move.move.name}>{move.move.name}</li>
                })}
            </ul>
        </Div>
    )
}



const Div = styled.div`
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
        }
    }
`