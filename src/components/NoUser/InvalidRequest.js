import styled from "styled-components";
import {BiError} from "react-icons/bi";

export const InvalidRequestModal = styled.div`
    width: 270px;
    height: 100px;
    background: var(--white-color);
    box-shadow: 2px 8px 20px rgb(189 189 189 / 72%),
     -13px 11px 16px rgb(189 189 189 / 32%);
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
`

export default function InvalidInput () {
    return (
        <InvalidRequestModal>
            <BiError fill="red" /> <h4>Invalid input, please input a valid username.</h4>
        </InvalidRequestModal>
    )
}