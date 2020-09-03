import React ,{useState, FC,useEffect} from 'react'

const  LikeButton:React.FC = ()=>{
    const [like, setLike] = useState(0);
    const [on,setOn] = useState(true);
    useEffect(()=>{//这个 hook是在渲染之后执行，不用考虑是挂载之后还是更新之后
        document.title=`点击了${like}`
    })
    return (
        <>
            <button onClick={()=>{setLike(like+1)}}> 
                {like}👍
            </button>
            <button onClick={()=>{setOn(!on)}}> 
                {on?"ON":"OFF"}
            </button>
        </>

    )

}
export default LikeButton; 