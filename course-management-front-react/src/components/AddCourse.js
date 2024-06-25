import axios from "axios";
import React, { Fragment, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap"
import base_url from "./../api/springbootrestapi";

const AddCourse =()=>{

    useEffect(()=>{
        document.title="Add Courses| Webmayura.com";
    });

    const [course, setCourse] = useState({});

    //Form handler functon 
    const handleForm=(e)=>{
        console.log(course);
        postCourseDataToServer(course);
        e.preventDefault();
        console.log(e);
    }

    //Creating function post Data
    const postCourseDataToServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Successfully Saved!");
            },
            (error)=>{
                console.log(error);
                toast.error("Error occured");
            }
    )
    }

    return <Fragment>
        <h1 className="text-center my-3">Fill Form Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <Label for="CourseId">Course Id</Label>
                <Input type="text" name="id" id="CourseId" placeholder="Enter Course Id" onChange={(e)=>{setCourse({...course, id: e.target.value})}} />
            </FormGroup>

            <FormGroup>
                <Label for="CourseTitle">Course Title</Label>
                <Input type="text" name="title" id="CourseTitle" placeholder="Enter Course Title" onChange={(e)=>{setCourse({...course, title:e.target.value})}} />
            </FormGroup>

            <FormGroup>
                <Label for="CourseDescription">Course Description</Label>
                <Input type="textarea" name="description" id="CourseDescription" placeholder="Enter Course Description" style={{height:150}} onChange={(e)=>{setCourse({...course, description: e.target.value})}} />
            </FormGroup>

            <Container className="text-center">
                <Button color="primary" type="submit">Add Course</Button>
                <Button color="warning ml-3" type="reset">Reset</Button>
            </Container>
        </Form>
    </Fragment>
}

export default AddCourse;