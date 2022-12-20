import React, { useState } from 'react'
import Add from '../img/addAvatar.png'
import {auth, db, storage} from "../firebase"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage"
import {doc, setDoc} from "firebase/firestore"

const Register = () => {

  const [err, setErr] = useState(false)
  const [status, setStatus] = useState(0)
  const [fileName, setFileName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    
    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on("state_changed",  (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setStatus(progress)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, (err) => {
        console.log(err)
      }, async() => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL
        })
        try {
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL
          })
        }catch(err) {
          console.log(err)
        }
        try {
          await setDoc(doc(db, "userChats", res.user.uid), {})
        }catch (err) {
          console.log(err)
        }
      })
      
    }catch(error){
      console.log(error)
      setErr(true)
    }
  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Social2.0</span>
            <span className="title">Signup</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="file" id='file' style={{display: "none"}} onChange={(e) => {
                  setFileName(e.target.files[0].name)
                }} />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>{
                        fileName === ""?
                        "upload Avater":
                        <p>{fileName}</p>
                      }</span>
                </label>
                <p>{status}</p>
                <button>Sign Up</button>
                {err && <span>Something wrong</span>}
            </form>
            <p>Yoy already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register