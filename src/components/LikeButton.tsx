import React ,{useState, FC,useEffect,useRef,useContext} from 'react'
import {ThemeContext} from "../App"

const  LikeButton:React.FC = ()=>{
    const [like, setLike] = useState(0);
    const [on,setOn] = useState(true);
    const likeRef = useRef(0);
    const didMountRef = useRef(false);
    const domRef = useRef<HTMLInputElement>(null);
    const theme = useContext(ThemeContext)
    const style={
        background:theme.background,
        color:theme.color

    }
    useEffect(()=>{//这个 hook是在渲染之后执行，不用考虑是挂载之后还是更新之后
        document.title=`点击了${like}`
    },[like]);
    useEffect(()=>{
        if(didMountRef.current){
            console.log("-----update")
        }else{
            didMountRef.current=true;
        }
    },[like])
    useEffect(()=>{
        if(domRef && domRef.current){
            domRef.current.focus();
        }
    },[like])
    function handleLikeRef(){
        setTimeout(()=>{
            alert("点击了"+likeRef.current+"次")
        },3000)
        
    };
    return (
        <>
            <input type="text" ref={domRef}/>
            <button style={style} onClick={()=>{setLike(like+1);likeRef.current++}}> 
                {like}👍
            </button>
            <button onClick={handleLikeRef}> alert
            </button>
            <button onClick={()=>{setOn(!on)}}> 
                {on?"ON":"OFF"}
            </button>
        </>

    )

}
export default LikeButton; 