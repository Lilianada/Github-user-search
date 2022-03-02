import styled from "styled-components";

export const UserWrapper = styled.section`
    width: 270px;
    height: 290px;
    background: var(--white-color);
    box-shadow: 9px 9px 16px rgb(189 189 189 / 20%)
    , -9px -9px 16px rgb(189 189 189 / 24%);
    border-radius: 10px;
    margin: 1rem;
    display: none;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 1rem;

    @media screen and (min-width: 900px) {
        width: 320px;
        height: 250px;
    }
`

export const ProfileImg = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 1rem;
    background: url(../../assets/rachel.png);
    box-shadow: 9px 9px 16px rgb(189 189 189 / 20%),
     -9px -9px 16px rgb(189 189 189 / 24%);

     @media screen and (min-width: 900px) {
        width: 100px;
        height: 100px;
        margin: 1.5rem 1rem 1rem;
    }
`

export const UserDetails = styled.div   `
    display: block;
`
export const Det = styled.div   `
    display: block;
`
