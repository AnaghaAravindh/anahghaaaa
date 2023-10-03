import { ref, set } from 'firebase/database';
import React, { useState } from 'react'
import { uid } from 'uid';
import { db } from './Firebase';

const Course = () => {
    const [cname, setCname] = useState('');
    const [duration, setDuration] = useState('');
    const [fee, setFee] = useState('');
    const [error, setError] = useState(false);

    const readcoursename = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setCname(event.target.value);
    }
    const readcourseduration = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setDuration(event.target.value);
    }
    const readcoursefee = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setFee(event.target.value);
    }
    const readcoursedetails = (event) => {
        event.preventDefault();
        if (cname.trim() === '' || duration === '' || fee === '') {
            setError(true);
            return;
        }
        else {
            setError(false);
        }


    }
    const uuid = uid();

    const myobj = {
        CourseName: cname,
        Duration: duration,
        FeeAmount: fee
    }
    console.log(myobj);
   
    set(ref(db, `Event/${uuid}`), myobj);

    const connecttodb = () => {
    }

    return (
        <div>
            Course Name: <input type='text' onChange={readcoursename} /><br />
            Duration: <input type='text' onChange={readcourseduration} /><br />
            Fee Amount: <input type='text' onChange={readcoursefee} />
            <br></br>
            <input type='submit' onClick={readcoursedetails} /><br /><br />
            {error && "Error occurs"}
        </div>
    )
}

export default Course
