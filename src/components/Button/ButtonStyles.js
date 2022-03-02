import styled from "styled-components";

export const Button = styled.button`
    background: var(--red-color);
    border: none;
    border-radius: 5px;
    color: var(--white-color);
    font-size: 14px;
    font-weight: 500;
    margin-right: 2%;
    margin-left: 2%;
    padding: 1rem;
    cursor: pointer;
    width: ${props => props.theme.main};

    :hover{
        transition: ease-in .3s;
        box-shadow: 9px 9px 16px #D9D9D9,
         -9px -9px 16px #D9D9D9;
    }
`

Button.defaultProps = {
    theme: {
      main: "100px"
    }
}
  
 