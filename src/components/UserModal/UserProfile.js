import { UserWrapper, ProfileImg, UserDetails, Det } from "./UserProfileStyles";

export default function UserProfile () {
    return (
        <UserWrapper>
            <ProfileImg></ProfileImg>
            <UserDetails>
                <Det><h4>Github Username:</h4> <p>Lilian Ada</p></Det>
                <Det><h4>Score:</h4> <p>7</p></Det>
                <Det><h4>Profile Link:</h4> <p>https://github.com;lilianada</p></Det>
            </UserDetails>
        </UserWrapper>
    );
}