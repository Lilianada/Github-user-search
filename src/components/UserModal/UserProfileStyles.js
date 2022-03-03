import styled from "styled-components";

export const UserWrapper = styled.div`
    width: 220px;
    height: fit-content;
    background: var(--white-color);
    box-shadow: 9px 9px 16px rgb(189 189 189 / 20%)
    , -9px -9px 16px rgb(189 189 189 / 24%);
    border-radius: 10px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    transition: all .3s;

    @media screen and (min-width: 700px) {
        width: 250px;
        height: fit-content;
        margin: 2rem;
    }
`

export const ProfileImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 1.5rem 1rem 1rem;
`

export const UserDetails = styled.div   `
    display: block;
    padding: 1rem;
    transition: all .3s;
`
export const DetHeader = styled.div   `
    display: flex;
    padding: 1rem;
`
export const Det = styled.div   `
    display: flex;
    margin-bottom: .3rem;
    align-items: center;
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
