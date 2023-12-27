import React, { useState } from 'react';

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

  return (
      <form onSubmit={submitHandler}>
        <div className='container'>
        <div className='inner-container'>

        </div>
        <div>
            <span>User Name </span>
            <input type='text' 
            onChange={userInputHandler}
            value={user}
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
  )
}

export default Register;
