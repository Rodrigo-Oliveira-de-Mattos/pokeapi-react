import styled from "styled-components"

export default function Header() {
    return (
        <HeaderStyled>
            <h1>PokéAPI</h1>
            <input type="checkbox" name="toggle-theme" id="toggle-theme" />
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    height: 75px;
    background-color: var(--background-element);
    color: var(--text);
    font-size: 1.5em;
    h1{
        cursor: default;
    }
    input{
        cursor: pointer;
    }
` 