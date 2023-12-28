import React, { useEffect, useRef, useState } from 'react';
import "./Register.css";

function Register() {
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    
    const userRef = useRef();
 

    const userInputHandler = (e) => {
        setUser(e.target.value)
    };

    const passwordInputHandler = (e) => {
        setPwd(e.target.value)
    };

    const matchInputHandler = (e) => {
        setMatchPwd(e.target.value)
    }

    const submitHandler = (e) => {
      e.preventDefault();
      console.log("submitted");
      console.log(user);
      console.log(pwd);
      console.log(matchPwd);
      setUser('');
      setPwd('');
      setMatchPwd('');
    };

    useEffect(()=>{
      userRef.current.focus();
    },[]);

  return (
        <div className='container'>
      <form onSubmit={submitHandler}>
        <div className='inner-container'>

        <div className='inner-inp'>
            <label>User Name </label>
            <input type='text' 
            onChange={userInputHandler}
            value={user}
            ref={useRef}
            required
            />
        </div>
        <div>
            <span>Password </span>
            <input type='password'
            onChange={passwordInputHandler}
            value={pwd}
            />
        </div>
        <div>
            <span>Confirm Password </span>
            <input type='password'
            onChange={matchInputHandler}
            value={matchPwd}
            />
        </div>
        <div>
            <button>Submit</button>
        </div>
        </div>
      </form>
        </div>
  )
}

export default Register;
