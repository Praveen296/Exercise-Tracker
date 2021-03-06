import React,{useState} from 'react';
import axios from './../axios';


function CreateUser() {

  const [username,setUsername] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: username
    }

    console.log(user);

    try{
        const res = await axios.post('/users/add',user);
        console.log(res.data);
    } catch(err) {
        console.log('Error: ',err);
    }
    setUsername('');
  
  }

  return (
    <div>
      <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
    </div>
  )
}

export default CreateUser


/*
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  async onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    try{
        const res = await axios.post('/users/add',user);
        console.log(res.data);
    } catch(err) {
        console.log('Error: ',err);
    }


    
    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}*/