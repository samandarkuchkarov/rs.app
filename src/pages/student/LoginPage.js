import React, { useState, useEffect, useContext } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getPosts} from '../../actions/posts'

export const LoginPage = (rerepeat) => {
    const [form, setForm2] = useState({
        email:'',
        password:''
    })

    const changeHandler = event => {
        setForm2({ ...form, [event.target.name]: event.target.value })
    }
    const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getPosts())
	},[dispatch])

	const posts = useSelector((state)=>state.posts)
    const loginHandler =  () => {
        console.log(posts)
        posts.forEach(users=>{
            console.log(users.password)
            if(users.email === form.email && form.password===users.password){
                localStorage.setItem("email", form.email);
                localStorage.setItem("mentor", 'false');
                rerepeat.reapeat('reapet')
                
            }else{
              console.log(users.email === form.email)
            }
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>RS APP CLONE</h1>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Login for students</span>
                            <div>
                                <div className="input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" autoComplete="off" name="email" onChange={ changeHandler } />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                <i className="material-icons prefix">lock_open</i>
                                    <input id="password" type="password" name="password" onChange={ changeHandler } />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <button className="btn waves-effect waves-light" type="submit" name="action"  onClick={ loginHandler }  >Login
                                <i className="material-icons right">login</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}