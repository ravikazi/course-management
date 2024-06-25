import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menus from './components/Menus';
import Header from "./components/Header"
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  
  return (
    <div>
      <Router>
      <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/view-courses" component={AllCourses} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
