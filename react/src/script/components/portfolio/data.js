const Portfolios = [
  {
    title: "Block Farm",
    description: [
      "A stress-relieving farming game built on top of Ethereum platform.",
      "Featuring multi-party bartering system which is stored and executed by smart contract on Ethereum.",
      "Using Ethereum wallet API of Blockcypher to ensure seamless user gaming experience."
      ],
    keywords:["Ethereum", "Solidity", "Javascript"],
    link:"https://blockfarm.herokuapp.com/",
    icon:"FaBitcoin"
  },{
    title: "Terrain Generator",
    description:[
      "Randomly generating island terrain using diamond-square algorithm."
    ],
    keywords:["Three.js", "WebGL", "Javascript"],
    link:"http://johnhckuo.github.io/Island_Generator/normal",
    icon:"FaGlobe"
  },{
    title: "Ocean",
    description: [
      "Simulate ocean surface using GLSL shader.",
      "Generate perlin noise and use Fractional Brownian motion to make the texture look more similar to the surface of ocean.",
      "Rendered with GPU for maximum efficiency."
    ],
    keywords:["GLSL", "Shader", "WebGL"],
    link:"https://johnhckuo.github.io/Water-Shader/",
    icon:"FaTint"
  },{
    title: "Minecraft",
    description:[
      "Simulate terrain generation and day/night transition in Minecraft.",
      "Randomly generated Minecraft-style terrain."
    ],
    keywords:["Threejs", "WebGL", "Javascript"],
    link:"http://johnhckuo.github.io/Minecraft/",
    icon:"FaCubes"
  },{
    title:"Gomoku",
    description:[
      "A web-based Gomoku game",
      "Rendered with Canvas if is supported, rendered with div otherwise."
    ],
    keywords:["HTML5", "Canvas"],
    link:"https://johnhckuo.github.io/Gomoku/",
    icon:"FaCircleO"
  },{
    title: "Web-based 3D Modeling App",
    description:[
      "A web-based 3D modeling application which enable users to create their 3D content without installing sophiticated software.",
      "This application can parse certain 3D file (STL, OBJ) and render it on the website using Three.js."
    ],
    keywords:["Threejs", "Nodejs", "Javascript"],
    link:"http://johnhckuo.github.io/3D_Modeling_System/",
    icon:"FaCube"
  },
  {
    title: "Fireflies Simulator",
    description: [" Simulate fireflies flying route and handle the transform of light."],
    keywords: ["Threejs", "WebGL", "Javascript"],
    link:"http://johnhckuo.github.io/Fireflies/",
    icon:"FaBug"
  },{
    title:"Blockchain Oracle Tutorial",
    description:[
      "Record some basic tutorials and reminders of using Oracalize.",
      "Using Oraclize to build the connection between blockchain and third-party API."
    ],
    keywords: ["Ethereum", "Truffle", "Solidity"],
    link:"https://github.com/johnhckuo/Oraclize-Tutorial",
    icon:"FaBook"
  },{
    title: "Ethereum Smart Contract Tutorial",
    description:[
      "Share some basic Ethereum smart contract 101 and Solidity programming tutorial. ",
      "This demo used Truffle & Testrpc as our testing framework."
    ],
    keywords: ["Ethereum", "Truffle", "Solidity"],
    link:"https://github.com/johnhckuo/Ethereum-101",
    icon:"FaBook"
  },{
    title: "Decentralized Insurance Smart Contract",
    description:[
      "Building a decentrailze insurance application using Ethereum platform.",
      "This project uses Truffle as our testing framework."
    ],
    keywords:["Ethereum", "Javascript", "Solidity"],
    link:"https://github.com/johnhckuo/Insurance-Smart-Contract",
    icon:"FaBitcoin"
  },{
    title: "Taiwan Real-time Disaster Visualizer",
    description: [
      "Fetch the open data released by government and visualize these data for greater convenience(D3.js、C3.js、Canvas.js). ",
      "Using Ajax to dynamically updating disaster data. ",
      "Using Wireframe、Gliffy, and Cacoo as interface designing tools."
    ],
    keywords: ["D3js", "Ajax", "Canvasjs"],
    link:"http://johnhckuo.github.io/Taiwan_RealTime_Disaster/",
    icon:"FaBarChart"
  },
  {
    title: "Web-based AR Tag Detector",
    description:[
      "Building a web-based AR App by using Twisted Web Socket, Python, OpenCV, and Three.js.",
      "App will identify some certain patterns and render corresponding 3D object on certain points."
    ],
    keywords:["Python", "Nodejs", "Opencv"],
    link:"https://github.com/johnhckuo/WebAR",
    icon:"FaEye"
  },

]

export default Portfolios;
