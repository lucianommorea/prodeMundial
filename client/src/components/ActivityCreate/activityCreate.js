import React from 'react';
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, postActivity } from '../../redux/actions/actions';
import { useHistory} from 'react-router-dom';
import s from './activityCreate.module.css'

function validate(input){
    let errors = {}
    if(!input.name) errors.name = 'Name Activity is required'
    if(input.name && !/^[A-Za-z0-9\s]+$/.test(input.name)) errors.name = 'Name must have only letters numbers and spaces'
    if(!input.difficult) errors.difficult = 'Choose one'
    if(!input.duration) errors.duration = 'Duration is required'
    if(input.duration && !/^[0-9]+([.][0-9]+)?$/.test(input.duration)) errors.duration = 'Duration must be integer or decimal'
    if(!input.season) errors.season = 'Choose one'
    if(input.countries.length === 0) errors.countries = 'Select at least one Country'
    
   return errors
}

export default function ActivityCreate () {

    const dispatch = useDispatch()
    let allCountries = useSelector(state=> state.allCountries)
    const history = useHistory()

    useEffect(()=> {
        dispatch(getCountries())
    }, [dispatch])

    const[input, setInput] = useState({
        name: '',
        difficult: '',
        duration: '',
        season: '',
        countries: []
    })

    const[errors, setErrors] = useState({})

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelectCountries(e){
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
        setErrors(validate({
            ...input,
            countries: e.target.value
        }))
    }

    function handleCheck(e){
        setInput({
            ...input,
            season: e.target.value
        })
        setErrors(validate({
            ...input,
            season: e.target.value
        }))
    }
    
    function handleSelect(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    

    function handleSubmit(e){
        e.preventDefault()
        dispatch(postActivity(input))
        alert('Actividad creada')
        setInput({
            name: '',
            difficult: '',
            duration: '',
            season: '',
            countries: []
        })
        history.push('/home')
    }
    
    function handleDelete(el){
        setInput({
            ...input,
            countries: input.countries.filter(c=> c !== el)
        })
    }


    return (
        <div className={s.back}>
            <div id={s.board}>
                <div id={s.title}>
                    <h1> Create Activity</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label> Name: </label>
                        <input  type='text'
                                value={input.name} 
                                name='name' 
                                autoComplete='off'
                                onChange={handleChange}     
                        />
                        {   
                            errors.name && (
                                <div>
                                    <span> {errors.name}</span>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <label> Difficult: </label>
                        <select value={input.difficult} name='difficult' multiple={false} onChange={handleSelect} >
                            <option value="" disabled>Please select</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        {   
                            errors.difficult && (
                                <span> {errors.difficult}</span>
                            )
                        }
                    </div>
                    <div>
                        <label> Duration:</label>
                        <input  type='number' 
                                value={input.duration} 
                                name='duration' 
                                autoComplete='off'
                                min= '0'
                                step=".01"
                                onChange={handleChange}
                        />
                        {   
                            errors.duration && (
                                <div>
                                <span> {errors.duration}</span>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <label> Season: </label>
                        {/* <select value={input.season} name='season' multiple={false} onChange={handleSelect} > */}
                            <label>
                                <input type='radio' 
                                    name='season'
                                    value='Summer'
                                    onChange={handleCheck} />
                                    Summer
                            </label> 
                            <label>
                                <input type='radio' 
                                    name='season'
                                    value='Autumn'
                                    onChange={handleCheck} />
                                    Autumn
                            </label> 
                            <label>
                                <input type='radio' 
                                    name='season'
                                    value='Winter'
                                    onChange={handleCheck} />
                                    Winter
                            </label> 
                            <label>
                                <input type='radio' 
                                    name='season'
                                    value='Spring'
                                    onChange={handleCheck} />
                                    Spring
                            </label> 
                            {/* <option value="" disabled>Please select</option>
                            <option value='Summer'>Summer</option>
                            <option value='Autumn'>Autumn</option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option> */}
                        {/* </select> */}
                        {   
                            errors.season && (
                                <div>
                                    <span> {errors.season}</span>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <label> Countries: </label>
                            <select value={input.countries} onChange={handleSelectCountries} >
                                <option value="" disabled >Please select</option>
                                {
                                    allCountries && allCountries.map(c=>(
                                        <option value={c.name} key={c.id}> {c.name} </option>
                                    ))
                                }
                        </select>
                        {   
                            errors.countries && (
                                <div>
                                    <span> {errors.counties}</span>
                                </div>
                            )
                        }
                    </div>
                    {input.countries.map(c=>
                            <div key={c}>
                                <span>
                                    {c}
                                </span>
                                <button onClick={()=>handleDelete(c)}>X</button>
                            </div>
                        )}  
                    <button type='submit' disabled={!input.name || !input.season || !input.difficult || !input.duration || !input.season || input.countries.length === 0}>Create Activity</button>

                </form>

          
            </div>
        </div>
    )
}