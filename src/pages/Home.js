import HeaderWrap from "../components/HeaderSection/Header";
import styled from "styled-components";
import FooterWrap from "../components/FooterSection/Footer";
import HeroSection from "../components/HeroSection/Hero";
import SearchBar from "../components/SearchBox/SearchInput";
import ScrollToTop from "../components/ScrollToTop/ScrollTop";

const BodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    height: 100vh;
    /* gap: 1rem; */
`
export default function HomePage () {
    return (
        <>
            <BodyWrapper> 
                <HeaderWrap />
                <HeroSection />
                <SearchBar />
                <FooterWrap />
                <ScrollToTop />
            </BodyWrapper>
        </>
    );
}