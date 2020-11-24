import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chat } from './chat/Chat.js';
import { about, projects, resume, contact } from './data.js';

function App() {
    const [cont, setCont] = useState('about');

    function Nav({title, txt}){
        return(
            <div style={{display:"flex",flexDirection:"row",color:"#282c34",padding:'10px'}}>
                <div style={{width:"20%"}}>
                    <h2>{title}</h2>
                    {txt}
                </div>
                <div style={{width:"50%"}}></div>
                <button id="button" onClick={() => setCont('about')}>About</button>
                <button id="button" onClick={() => setCont('projects')}>Projects</button>
                <button id="button" onClick={() => setCont('resume')}>Resume</button>
                <button id="button" onClick={() => setCont('contact')}>Contact</button>
                <img style={{height: "5em", width: "5em"}} src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }

function Content({title, txt, infTitle, infTxt, infLink}){    
    return(
    <div className="wrapper">
        <div className="column" id="page">
            <h3>{title}</h3>
            <p>{txt}</p>
        </div>
        <div className="column" id="info">
            <h4>{infTitle}</h4>
            <article>{infTxt}</article>
            <a style={{color:'green'}} href={infLink}>-See the code on github-</a>
        </div>
    </div>
    )
}


function ContentSwitcher({c}){
  switch (c) {
    case 'about':
      return <Content title={about.title} txt={about.txt} infTitle={about.infTitle} infTxt={about.infTxt} infLink={about.infLink}/>;
      break;
    case 'projects':
      return <Content title={projects.title} txt={projects.txt} infTitle={projects.infTitle} infTxt={projects.infTxt} infLink={projects.infLink}/>;
      break;
    case 'resume':
      return <Content title={resume.title} txt={resume.txt} infTitle={resume.infTitle} infTxt={resume.infTxt} infLink={resume.infLink}/>;
      break;
    case 'contact':
      return <Content title={contact.title} txt={contact.txt} infTitle={contact.infTitle} infTxt={contact.infTxt} infLink={contact.infLink}/>;
      break;
    default:
      return null;
  }
}
  return (
    <>
    <Nav title="Cody Stallings" txt="Web Developer."/>
    <div className="wrapper">
    <div className="column" id="content">
        <ContentSwitcher c={cont}/>
    </div>
    <div className="column" id="chat">
        <Chat/>
    </div></div>
    </>
  );
}

export default App;

{/*title="About Me" txt="I am a developer with a B.S. in Computer Science and a minor in Russian 
                                                    from the University of North Georgia. My focus is full-stack web development, 
                                                    using technologies such as React, NodeJS, HTML5/CSS3/Javascript, Rest APIs, and MySQL. 
                                                    I also have experience in App Development, using React-Native, NodeJS, GraphQL/Hasura, 
                                                    and PostGres to create the iOS app for the 501(c)3 charity 'Teens Tutor Teens'. 
                                                    Python is my go to language for software development as well as some web applications 
                                                    and scripting, and I have earned the Python Certified Associate Programmer certification 
from the Python Institute."  infTitle="INFO" infTxt="lorem ip sum test info" infLink="www.github.com"/>*/}