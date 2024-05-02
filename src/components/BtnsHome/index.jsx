import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { CountContext } from "../../contexts/count"
import styled from "styled-components"

export default function BtnsHome({ classy, text, countToSet }) {
    const { theme } = useContext(ThemeContext)
    const { setCount } = useContext(CountContext)
    return (
        <Button
            className={classy}
            onClick={() => setCount(countToSet)}
            style={{ color: theme.text, backgroundColor: theme.backgroundElement, boxShadow: '0px 0px 5px' + theme.shadow }}>
            {text}
        </Button>
    )
}


const Button = styled.button`
    width: min(100%, 900px);
    cursor: pointer;
    font-size: 2rem;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    margin: 2rem 0;
    &:hover{
        transform: scale(1.01);
    }
    }
    .hide{
       display: none;
`