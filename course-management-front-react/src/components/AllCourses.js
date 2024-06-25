import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "./../api/springbootrestapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses =()=>{

    useEffect(()=>{
        document.title="All Courses| Webmayura.com";
    });

    //Function to call server or api calling
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //on Successfully called
                console.log(response);
                toast.success("All courses loaded");
                setCourses(response.data);
            },
            (error)=>{
                //On get Error
                console.log(error);
                toast.error("Error occured!");
            }
        )
    };

    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }


    //Calling getAllCoursesFromServer function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);
    const [courses, setCourses] = useState([]);

    return (
        <div>
            <h1>All Courses</h1>
            <p>list of courses are follow</p>
            {
                courses.length>0? courses.map((item)=>
                     <Course key={item.id} course={item} update={updateCourse}/>
                ):"No Courses available"
            }
        </div>
    )
}

export default AllCourses;