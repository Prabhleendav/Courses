import React from 'react'
import Card from './Card'
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let key = props.id;
    let category = props.category;
    let allCourses = [];

    const[likedCourses , setLikedCourses] = useState([]);
    
    function getCourses() {
        if(category === "All"){
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                allCourses.push(course);
                // console.log(allCourses);
                })
            })
            return allCourses;
        }

        else{
            // pass the courses whose category is clicked 
            return courses[category] ; 
        }
        
        }

        return(
            <div className='flex justify-center items-center gap-4 mb-4 flex-wrap'>
                {
                    getCourses().map((course) => {
                        return <Card course = {course}
                            key = {course.id}
                            likedCourses = {likedCourses}
                            setLikedCourses = {setLikedCourses}
                        />;
                    })
                }
            </div>

    );
}
    
export default Cards;