import { HeroWrap, HeroText, HeroSubText } from "./HeroStyles"

export default function HeroSection () {
    return (
        <HeroWrap>
            <HeroText>
                Getting Started
            </HeroText>
            <HeroSubText>Search for different github users on Git Search. To begin, 
                input the name of the user in the search box provided below and hit the search
                button. Click on the buttons at the bottom of the page to take you to the next page.
            </HeroSubText>
        </HeroWrap>
    )
}