import {SearchSection, SearchWrap, InputBar, SearchHead} from "./SearchStyles"
import {IoSearchSharp} from 'react-icons/io5'
import { Button } from "../Button/ButtonStyles"


export default function SearchBar () {
    return (
        <SearchSection>
            <SearchHead>Search for User</SearchHead>
            <SearchWrap>
                <InputBar 
                    type='searxh'
                    placeholder='Search...'
                    id='search'
                />
                <Button>Submit</Button>
            </SearchWrap>
        </SearchSection>
    )
}