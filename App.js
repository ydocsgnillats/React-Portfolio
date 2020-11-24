import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chat } from './chat/Chat.js';
import { about, project, projects, resume, contact } from './data.js';

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

function Project({title, desc, img}){
    return(
        <div>
          <img src={img}/>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
    )
}


function ContentSwitcher({c}){
  switch (c) {
    case 'about':
      return <Content title={about.title} txt={about.txt} infTitle={about.infTitle} infTxt={about.infTxt} infLink={about.infLink}/>;
      break;
    case 'projects':
      return(<>
              <Content click={project.id} title={project.title} txt={project.txt} infTitle={project.infTitle} infTxt={project.infTxt} infLink={project.infLink}/>
              <div className="project-list">
                {projects.map((p) => (
                <div className="project" onClick={() => setCont(p.id)}><Project key={p.id} title={p.title} desc={p.desc} img={p.img}/></div>))}
              </div>
              </>)
      break;
    case 'resume':
      return <Content title={resume.title} txt={resume.txt} infTitle={resume.infTitle} infTxt={resume.infTxt} infLink={resume.infLink}/>;
      break;
    case 'contact':
      return <Content title={contact.title} txt={contact.txt} infTitle={contact.infTitle} infTxt={contact.infTxt} infLink={contact.infLink}/>;
      break;
    case '0':
      return <Content title={projects[0].title} txt={projects[0].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/teenstutorteensapp/'/>;
      break;
    case '1':
      return <Content title={projects[1].title} txt={projects[1].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/bridget-bot'/>;
      break;
    case '2':
      return <Content title={projects[2].title} txt={projects[2].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/CollectionTracker'/>;
      break;
    case '3':
      return <Content title={projects[3].title} txt={projects[3].desc} infTitle='Click Below To View Site' infTxt='' infLink='https://www.ydocsgnillats.com/watches'/>;
      break;
    case '4':
      return <Content title={projects[4].title} txt={projects[4].desc} infTitle='Click Below To View Site' infTxt='' infLink='https://github.com/ydocsgnillats/teenstutorteensapp/'/>;
      break;
    case '5':
      return <Content title={projects[5].title} txt={projects[5].desc} infTitle='Click Below To View Site' infTxt='' infLink='https://github.com/ydocsgnillats/teenstutorteensapp/'/>;
      break;
    case '6':
      return <Content title={projects[6].title} txt={projects[6].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/'/>;
      break;
    case '7':
      return <Content title={projects[7].title} txt={projects[7].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/'/>;
      break;
    case '8':
      return <Content title={projects[8].title} txt={projects[8].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/React-Portfolio'/>;
      break;
    case '9':
      return <Content title={projects[9].title} txt={projects[9].desc} infTitle='Website can be found on "www.ydocsgnillats.com"' infTxt='' infLink='https://github.com/ydocsgnillats/portfolioWebsite'/>;
      break;
    
    default:
      return <Content title={about.title} txt={about.txt} infTitle={about.infTitle} infTxt={about.infTxt} infLink={about.infLink}/>;;
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
