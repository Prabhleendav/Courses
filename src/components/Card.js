// import {useState} from 'react'
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify";

function Card  (props)  {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            // already liked
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else{
            // not liked already
            // therefore needs to be added in the setlikedcourse array
            // now there are two possibilities first the likedcourse array is empty and second it has some courses 
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                // length is not zero 
                setLikedCourses((prev) => [...prev , course.id]);
            }
            toast.success("Like added");
        }
    }
  return (
    
    <div className=' w-[300px] bg-bgDark overflow-hidden rounded-md h-[320px]'>
        <div className='relative'>
            <img src={course.image.url} alt="not found"></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? (<FcLike fontSize = "1.75rem" ></FcLike>) :
                        (<FcLikePlaceholder fontSize = "1.75rem" ></FcLikePlaceholder>)
                    }
                </button>
            </div>
        </div>
        
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length>100 ? (course.description.substr(0,100))+"..." : (course.description)
                }
            </p>
        </div>
    </div>
  );
}
 export default Card ;