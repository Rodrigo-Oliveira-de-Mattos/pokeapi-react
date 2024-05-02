import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export default function Filter() {
    const [type, setType] = useState()

    const { theme } = useContext(ThemeContext)

    return (
        <Div>
            <Select className="sticky" onChange={(e) => setType(e.target.value)} style={{boxShadow: '0px 0px 5px' + theme.shadow, backgroundColor: theme.backgroundElement, color: theme.text}}>
                <option value={''}>Filter by Type</option>
                <option value={'normal'}>Normal</option>
                <option value={'fire'}>Fire</option>
                <option value={'water'}>Water</option>
                <option value={'grass'}>Grass</option>
                <option value={'electric'}>Electric</option>
                <option value={'psychic'}>Psychic</option>
                <option value={'ice'}>Ice</option>
                <option value={'dragon'}>Dragon</option>
                <option value={'dark'}>Dark</option>
                <option value={'fairy'}>Fairy</option>
                <option value={'fighting'}>Fighting</option>
                <option value={'flying'}>Flying</option>
                <option value={'poison'}>Poison</option>
                <option value={'ground'}>Ground</option>
                <option value={'rock'}>Rock</option>
                <option value={'bug'}>Bug</option>
                <option value={'ghost'}>Ghost</option>
                <option value={'steel'}>Steel</option>
            </Select>
            {type && <Span><Link to={`/pokeapi-react/filter-type/${type}`}>🔍</Link></Span>}
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
    height: 4rem;
`

const Select = styled.select`
    font-size: 1.6rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 0;
    cursor: pointer;
    height: 100%;
    
    &:hover{
        transform: scale(1.05);
    }
`

const Span = styled.span`
    display: grid;
    place-items: center;
    a{
        font-size: 2.5rem;
        padding: 0;
    }
`