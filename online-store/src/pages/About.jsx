//import
//import Navbar from "../componets/Navbar" - barrel files
import {useState} from 'react'
import Navbar from "../componets/Navbar" 

//function; LOGIC
function About(){
    const [isVisible, setIsVisible] = useState(false);
    //const [varNAME, setVarName] = useState(value); 
    const [studentName, setStudentName] = useState("HODOR"); 

    console.log("About page"); 

    return (
        <div>
            <Navbar/>

            <h1>{studentName}</h1>
            { isVisible == true ? <h5>HodorHodorHODOR@yahoo.com</h5> : <label>Click the button to see my email</label> }
        </div>
    ); 
}


//export
export default About; 