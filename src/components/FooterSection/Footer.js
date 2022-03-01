import { Footer, FootText, SmallText } from "./FooterStyles";
import { BsFillSuitHeartFill } from "react-icons/bs";

export default function FooterWrap () {
    return (
        <Footer>
            <FootText>Github User Search</FootText>
            <SmallText>Built by Lilian Okeke  <BsFillSuitHeartFill fill="#AB2121"/></SmallText>
        </Footer>
    )
}