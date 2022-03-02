import {SearchSection, SearchWrap, InputBar, SearchHead} from "./SearchStyles"
// import {IoSearchSharp} from 'react-icons/io5'
import { Button } from "../Button/ButtonStyles"
import { useState } from "react"
import InvalidInput from "../NoUser/InvalidRequest"
import UserProfile from "../UserModal/UserProfile";
import NoUserFound from "../NoUser/UserNotFound";
import {ThemeProvider} from 'styled-components';

const theme = {
    main: "280px"
}

export default function SearchBar () {
    let url = "https://api.github.com/search/users"

    const [page, setPage] = useState(1);
    const [input, setInput] = useState("");
    const [error, setError] = useState();
    const [data, setData] = useState([])
    // const [display, setDisplay] = useState(false)
    const [visible, setVisible] = useState(10);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 10)
    }    

    // const display = () => {
    //     setDisplay((load) => load  data.length() !== 0 )
    // }

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
            setData(data.slice(0, 10))
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
                    data.items?.slice(0, visible).map((item, index) => {
                        return <UserProfile
                                    key= {item.id}
                                    id= {item.id}
                                    avatar_url= {item.avatar_url}
                                    login= {item.login}
                                    following_url= {item.following_url}
                                    followers_url= {item.followers_url}
                                    score= {item.score}
                                    repos_url= {item.repos_url}
                                />
                    }) 
                )}

                <ThemeProvider theme={theme}>
                    <Button onClick={showMoreItems} style={{
                   display: data.items?.length > 0 ? "flex" : "none", margin: "2rem auto"}}>Load more</Button>
                </ThemeProvider>
        </>  
    );
}
