import '../App.css';
import { useEffect,useState } from 'react';
import UserList from '../components/UserList';
import NavBar from '../components/NavBar/NavBar';
import MyModal from '../components/MyModal/MyModal';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const Users =(props)=> {
  useEffect(() => {
    fetchUsers()
  },[])
  const fetchUsers= async ()=>{
    const users =await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(users.data);
  }
  const [users,setUsers]=useState("");
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
  const [modal, setModal]=useState(false)
  return ( 
      <div className="container">
        <div className="row">
          <div className="col s6">
            <a className="waves-effect waves-light btn m-1" 
            onClick={()=>setModal(true)}>
              Add Users</a>
          </div>
          <MyModal visible={modal} setVisible={setModal}>
          {
            <div className="col s6">
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
          </MyModal>
        </div>
          {users?(
          <UserList search removeUser={deleteUser}>
            {users}
          </UserList>
          ):(
            <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
          )
          }
      </div>
    
  );
}

export default Users;
