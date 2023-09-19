import React, { useState } from 'react'

const index = () => {
   
    const [comments,setComments]=useState([])
    const [text,setText]=useState('')     //--------
    let displayComment=async()=>{
     const res= await fetch('api/comment')
     const data=await res.json()
     setComments(data)
   }
   
   let post=async()=>{
     const res=await fetch('api/comment',{
        method:"POST",
        body:  JSON.stringify({comment:text}),
        headers:{
            "Content-Type":'application/json'
        }})
        const data=await res.json()
          
    }

    let deleteComment=async (commentId)=>{
     const res=await fetch(`api/comment/${commentId}`,{
        method:"DELETE"
     })
     const data=await res.json()
     displayComment() 
    }
  
    return (

    <div>
        <input type="text" className= 'border border-black' onChange={(e)=>setText(e.target.value)} />
        <button onClick={post} >Submit</button>
        {comments.map((x)=>{
            return(
                <div key={x.id}>
                   <p>{x.text}</p>

                   <button className='border bg-red-100' onClick={()=>{deleteComment(x.id)}} >delete</button>
                </div>
            )
        })}
        <button onClick={displayComment}>Show Comments</button>
    </div>
  )
}

export default index 