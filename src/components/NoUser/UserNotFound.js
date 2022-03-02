import styled from "styled-components";
import {BiError} from "react-icons/bi";

export const NoUserInfo = styled.div`
    width: 200px;
    height: 50px;
    background: var(--white-color);
    box-shadow: 2px 8px 20px rgb(189 189 189 / 72%),
     -13px 11px 16px rgb(189 189 189 / 32%);
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`

export default function NoUserFound () {
    return (
        <NoUserInfo>
            <BiError fill="red" /><h4 style={{marginLeft: ".5rem"}}>User Not Found.</h4>
        </NoUserInfo>
    )
}