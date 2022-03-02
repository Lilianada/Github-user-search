import HeaderWrap from "../components/HeaderSection/Header";
import styled from "styled-components";
import FooterWrap from "../components/FooterSection/Footer";
import HeroSection from "../components/HeroSection/Hero";
import SearchBar from "../components/SearchBox/SearchInput";
import GridContainer from "../components/GridContainer/GridWrapper";
import ScrollToTop from "../components/ScrollTop";

const BodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    height: 100vh;
`
export default function HomePage () {
    return (
        <>
            <BodyWrapper> 
                <HeaderWrap />
                <HeroSection />
                <SearchBar />
                <ScrollToTop />
                <FooterWrap />
            </BodyWrapper>
        </>
    );
}