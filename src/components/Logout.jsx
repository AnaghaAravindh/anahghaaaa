import React from 'react'
import './Login.css';
import { uid } from 'uid';
import { ref, set } from 'firebase/database';
import { db } from '../config/Firebase';

const Logout = (props) => {
    
    // const uuid=uid();
    // set(ref(db,`Events/${uuid}`),{
    //     name,
    //     uuid,
    // });
    
  return (
    <div>
        <h2 className='bb'>welcome to React</h2>
     <button onClick={props.onLogout} className='but'>Logout</button> 
    </div>
  )
}

export default Logout
