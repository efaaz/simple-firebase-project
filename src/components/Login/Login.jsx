import React, { useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";

function Login() {
    const [user, setuser] = useState(null)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoggleSignin = ()=>{
    signInWithPopup(auth, provider)
    .then(result => {
        const res = result.user
        console.log(res);
        setuser(res)
    })
    .catch(err => {
        console.log('Error: ',  err.message);
    }
    )
  }
  const handleGoggleSignOut = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        setuser(null);
      }).catch((error) => {
        // An error happened.
        console.log('Error: ',  error.message);
      });
  }
  return (
    <>
      <div className="flex justify-center gap-5">

        {
            !user ?
            <button onClick={handleGoggleSignin} className="btn border border-green-600 px-6 py-2 rounded-lg mt-28">
          Sign in
        </button>:
        <button onClick={handleGoggleSignOut} className="btn border border-green-600 px-6 py-2 rounded-lg mt-28">
          Sign Out
        </button>}
      </div>
      <h1 className="mt-6 text-3xl text-center">Username: {user?.displayName} </h1>
      <h1 className="mt-6 text-3xl text-center">Email: {user?.email} </h1>
    </>
  );
}

export default Login;
