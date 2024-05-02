import PokeInfoPrincipal from "../PokeInfoPrincipal"
import styled from "styled-components"
import Swipe from "../Swipe"

export default function SwitchPokemon( { data, prevId, nextId } ) {

    return (
        <Div>
            <Swipe id={prevId} arrow={'<'} />
            <PokeInfoPrincipal data={data} />
            <Swipe id={nextId} arrow={'>'} />
        </Div>
    )
}


const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    a{
        padding: 0;
    }
    @media (width > 768px){
        padding: 0 5rem;
    }
`