import { UserWrapper, 
        ProfileImg, 
        UserDetails, 
        Det, 
        Linebreak,
        DetText, 
        DetHeader 
} from "./UserProfileStyles";
import {FaUser} from "react-icons/fa";
import {VscRepo} from "react-icons/vsc";
import {GoRepoPush} from "react-icons/go";
import { useEffect, useState } from "react";

export default function UserProfile ({
    avatar_url,
    login,
    following_url,
    followers_url,
    score,
    repos_url
}) {
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [repo, setRepo] = useState([]);
    const [onHover, setOnHover] = useState(false)

    useEffect(
        () => { console.log(following_url)
            fetch(following_url.replace('{/other_user}', ''))
            .then(res => res.json())
            .then(data => 
               {console.log(data, typeof data, data.length);
                data && setFollowing(data);
            }
            )
            .catch(error => console.log(error)) 

            fetch(followers_url.replace('{/other_user}', ''))
            .then(res => res.json())
            .then(data =>
                data && setFollowers(data)
            )
            .catch(error => console.log(error)) 

            fetch(repos_url)
            .then(res => res.json())
            .then(data =>
                data && setRepo(data)
            )
            .catch(error => console.log(error)) 
        }, []
    );


    return (
        <>
            <UserWrapper 
                onMouseOver={() => setOnHover(true)} 
                onMouseOut={() => setOnHover(false)}
                >
                <ProfileImg src={avatar_url}/>
                        <DetHeader><h4>{login}</h4> </DetHeader>
                        <Linebreak/>
                    {onHover && (
                            <UserDetails>
                                <Det><FaUser fill="#949393" /><DetText>{following.length} Following</DetText></Det>
                                <Det><FaUser fill="#949393" /><DetText>{followers.length} Followers</DetText></Det>
                                <Det><GoRepoPush fill="#949393" /><DetText>{score}</DetText></Det>
                                <Det><VscRepo fill="#949393" /><DetText>{repo.length}</DetText></Det>
                            </UserDetails>
                    )}
            </UserWrapper>
        </>
    );
}