import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Reactjs Developer",
      icon: mobile,
    },
    {
      title: "front End Developer",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "10th standard",
      company_name: "M.P.S",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2016 - April 2017",
      points: [
        "i have done my 10th standard from M.P.S",
        "where I secured 74% ",
        
      ],
    },
    {
      title: "12-standard",
      company_name: "M.P.S",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2018 - April 2019",
      points: [
        "I have done my 12 standard from M.P.S in Science(p.c.m) stream",
        "Where I secured 85%",
        "the all over experience of 12 was good.",
      ],
    },
    {
      title: "B.tech",
      company_name: "KIET Group of Institution",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2019 - April 2023-present",
      points: [
        "Currently I persuing my bachelor degree in 'COMPUTER SCIENCE' from kIET Group of Institution",
        "I secured 8 SGPA in all semester",
        "Here i done many personal projects and major projects",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "next-movies",
      description:
        "I developed a netflix clone, which can be used to save the favourite movies in the database.user can login or logout thir account ",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS", 
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "NEWS-HUNTER",
      description:
        "This is a NEWS website created by using HTML5, Bootstrap and REACT.JS (Javascript)It is a fully responsive NEWS Website In this website NEWS API is used for render the real time news",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "SONGS",
      description:
        "it is a song website we can add the favourite song in this and listen any time.",
      tags: [
        {
          name: "javasript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML5", 
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };