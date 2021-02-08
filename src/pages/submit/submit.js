import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import React,{useEffect} from 'react';
import './submit.css'
import {useDispatch,useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {updatedPost,getPosts} from './../../actions/posts'
export const Submitask = ()=>{

    const [label, setLabel] = React.useState('');
    const [link, setLink] = React.useState()
    const dispatch = useDispatch()
    let unuqiue = 3657345;
    useEffect(()=>{
		dispatch(getPosts())
	},[dispatch])
    const changeHandler = (event)=>{
        setLink({ ...link, text: event.target.value })
    }
    const handleChange=(event)=>{

        setLabel(event.target.value);
    }
    const posts = useSelector((state)=>state.posts)
    const submit = ()=>{
        posts.forEach((user)=>{
            if(user.email===localStorage.getItem('email')&&user.length!==0){
              
                user.tasks.forEach((item,i)=>{
                   
                   if(item[0]===label&&item.length!==0){
                    user.tasks[i][2]=link.text

                    dispatch(updatedPost(user._id,user))
                    alert('submited')
                   }
                })
                
            }
        })
    }
    let list = []
    posts.forEach((user)=>{
        if(user.email===localStorage.getItem('email')&& user.length!==0){
            list=user.tasks.filter(item=>{
                
                return item[2]!==undefined
            })
        }})
        let menuItemas =[]
        if(posts.length!==0){
            menuItemas = posts[0].tasks.map((item)=>{
                return (
                    <MenuItem key = {unuqiue++}value={item[0]}>{item[0]}</MenuItem> 
                )})
        
        }
    let number = 1
    return(
        <>
        <div className='submited-tasks'>
        {list.map(item=>{
            
            return (
            <div className='submited-tasks-item'>{number++}: Task name {item[0]} and submited <a style={{color:'#677ae4'}} href='item[2]'>url</a> </div>
            )
        })}
        </div>
    <div className='Submit-block'>
         <FormControl >
        <InputLabel id="select-label">Tasks</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={label}
          onChange={handleChange}
        >
       {menuItemas}
        </Select>
      </FormControl>
       <form  noValidate autoComplete="off" onChange={ changeHandler }>
            <TextField   label='Put url of deploy'></TextField>
        </form> 
        <Button variant="contained" onClick={submit} color="primary">Submit</Button>
    </div>
    </>)
}