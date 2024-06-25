import React, { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { Jumbotron, Container, Button } from "reactstrap";

const Home=()=>{

    useEffect(()=>{
        document.title="Home| Webmayura.com";
    });

    const btnHandle = () =>{
        toast("This is my first message",{
          position:"top-center"
        })
      }
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Ravi Kumar Kazi Tutuorial</h1>
                <p>React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications</p>
                <Container>
                    <Button color="primary" outline onClick={btnHandle}>First React Button</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;