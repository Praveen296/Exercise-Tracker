import React,{useState,useEffect, useRef} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from './../axios';

function CreateExercise() {

  const [username,setUsername] = useState('');
  const [description,setDescription] = useState('');
  const [duration,setDuration] = useState('');
  const [date,setDate] = useState(new Date());
  const [users,setUsers] = useState([]);
  const textInput = useRef("userInput");

  useEffect(() => {
    axios.get('/users/')
      .then(response => {
        if (response.data.length > 0) {
          console.log(response.data);
          const allUserNames = response.data.map(user => user.username);
          console.log(allUserNames);
          setUsers(allUserNames);
          setUsername(response.data[0].username);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const exercise = {
        username : username,
        description : description,
        duration : duration,
        date : date
    }

    console.log(exercise);
    axios.post('/exercises/add', exercise)
        .then(res => console.log(res.data));

    setDate(new Date());    
  
    window.location = '/';

};


  return (
    <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select //ref= {textInput}
                required
                className="form-control"
                value={username}
                onChange={e => setUsername(e.target.value)}>
                {
                  users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={date}
                onChange={date => setDate(date)}
              />
            </div>
          </div>
  
          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
  )
}

export default CreateExercise

/*
export default class CreateExercise extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeDuration = this.onChangeDuration.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
      }
    }
  
    componentDidMount() {
      axios.get('/users/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map(user => user.username),
              username: response.data[0].username
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
  
    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      })
    }
  
    onChangeDuration(e) {
      this.setState({
        duration: e.target.value
      })
    }
  
    onChangeDate(date) {
      this.setState({
        date: date
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      const exercise = {
        username: this.state.username,
        description: this.state.description,
        duration: this.state.duration,
        date: this.state.date
      }
  
      console.log(exercise);
  
      axios.post('/exercises/add', exercise)
        .then(res => console.log(res.data));
  
      window.location = '/';
    }
  
    render() {
      return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
  
          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
      )
    }
  }*/