import styled from "styled-components";

export const UserWrapper = styled.div`
    width: 290px;
    height: fit-content;
    background: var(--white-color);
    box-shadow: 9px 9px 16px rgb(189 189 189 / 20%)
    , -9px -9px 16px rgb(189 189 189 / 24%);
    border-radius: 10px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;

    @media screen and (min-width: 700px) {
        width: 350px;
        height: fit-content;
        margin: 2rem;
    }
`

export const ProfileImg = styled.img`
    width: 100%;
    height: fit-content;
`

export const UserDetails = styled.div   `
    display: block;
    padding: 1rem;
`
export const DetHeader = styled.div   `
    display: flex;
    padding: 1rem;
`
export const Det = styled.div   `
    display: flex;
    margin-bottom: .3rem;
`
export const DetText = styled.p   `
    margin-left: .75rem;
    color: #949393;
`
export const Linebreak = styled.hr`
    width: 100%;
    background: var(--grey-color);
    height: 0.5px;
    border: none;
`
