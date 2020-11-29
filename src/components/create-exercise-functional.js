import React,{useState,useEffect} from 'react'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'





function CreateExercise() {

    const [state, setState] = useState({
        username : 'test user',
        description : '',
        duration: 0,
        date : new Date(),
        users : ['test user']
    });

    useEffect(() => {
        setState(state => ({...state,username: 'test user',users : ['test user']}));
    },[]); 

    function onChangeUserName(e) {
        setState(state => ({...state,username : e.username}));
    }

    function onChangeDescription(e) {
        console.log(e.description);
        setState(state => ({...state,description : e.description}));
    }

    function onChangeDuration(e) {
        console.log(e.duration);
        setState(state => ({...state,duration : e.duration}));
    }

    function onChangeDate(date) {
        setState(state => ({...state,date : date}));
    }

    function onSubmit(e) {

        e.preventDefault();
        
        const exercise = {
            username : state.username,
            description : state.description,
            duration : state.duration,
            date : state.date
        }
        
        console.log(exercise);

        window.location = '/';
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit = {onSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <select useRef = 'userInput'
                    required
                    className = 'form-control'
                    value = {state.username}
                    onChange = {onChangeUserName}>
                    {
                        state.users.map(function(user) {
                            return <option
                            key = {user}
                            value = {user} > {user}
                            </option>
                        })
                    }
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description: </label>
                    <input type = "text" 
                    required
                    className = 'form-control'
                    value = {state.description}
                    onChange = {() => onChangeDescription(window.description)}/>
                    
                </div>
                <div className='form-group'>
                    <label>Duration (in minutes): </label>
                    <input type = "text" 
                    className = 'form-control'
                    value = {state.duration}
                    onChange = {onChangeDuration}/>
                    
                </div>
                <div className='form-group'>
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected = {state.date}
                        onChange = {onChangeDate}
                        />
                    </div>

                </div>
                <div className='form-group'>
                    <input type='submit' value='Create Exercise Log' className='btn btn-primary'/>
                </div>    
            </form>
        </div>
    )
}

export default CreateExercise;
