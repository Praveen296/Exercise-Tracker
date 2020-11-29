import React,{useState} from 'react';

function CreateUser() {

    const [state, setState] = useState({
        username : ''
    });

    function onChangeUserName(e) {
        setState(state => ({...state,username : e.username}));
    }

    function onSubmit(e) {

        e.preventDefault();
        
        const user = {
            username : state.username,
        }
        
        console.log(user);

        setState(state => ({...state,username : ''}));
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit = {onSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <input type = 'text'
                    required
                    className = 'form-control'
                    value = {state.username}
                    onChange = {onChangeUserName}/>
                </div>
                <div className='form-group'>
                    <input type='submit' value='Create User Log' className='btn btn-primary'/>
                </div>    
            </form>
        </div>
    )

}

export default CreateUser;
