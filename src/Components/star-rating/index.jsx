import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css' 

export default function StarRating({noOfStars=5}){
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    function handleClick(getCurrentIndex){
      console.log(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex){
     setHover(getCurrentIndex)
    }
    function handleMouseLeave(){
      setRating(rating);
    }
    return <div className="star-rating">{
        [...Array(noOfStars)].map((_,index)=>{
            index+=1
            return <FaStar key={index}
            className={index<=(hover||rating)?'active':'inactive'}
            onclick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}
            />
        })}
    </div>
}