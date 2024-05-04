import AbilityLi from "../AbilityLi"
import styled from "styled-components"

export default function AbilityUl({ data }) {
    return (
        <Ul>
            {data.abilities.map((ability) => {
                return <li key={ability.ability.name}>
                    <AbilityLi url={ability.ability.url} />
                </li>
            })}
        </Ul>
    )
}

const Ul = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 4rem;
    row-gap: 1rem;
    margin: 2rem 0;
    width: 100%;
    @media (width < 550px){
        li{
            width: calc(100vw - 5rem);
        }
    }
`