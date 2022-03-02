import styled from "styled-components";

export const UserWrapper = styled.section`
    width: 270px;
    height: 290px;
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
        height: 300px;
        margin: 1rem 2rem;
    }
`

export const ProfileImg = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 1rem;
    padding: 1rem;
    background: url(/assets/blub.jpg);
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
