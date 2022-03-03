import { HeroWrap, HeroText, HeroSubText, ListItems, List, Bottom } from "./HeroStyles"
import { BsGithub } from "react-icons/bs";
import {MdCelebration} from "react-icons/md"

export default function HeroSection () {
    return (
        <HeroWrap>
            <HeroText>
                Getting Started
            </HeroText>
            <HeroSubText>Search for different github users on <BsGithub fill="black"/> Github User Profile Search. 
            <ListItems> 
                <List>To begin, input the name of the user in the search box provided below and hit the search button.</List>
                <List>Hover on any of the displayed results to view more information about the user.</List>
                <List>Click on the clear button to clear aout the search results.</List>
                <List>Click on the buttons at the bottom of the page to load more user profiles.</List>
            </ListItems>
            </HeroSubText>

            <Bottom>Happy Searching! <MdCelebration/><MdCelebration/></Bottom>
        </HeroWrap>
    )
}