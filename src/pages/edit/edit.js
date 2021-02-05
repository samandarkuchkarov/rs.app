import {useDispatch,useSelector} from 'react-redux'
import {getPosts} from '../../actions/posts'
import React, {  useEffect } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {updatedPost} from '../../actions/posts'
import './edit.css'
export const Edit = () =>{
    let unuqiue = 111122
    const dispatch = useDispatch()

    useEffect(()=>{
		dispatch(getPosts())
	},[dispatch])
    const posts = useSelector((state)=>state.posts)
    const [label, setLabel] = React.useState('');
    const [data, setData] = React.useState('');
    const handleChange=(event)=>{
        setLabel(event.target.value);
    }
    const changeHandler = (event) =>{
        setData(event.target.value);
    }
    const submit = (event)=>{
                posts.forEach((user)=>{
            if(user.email===localStorage.getItem('email')){
                switch(label){
                    case'Username':
                    user.username = data
                    break
                    case'First name':
                    user.firstName = data
                    break
                    case'Last name':
                    user.lastName = data
                    break
                    case'Location':
                    user.location = data
                    break
                    case'Telegram':
                    user.telegram = data
                    break
                    case'Phone number':
                    user.phoneNumber = data
                    break
                    case'Education':
                    user.education = data
                    break
                    case'About':
                    user.about = data
                    break
                    default:
                        return
                }
                dispatch(updatedPost(user._id,user))
                    alert('submited')
            }
        
        })
    }
    return(
        <>
        <div className='Submit-block'>
         <FormControl >
        <InputLabel key = {unuqiue++} id="select-label">Editable data</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={label}
          onChange={handleChange}
        >
         <MenuItem key = {unuqiue++} value='Username'>Username</MenuItem> 
         <MenuItem key = {unuqiue++} value='First name'>First name</MenuItem> 
         <MenuItem key = {unuqiue++} value='Last name'>Last name</MenuItem> 
         <MenuItem key = {unuqiue++} value='Location'>Location</MenuItem> 
         <MenuItem key = {unuqiue++} value='Telegram'>Telegram</MenuItem> 
         <MenuItem key = {unuqiue++} value='Phone number'>Phone number</MenuItem> 
         <MenuItem key = {unuqiue++} value='Education'>Education</MenuItem> 
         <MenuItem key = {unuqiue++} value='About'>About</MenuItem> 
    
        </Select>
      </FormControl>
      <form  noValidate autoComplete="off" onChange={ changeHandler }>
            <TextField className = 'input' key = {unuqiue++} label='Write new info'></TextField>
        </form> 
        <Button variant="contained" key = {unuqiue++} onClick={submit} color="primary">Submit</Button>
    </div>
        </>
    )
}