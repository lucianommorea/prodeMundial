import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getCountryByName } from '../../redux/actions/actions'
import s from './SearchBar.module.css'


export default function SearchBar({setCurrentPage}){

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    
    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getCountryByName(name))
        setName('')
        setCurrentPage(1)
        document.getElementById("name")[0] = ''
        document.getElementById("firstSelect").getElementsByTagName('option')[0].selected = 'selected'
        document.getElementById("secondSelect").getElementsByTagName('option')[0].selected = 'selected'
        document.getElementById("thirdSelect").getElementsByTagName('option')[0].selected = 'selected'
    }

    return(
        <div className={s.all}>   
            <span className={s.search}>
                Search country by name:
            </span>
            <form className={s.bar} onSubmit={(e) => handleSubmit(e)} >
                <input  type='text' 
                        id='name' 
                        placeholder="Country name..." 
                        autoComplete='off' 
                        value={name} 
                        className={s.input}
                        onChange={(e) => handleChange(e)} />
                <button type='submit' className={s.btn}> Search</button>
            </form>
        </div>
    
    )
}
