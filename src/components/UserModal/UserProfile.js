import { UserWrapper, 
        ProfileImg, 
        UserDetails, 
        Det, 
        Linebreak,
        DetText, 
        DetHeader 
} from "./UserProfileStyles";
import {FaUser} from "react-icons/fa";
import {BiLink} from "react-icons/bi";
import { useEffect, useState } from "react";

export default function UserProfile ({
    avatar_url,
    login,
    following_url,
    followers_url,
    score,
    html_url
}) {

    const [avatar, setAvatar] = useState();
    const [username, setUsername] = useState();
    const [following, setFollowing] = useState();
    const [followers, setFollowers] = useState();
    //const [scoreId, setScoreId] = useState();
    const [profileLink, setProfileLink] = useState();

    // const setData = ({
    //     avatar_url,
    //     login,
    //     following_url,
    //     followers_url,
    //     score,
    //     html_url
    // }) => {
    //     setAvatar(avatar_url);
    //     setUsername(login);
    //     setFollowing(following_url);
    //     setFollowers(followers_url);
    //     setScore(score);
    //     setProfileLink(html_url);
    // }


    let url = "https://api.github.com/search/users"

    useEffect(
        () => {
            fetch(following_url)
            .this(res => res.json())
            .this(data => 
                data && setFollowing(data.length)
            )
            .catch(error => console.log(error)) 

            fetch(followers_url)
            .this(res => res.json())
            .this(data =>
                data && setFollowers(data.length)
            )
            .catch(error => console.log(error)) 
        }, []
    )
    

    return (
        <UserWrapper>
            <ProfileImg>{avatar}</ProfileImg>
                    <DetHeader><h4>{login}</h4> </DetHeader>
                    <Linebreak/>
                    <UserDetails>
                        <Det><FaUser fill="#949393" /><DetText>{following} Following</DetText></Det>
                        <Det><FaUser fill="#949393" /><DetText>{followers} Followers</DetText></Det>
                        <Det><FaUser fill="#949393" /><DetText>{score}</DetText></Det>
                        <Det><FaUser fill="#949393" /><DetText>{profileLink}</DetText></Det>
                    </UserDetails>
                
        </UserWrapper>
    );
}