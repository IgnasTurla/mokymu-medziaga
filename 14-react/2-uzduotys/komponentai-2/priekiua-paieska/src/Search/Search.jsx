import { useRef } from "react"
import './Search.css'
import Button from "../components/Button";

const Search = (props) => {
    let inputRef = useRef();
    let items = props.items

    const onClickSearch = (e) => {
        e.preventDefault();
        const searchValue = inputRef.current.value.toLowerCase();
        const newData = items.filter(item => item.name.toLowerCase().includes(searchValue))

        props.onSearchButtonClick(newData)
    }

    const onClickReset = (e) => {
        e.preventDefault();
        props.onRessetButtonClick();
        inputRef.current.value = '';
    }

    return(
        <div id="search-input" >
           <input ref={inputRef} type="text" placeholder="Search..."/>
           <Button title='Search' action={onClickSearch}/>
         
           {
             inputRef.current?.value.length > 0 && (
                <Button title='Reset' action={onClickReset}/>
             )
           }
          
        </div>
    )
}

export default Search;

