import '../App.css';
import { useState } from 'react';
import UserList from '../components/UserList';
import NavBar from '../components/NavBar/NavBar';

const Users =(props)=> {
  
  const [showAddUser, setShowAddUser] = useState(false);
  const [users,setUsers]=useState(
    [
      {
      id:1,
      name:'Макс',
      phone:'80447669504',
      },
      {
      id:2, 
      name:'Ваня',
      phone:'80448553604',
      },
      {
      id:3,  
      name:'Влад',
      phone:'80293650202',
      }
    ]
  );
  const [user,setUser]=useState({name:'',phone:''});
  const onChange= (e)=>{
    if(e.target.id == "name"){
      setUser({...user,name: e.target.value})
    }
    else{
      setUser({...user,phone: e.target.value})
    }
  }

  const AddUser=()=>{
    const id=Math.random()*1
    setUser({...user,id:id})
    setUsers([...users,user])
    setUser({name:'',phone:''})
  }
  const cancel=()=>{
    setUser({name:'',phone:''})
  }

  const deleteUser = (id)=>{
    const confirm=window.confirm("это точно нужно удалить?")
    if(confirm)setUsers(users.filter((user)=>user.id !== id))
  }
  
  
  console.log(user);
  return ( 
    <div >
      <div className="container">
        <div className="row">
          <div className="col s6">
            <a className="waves-effect waves-light btn m-1" 
            onClick={()=>setShowAddUser(!showAddUser)}>
              Add Users</a>
          </div>
          {showAddUser && <div className="col s6">
              <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>

              <input 
              onChange={onChange} 
              id="name"
              type="text"
              className="validate"
              placeholder="First Name"
              value={user.name}
              />

            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">phone</i>
              
              <input 
              onChange={onChange} 
              id="phone" 
              type="tel" 
              className="validate" 
              placeholder="Phone Number"
              value={user.phone}
              />

            </div>
            <div className="col s6">
              <a className="waves-effect waves-light btn m-1" onClick={()=>AddUser()}>Add</a>
            </div>
            <div className="col s6">
              <a className="waves-effect waves-light btn m-1" onClick={()=>cancel()} >Cancel</a>
            </div>
          </div>
          }
        </div>
        <UserList search removeUser={deleteUser}>{users}</UserList>
      </div>
    </div>
  );
}

export default Users;
