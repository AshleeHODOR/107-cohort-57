//import, LOGIC, export
import React from "react";
import "./Footer.css";

function Footer() {
    //This is the Footer componet of the application
    const year = new Date().getFullYear();
    return( 
        <footer className="Footer"> 
            <p>{year} Organika. All rights reserved</p>
            <p>Made with ❤️heart❤️ by HODOR </p>
            </footer>

    );
}

export default Footer; 