import React from "react";

export default function Main(props){
    return(
        <main className={props.darkMode ? "dark" : "light"}>
      <h1 className='main-title'>Fun fact about React</h1>
      <ul className='main-fact'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
      </main>
    )
}