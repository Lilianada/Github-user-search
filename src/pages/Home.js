import HeaderWrap from "../components/HeaderSection/Header";
import styled from "styled-components";
import FooterWrap from "../components/FooterSection/Footer";
import HeroSection from "../components/HeroSection/Hero";
import SearchBar from "../components/SearchBox/SearchInput";
import UserProfile from "../components/UserModal/UserProfile";
import NoUserModal from "../components/NoUser/UserNotFound";
import GridContainer from "../components/GridContainer/GridWrapper";

const BodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    /* grid-template-rows: auto;
    width: 100%;  */
    height: 100vh;
    /* gap: 2rem; */
`
export default function HomePage () {
    return (
        <>
            <BodyWrapper> 
                <HeaderWrap />
                <HeroSection />
                <SearchBar />
                {/* <GridContainer/> */}
                <FooterWrap />
            </BodyWrapper>
        </>
    );
}