import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import {useDispatch} from 'react-redux'
import {getPosts} from '../../../actions/posts'
const StudentSchedule=()=>{
    let size = 25;
    const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getPosts())
	},[dispatch])

  const posts = useSelector((state)=>state.posts)


    let unique = 574845;
   
    let table = []
    if(posts[0].teacher.length=== 0){
        for(let i=0;i<size;i++){
            table.push(
           <tr key={unique++} >
             <td className='rrow1' key={unique++}></td>
             <td className='rrow2' key={unique++}></td>
             <td className='rrow3' key={unique++}></td>
             <td className='rrow4' key={unique++}></td>
             <td className='rrow5' key={unique++}></td>
           </tr>)}
    }else{
            for(let i = 0;i<size;i++){
                table[i]=[posts[0].date[i],posts[0].time[i],posts[0].place[i],posts[0].topic[i],posts[0].teacher[i]]
            }
            table =  table.map((item)=>{
                return <tr key={unique++}>
               <td  className='rrow1' >{item[0]}</td>
               <td  className='rrow2' >{item[1]}</td>
               <td  className='rrow3' >{item[2]}</td>
               <td  className='rrow4' >{item[3]}</td>
               <td  className='rrow5' >{item[4]}</td>
              </tr>
               })
              
    }

    return (
        <table className='students'>
          <tbody>
        {table}
        </tbody>

        </table>
    )
}
export default StudentSchedule