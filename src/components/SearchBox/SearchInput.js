import {SearchSection, SearchWrap, InputBar, SearchHead, GridWrap} from "./SearchStyles"
import { Button } from "../Button/ButtonStyles"
import { useState } from "react"
import InvalidInput from "../NoUser/InvalidRequest"
import UserProfile from "../UserModal/UserProfile";
import NoUserFound from "../NoUser/UserNotFound";
import {ThemeProvider} from 'styled-components';
import LoadingAnimation from "../LoadAnim/LoadingAnim";

const theme = {
    main: "70%"
}

export default function SearchBar () {
    let url = "https://api.github.com/search/users"

    const [page, setPage] = useState(1);
    const [input, setInput] = useState("");
    const [error, setError] = useState();
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(10);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 10)
    }    

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (input === ""){
            setError("Invalid input.")
            setTimeout(() => {
                setError('')}, 1500)
            return 
        }
        setError('Loading')
        setVisible(10)
        fetch (url + `?q=${input}&page=${page}`)
        .then (res => res.json())
        .then (data => { console.log(data)
            if (data.invalid){
                setError(data.message)
                setTimeout(() => {
                    setError('')}, 1500)
            }else if( data.total_count === 0){ 
                setError("User Not Found!")
                setTimeout(() => {
                    setError('')}, 1500)
            }else{
                setData(data.items)
                setError("No Error.")
                setInput('')
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
                    
                    <Button 
                        type="submit"
                        value={'submit'}
                        onClick={handleSubmit}
                        >
                        Submit 
                    </Button>
                    <Button 
                        type="button"
                        value={'submit'}
                        onClick={() => {
                            setData([])
                        }}
                        >
                        Clear
                    </Button>

                    {error == 'Loading' && <LoadingAnimation />}
                </SearchWrap>
            </SearchSection>
            
                {error  == "Invalid input." && <InvalidInput/>}
                {error == "User Not Found!" && <NoUserFound/>}
                {error  == "No Error."  && (
                    <GridWrap>
                        {data?.slice(0, visible).map((item, index) => {
                            return <UserProfile
                                key= {item.id}
                                id= {item.id}
                                avatar_url= {item.avatar_url}
                                login= {item.login}
                                following_url= {item.following_url}
                                followers_url= {item.followers_url}
                                score= {item.score}
                                repos_url= {item.repos_url}
                                html_url= {item.html_url}
                            />
                        }) }
                    </GridWrap>
                )}

                <ThemeProvider theme={theme}>
                    <Button onClick={showMoreItems} style={{
                        display: data?.length > 10 ? "table" : "none", margin: "2rem auto"
                        }}>Load more</Button>
                </ThemeProvider>
        </>  
    );
}
