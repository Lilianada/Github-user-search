import UserProfile from "../UserModal/UserProfile";
import styled, {ThemeProvider} from 'styled-components';
import { useState } from "react";
import { Button } from "../Button/ButtonStyles";

const GridWrapper = styled.section`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const theme = {
    main: "300px"
}

export default function GridContainer () {
    const [visible, setVisible] = useState(15);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 15)
    }

    return (
        <>
            <GridWrapper>
                {/* {UserProfile.slice(0, visible).map(() => )} */}
            </GridWrapper>
            <ThemeProvider theme={theme}>
                <Button onClick={showMoreItems}>Load more</Button>
            </ThemeProvider>
        </>
    );
}