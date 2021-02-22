import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'
import {useSelector} from 'react-redux'
export const RegisterPage = (rerepeat) => {
    
    console.log(rerepeat)
    const dispatch = useDispatch()
    const posts = useSelector((state)=>state.posts)
    console.log(posts)
    const [form2, setForm2] = useState({
        username: '',
        firstName: '',
        lastName: '',
        location: '',
        email: '',
        mentor: false,
        telegram:'Not given',
        phoneNumber:'Not given',
        about:`About info isn't written`,
        english:'Not given',
        education:'Empty',
        mark:[],
        tasks:[],
        mentorName:'Empty',
        submitedTasks:[] ,
        password:''  ,
        date:[],
        time:[],
        place:[],
        topic:[],
        teacher:[] 
    })

    const changeHandler = event => {
        event.preventDefault()
        setForm2({ ...form2, [event.target.name]: event.target.value })
        
    }

    const registerHandler = async () => {
            let busyName = false
            if(posts===[]){
                form2.tasks=posts[0].tasks
            }else{
                form2.tasks = []
                posts.forEach(element => {
                    if(element.email === form2.email || element.username === form2.username){
                        alert('this username or email is busy')
                        busyName = true
                        return
                        
                    }
                });
            }
            if(busyName===false){
                dispatch(createPost(form2))
                localStorage.setItem("email", form2.email);
                localStorage.setItem("mentor", false);
                rerepeat.reapeat('reapet')
            }
          
        
    }

    return (
        <div>
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>EduCenter</h1>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Registration for students</span>
                            <div>
                                <div className="input-field">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="username" type="text" autoComplete="off" name="username" onChange={ changeHandler } />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" autoComplete="off" name="firstName" onChange={ changeHandler } />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text" autoComplete="off" name="lastName" onChange={ changeHandler } />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="input-field">
                                <i className="material-icons prefix">place</i>
                                    <input id="location" type="text" name="location" autoComplete="off" onChange={ changeHandler } />
                                    <label htmlFor="location">Location</label>
                                </div>
                                <div className="input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" autoComplete="off" name="email" onChange={ changeHandler } />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                <i className="material-icons prefix">lock_open</i>
                                    <input placeholder="" id="password" type="password" name="password" onChange={ changeHandler } />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <button className="btn waves-effect waves-light" type="submit" name="action"  onClick={ registerHandler }  >Create account
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}