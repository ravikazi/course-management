import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import base_url from '../api/springbootrestapi';

const Course = ({course, update})=>{

    const deleteCourse = (id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course has been successfully deletd!");
                update(id);
            },
            (error)=>{
                toast.error("Error! Something went wrong!");
            }
        )
    }
    return (
        <div>
            <Card className="text-center">
                {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                <CardBody>
                <CardTitle tag="h5">{course.title}</CardTitle>
                {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                <CardText>{course.description}</CardText>
                <Button color="danger" onClick={()=>{deleteCourse(course.id)}}>Delete</Button>
                <Button color="warning ml-3">Update</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Course;