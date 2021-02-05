import React,{useState,useEffect} from 'react';
import {Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {getPosts,updatedPost} from '../../../actions/posts'
import './styles.css';


const Posts = () => {
  let items = [];
  let size = 25
  let unique = 100;

  const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getPosts())
	},[dispatch])

  const posts = useSelector((state)=>state.posts)
  console.log()
  
 

 
  const [editable,Edit] = useState(false);
   function table(size){
    for(let i=0;i<size;i++){
      items.push(
     <tr key={unique++} >
       <td className='rrow1' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
       <td className='rrow2' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
       <td className='rrow3' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
       <td className='rrow4' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
       <td className='rrow5' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
     </tr>)}}
  table(size)
  
function submit(){
  let date =[];
  let time =[];
  let place =[];
  let topic =[];
  let teacher = [];
  let first = document.querySelectorAll('.rrow1');
  let second= document.querySelectorAll('.rrow2');
  let third = document.querySelectorAll('.rrow3');
  let fourth= document.querySelectorAll('.rrow4');
  let fifth = document.querySelectorAll('.rrow5');

  for(let i =0;i<first.length;i++){
   date.push(first[i].textContent);
   time.push(second[i].textContent);
   place.push(third[i].textContent);
   topic.push(fourth[i].textContent);
   teacher.push(fifth[i].textContent);

  }
  posts[0].date = date;
  posts[0].time = time;
  posts[0].place = place;
  posts[0].topic = topic;
  posts[0].teacher = teacher;
  dispatch(updatedPost(posts[0]._id,posts[0]))
} 
console.log(posts) 
if(posts.length !== 0){
  console.log(posts[0].teacher.length)
  if(posts[0].teacher.length === size){
    let info = [...posts]
    console.log(info.date)
    for(let i = 0;i<size;i++){
      items[i] = [info[0].date[i],info[0].time[i],info[0].place[i],info[0].topic[i],info[0].teacher[i]]
    }
    
  }
  console.log(items)
  items = items.map(item=>{
    return(
    <tr key={unique++} >
       <td className='rrow1' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}>{item[0]}</td>
       <td className='rrow2' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}>{item[1]}</td>
       <td className='rrow3' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}>{item[2]}</td>
       <td className='rrow4' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}>{item[3]}</td>
       <td className='rrow5' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}>{item[4]}</td>
     </tr>)
  })
}

console.log(items)
const [ButtonText,setButtonText] = useState('Edit');

 function change(){
      if(editable === true){
    setButtonText('Edit')
    Edit(false)
      }else{
        setButtonText('Submit')
        Edit(true)
      }
  }


  return (
     <div>
    <table className='students'>
      <tbody>
      
       {items}
      </tbody>

    </table>
      <Button variant = 'contained' color='secondary' size='small' onClick={()=>{submit();change()}/*setCurrentId(posts[posts.length-1]._id)*/ } fullWidth>{ButtonText}</Button>
    </div> 
      )
  };

export default Posts;
