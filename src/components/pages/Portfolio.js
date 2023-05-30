import React from "react";
import Project from "./Project";
import "../../style/style.css";
import jamfolio from "../../assets/jamfolio.png"
//titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
export default function Portfolio() {
  const projectdata = [
    {
      name: "Barista",
      link: "https://jonnyboy808.github.io/barista",
      github: "https://github.com/jonnyboy808/barista",
      description: "first project",
      image: "",
    },
    {
      name: "Jamfolio",
      link: "https://jonnyboy808.github.io/barista",
      github: "https://github.com/jonnyboy808/barista",
      description: "second project",
      image: jamfolio,
    },
    {
      name: "Barista",
      link: "https://jonnyboy808.github.io/barista",
      github: "https://github.com/jonnyboy808/barista",
      description: "first project",
      image: "",
    },
    {
      name: "Barista",
      link: "https://jonnyboy808.github.io/barista",
      github: "https://github.com/jonnyboy808/barista",
      description: "first project",
      image: "",
    },
    {
      name: "Barista",
      link: "https://jonnyboy808.github.io/barista",
      github: "https://github.com/jonnyboy808/barista",
      description: "first project",
      image: "",
    },
    {
      name: "Barista",
      link: "https://jonnyboy808.github.io/barista",
      github: "https://github.com/jonnyboy808/barista",
      description: "first project",
      image: "",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projectcontainer">
      { 
      projectdata.map( p => {
        return <Project name={p.name} link={p.link} github={p.github} description={p.description} image={p.image}/>
      })
    }
    </div> 
    </div>
  );
}
