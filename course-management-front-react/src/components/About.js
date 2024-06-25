import React, { useEffect } from "react"

const About=()=>{

    useEffect(()=>{
        document.title="About | Webmayura.com";
    });

    return (
        <div>
            <h1>This is about us page!</h1>
        </div>
    )
}

export default About;