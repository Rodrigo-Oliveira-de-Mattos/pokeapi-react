import styled from "styled-components"
import Cards from "../../components/Cards"
import { useEffect } from 'react'
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { CountContext } from "../../contexts/count"
import Filter from "../../components/Filter"
import BtnsHome from "../../components/BtnsHome"

export default function Home() {
    const { theme } = useContext(ThemeContext)
    const { count, setCount } = useContext(CountContext)

    useEffect(() => {
        const BtnsAdd_unload = document.querySelector('.additional-1')
        const BtnsAdd_load = document.querySelector('.additional-2')

        if (count >= 20) {
            BtnsAdd_unload.classList.remove('hide')
            if (count >= 30) {
                BtnsAdd_load.classList.remove('hide')
            }
        } else if (count < 20) {
            BtnsAdd_unload.classList.add('hide')
            BtnsAdd_load.classList.add('hide')
        } // .toggle("hide") não foi usado, pois dava problema ao entrar nas info dos poke 

        count ==  150 && setCount(151) // tava com dó do Mew
    }, [count])

    return (
        <Main style={{ backgroundColor: theme.backgroundMain, gap: '0' }}>
            <div className="mg-bt">
                <Filter />
            </div>
            <Div>
                <BtnsHome classy={["additional-1 hide"]} countToSet={10} text={'Descarregar'} />
            </Div>
            <Cards url={`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`} />
            <Div>
                <BtnsHome countToSet={count + 10} text={'Carregar mais 10'} />
                <BtnsHome classy={["additional-2 hide"]} countToSet={count + 100} text={'Carregar mais 100'} />
            </Div>
        </Main>
    )
}

const Main = styled.main`
    .mg-bt{
        margin-bottom: 2rem;
        position: -webkit-sticky;
        position: sticky;
        top: 2rem;
        z-index: 99;
    }
`

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 99;
`