import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { projects, blogs } from './data.js'

function Nav({title, txt}){
    return(
        <div style={{display:"flex",flexDirection:"row",color:"#282c34",justifyContent:"center"}}>
            <div style={{width:"10%", float:"left"}}>
                <h2>{title}</h2>
                {txt}
            </div>
            <div style={{width:"70%"}}></div>
            <Card title="Linkedin" link="https://www.linkedin.com/in/codystallings"/>
            <Card title="Resume" link="https://www.ydocsgnillats.com/resume"/>
            <Card title="Github" link="https://www.github.com/ydocsgnillats"/>
        </div>
    );
}

function Blog({title, txt, link}){    
    return(
            <div>
                <h3>{title}</h3>
                <p>{txt}</p>
                <a href={link||'www.google.com'} style={{color:"green"}}>Read More...</a>
            </div>
    )
}

function Card({title, link}){
    const cardStyle = {
        border: "1px grey solid",
        margin: "1em",
        padding: "1em",
        backgroundColor: "#fbfbf8",
        color: "#282c34"
    }
    
    return(
        <a href={link}>
            <div style={cardStyle}>{title}</div>
        </a>
    );
}

function Foot({title}){
    const footStyle = {
        color: "#61dafb",
        display: "flex",
        height: "1px"
    }
    return(
        <div style={footStyle}>
            <h6>{title}</h6>
            <img src={logo} className="App-logo" alt="logo" />            
        </div>
    );
}

function App() {

  return (
    <>
    <Nav title="Cody Stallings" txt="Web Developer."/>
    <div className="wrapper">
    <div className="column" id="menu">
        <div className="space">
        </div>
        <div>
          {projects.map(function(item){
                return (
                    <>
                        <div class="bigCards"><Card key={item.id} title={item.title} txt={item.txt}></Card>
                        <div class="smallCards">{item.cards.map(function(card){return <Card title={card.title} txt={card.txt} link={card.link}></Card>})}</div></div>
                    </>
                )})}
        </div>
        <div className="space">
        </div>
    </div>
    <div className="column" id="content">
        {/* Needs a Title state that has a default and changes to current project name*/}
    </div>
    <div className="column" id="blog">
        {blogs.map(function(blog){
            return(
                <Blog title={blog.title} txt={blog.txt}/>
            );
        })}
    </div>
    </div>
    <Foot title="Portfolio Powered by React"/>
    </>
  );
}

export default App;