import { Header, HeadText, HeaderLinks, Link } from "./HeaderStyles";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function HeaderWrap () {
    return (
        <Header>
            <HeadText><BsGithub fill="white"/>  Github User Profile Search</HeadText>
            <HeaderLinks>
                <Link href="https://github.com/lilianada/"><BsGithub fill="white" size={18}/></Link>
                <Link href="https://linkedin.com/lilianada/"><BsLinkedin fill="white" size={18}/></Link>
                <Link href="https://twitter.com/_ozie/"><BsTwitter fill="white" size={18}/></Link>
            </HeaderLinks>
        </Header>
    )
}