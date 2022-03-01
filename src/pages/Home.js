import HeaderWrap from "../components/HeaderSection/Header";
import styled from "styled-components";
import FooterWrap from "../components/FooterSection/Footer";
import HeroSection from "../components/HeroSection/Hero";

const BodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    height: 100vh;
    width: 100vw;
`
export default function HomePage () {
    return (
        <BodyWrapper>
            <HeaderWrap />
            <HeroSection />
            <FooterWrap />
        </BodyWrapper>
    )
}