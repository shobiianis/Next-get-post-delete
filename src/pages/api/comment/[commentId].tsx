import { comments } from "../../../../data/comments"

export default function handler(req,res){

    const {commentId}=req.query 
    if(req.method==='GET'){
        let FindedComment=comments.find((indivisualComment)=>indivisualComment.id===parseInt(commentId))
        res.status(200).json(FindedComment)
    }
    else if(req.method==="DELETE"){
        const deletedComment=comments.find((indivisualComment)=>indivisualComment.id===parseInt(commentId))
        const index=comments.findIndex((indivComment)=>indivComment.id===parseInt(commentId)) 
        comments.splice(index,1)
        res.status(200).json(comments)
              
    }



}