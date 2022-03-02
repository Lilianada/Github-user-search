import styled from "styled-components";

export const SearchSection = styled.section`
    padding: 1rem 1rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    @media screen and (min-width: 700px){
        padding: 1rem 1.5rem;   
    }
`
export const SearchWrap = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
`
export const InputBar = styled.input`
    display: block;
    outline: var(--red-color);
    border: 2px solid var(--grey-color);
    border-radius: 5px;
    height: 30px;
    font-size: 13px;
    background: transparent;
    text-align: left;
    padding: 1rem;
    width: 400px;
    height: 2.85rem;
    color: var(--black-color);
    box-shadow: 9px 9px 16px rgb(217 217 217 / 22%), -9px -9px 16px rgb(255 255 255 / 50%);
    margin-bottom: 1rem;
    &::placeholder{
        color: var(--grey-color);
    }
`
export const SearchHead = styled.h3`
    margin-bottom: 1rem;
`



