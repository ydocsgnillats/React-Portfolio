import React, {useState, useEffect } from 'react';
import './app.scss';
import { about, projects, resume, contact } from './data.js';
import { Document, Page, pdfjs } from "react-pdf";
import file from './assets/res.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfView() {
  return (
    <Document file={file}>
      <Page pageNumber={1} loading={"Loading Resume!"} width={1300}/>
    </Document>
  )
}

function App() {
    const [cont, setCont] = useState('about');

    function Nav({title, txt}){
        return(
            <div style={{display:"flex",flexDirection:"row", color:"#e7e7e7",textShadow: '0.5px 0.5px black', padding:'5px',backgroundColor:'black', opacity:'0.9',fontSize:'xlarge'}}>
                <div style={{width:"20%"}}>
                    <h2>{title}</h2>
                    {txt}
                </div>
                <div style={{width:"30%"}}></div>
                <button id="button2" onClick={() => setCont('about')}>About</button>
                <button id="button2" onClick={() => setCont('projects')}>Projects</button>
                <button id="button" onClick={() => setCont('resume')}>Resume</button>
                <button id="button" onClick={() => setCont('contact')}>Contact</button>
            </div>
        )
    }

function Content({title, txt, infTitle, infTxt, img, infLink, infLinkTxt}){    
    return(
    <div className="wrapper" style={{overflow:"auto"}}>
        <div className="column" id="page">
            <h3>{title}</h3>
            <p style={{marginTop:'5%'}}>{txt}</p>
        </div>
        <div style={{opacity:'0.95'}} className="column" id="info">
            <h4>{infTitle}</h4>
            <article>{infTxt}</article>
            <img src={img} height={250} width={250}/>
            <a style={{color:'green'}} href={infLink}>{infLinkTxt}</a>
        </div>
    </div>
    )
}


function Resume({txt}){
    return(
      <div className="column" id="resPage">
      <div style={{marginLeft:'3%'}}>
          <p>{txt}</p>
      </div>
      </div>
    )
}


function Project({title, desc, img}){
    return(
        <div style={{height:'350px',overflow:"hidden",wordWrap:"break-word",padding:'1'}}>
          <h4>{title}</h4>
          <img src={img} height={150} width={200}/>
          <h5>{desc}</h5>
        </div>
    )
}


function Contact({img1, img1link, img1txt, img2, img2link, img2txt, img3, img3link, img3txt}){
  return(
    <div className="column" id="resPage">
    <div style={{marginLeft:'3%',overflow:'auto', display:"flex",flexDirection:'row'}}>
      <Project style={{marginRight:'10em'}} title={img1txt} desc={img1link} img={img1}/>
      <Project style={{marginRight:'10em'}} title={img2txt} desc={img2link} img={img2}/>
      <Project style={{marginRight:'10em'}} title={img3txt} desc={img3link} img={img3}/>
    </div>
    </div>
  )
}


function ContentSwitcher({c}){
  switch (c) {
    case 'about':
      return <Content title={about.title} txt={about.txt} infTitle={about.infTitle} infTxt={about.infTxt} img={about.img} infLink={about.infLink} infLinkTxt={about.infLinkTxt}/>;
      break;
    case 'projects':
      return(<>
              <div className="project-list">
                {projects.map((p) => (
                <div className="project" onClick={() => setCont(p.id)}><Project key={p.id} title={p.title} desc={p.desc} img={p.img}/></div>))}
              </div>
            </>)
      break;
    case 'resume':
      return <Resume txt={<PdfView/>}></Resume>;
      break;
    case 'contact':
      return <Contact img1={contact.img1} img1link={contact.img1link} img1txt={contact.img1txt} img2={contact.img2} img2link={contact.img2link} img2txt={contact.img2txt} img3={contact.img3} img3link={contact.img3link} img3txt={contact.img3link}/>;
      break;
    case '0':
      return <Content title={projects[0].title} txt={projects[0].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/teenstutorteensapp/' img={projects[0].img}/>;
      break;
    case '1':
      return <Content title={projects[1].title} txt={projects[1].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/bridget-bot' img={projects[1].img}/>;
      break;
    case '2':
      return <Content title={projects[2].title} txt={projects[2].desc} infTitle='More Info' infTxt='' infLink='https://github.com/ydocsgnillats/CollectionTracker' img={projects[2].img}/>;
      break;
    case '3':
      return <Content title={projects[3].title} txt={projects[3].desc} infTitle='Click Below To View Site' infTxt='' infLink='https://www.ydocsgnillats.com/watches' img={projects[3].img}/>;
      break;
    case '4':
      return <Content title={projects[4].title} txt={projects[4].desc} infTitle='Click Below To View Site' infTxt='' infLink='https://github.com/ydocsgnillats/teenstutorteensapp/' img={projects[4].img}/>;
      break;
    case '5':
      return <Content title={projects[5].title} txt={projects[5].desc} infTitle='Click Below To View Site' infTxt='' infLink='https://github.com/ydocsgnillats/teenstutorteensapp/' img={projects[5].img}/>;
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
    <div style={{top:'0'}}>
    <Nav title="Cody Stallings" txt="Developer."/>
    <div className="wrapper">
    <div className="column" id="content">
        <ContentSwitcher c={cont}/>
    </div>
    </div>
    </div>
  );
}

export default App;
