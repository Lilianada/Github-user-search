import {SearchSection, SearchWrap, InputBar, SearchHead} from "./SearchStyles"
// import {IoSearchSharp} from 'react-icons/io5'
import { Button } from "../Button/ButtonStyles"
import { useState } from "react"
import InvalidInput from "../NoUser/InvalidRequest"
import UserProfile from "../UserModal/UserProfile";
import NoUserFound from "../NoUser/UserNotFound";

export default function SearchBar () {
    let url = "https://api.github.com/search/users"

    const [page, setPage] = useState(1);
    const [input, setInput] = useState("");
    const [error, setError] = useState();
    const [data, setData] = useState([])
    

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (input === ""){
            setError("Invalid input.")
            return 
        }
        fetch (url + `?q=${input}&page=${page}`)
        .then (res => res.json())
        .then (data => { console.log(data)
            if (data.invalid){
                setError(data.message)
            }else if( data.total_count === 0){ 
                setError("User Not Found!")
            }else{
                setData(data)
                setError("No Error.")
            }
        });
        
    }
    
    return (
        <>
            <SearchSection>
                <SearchHead>Search for User</SearchHead>
                <SearchWrap>
                    <InputBar 
                        type='search'
                        placeholder='Enter username...'
                        id='search'
                        value={input}
                        onChange={handleInput}
                    />
                    {/* <IoSearchSharp fill="#949393" style={{position: "absolute", top:"20.5rem", left:"24rem"}}/> */}
                    <Button 
                        type="submit"
                        value={'submit'}
                        onClick={handleSubmit}
                        >
                        Submit
                    </Button>
                </SearchWrap>
            </SearchSection>
            {error  == "Invalid input." && <InvalidInput/>}
            {error == "User Not Found!" && <NoUserFound/>}
            {error  == "No Error." && (
                data.items.map((item, index) => {
                    return <UserProfile
                                key= {item.id}
                                id= {item.id}
                                avatar_url= {item.avatar_url}
                                login= {item.login}
                                following_url= {item.following_url}
                                followers_url= {item.followers_url}
                                score= {item.score}
                                html_url= {item.html_url}
                            />
                }) 
            )}
        </>  
    );
}