import React from 'react'
import { useState } from 'react';

const UserList = (props)=> {
    const [filter, setFilter] = useState(props.children);
    const onChange= (e)=>{
      setFilter(filter.filter((user)=>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())  
        )
      )

    }

    return (
        <>
       {props.search && 
            <form className="col s12">
                <div className="input-field col s12">
                  <i className="material-icons prefix">search</i>
                  <textarea 
                  onChange={onChange}
                  id="icon_prefix2" 
                  className="materialize-textarea"
                  placeholder="Search"
                  ></textarea>
              </div>
            </form>
        }
        <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Phone number</th>
              <th>Action</th>
          </tr>
        </thead>

        <tbody>
          
            {filter.map((user)=>
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td><i className="material-icons"
                onClick={()=>props.removeUser(user.id)}
                >delete</i></td>
              </tr>
            )}
          
        </tbody>
      </table>
      </>
    )
}

export default UserList
