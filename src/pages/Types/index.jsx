import { useLocation } from 'react-router-dom';
import styled from "styled-components"
import Cards from "../../components/Cards"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Link } from "react-router-dom"
import Filter from '../../components/Filter';

export default function Types() {
    const { theme } = useContext(ThemeContext)
    const location = useLocation();
    const name = location.pathname.replace("/pokeapi-react/filter-type/", "");
    return (
        <Main style={{ backgroundColor: theme.backgroundMain }}>
            <Btns>
                <Link className='back' style={{ color: theme.text, backgroundColor: theme.backgroundElement, boxShadow: '0px 0px 5px' + theme.shadow }} to="/pokeapi-react/"><span>⬅ Back</span></Link>
                <Filter />
            </Btns>
            <Cards url={`https://pokeapi.co/api/v2/type/${name}/`} />
        </Main>
    )
}

const Main = styled.main`
    .back{
        width: fit-content;
        font-size: 1.6em;
        padding: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
    }
`

const Btns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 2rem;
    z-index: 99;
`