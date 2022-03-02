import { Header, HeadText, HeaderLinks, Link } from "./HeaderStyles";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiUserSearchFill } from "react-icons/ri";

export default function HeaderWrap () {
    return (
        <Header>
            <HeadText>Github User Search</HeadText>
            <HeaderLinks>
                <Link href="https://github.com/lilianada/"><BsGithub fill="white" size={18}/></Link>
                <Link href="https://linkedin.com/lilianada/"><BsLinkedin fill="white" size={18}/></Link>
                <Link href="https://twitter.com/_ozie/"><BsTwitter fill="white" size={18}/></Link>
            </HeaderLinks>
        </Header>
    )
}