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
    title: "Minecraft",
    description:[
      "Simulate terrain generation and day/night transition in Minecraft.",
      "Randomly generated Minecraft-style terrain using Perlin noise.",
      "Sky color transition is rendered in GLSL shader(GPU accelerated)."
    ],
    keywords:["Three.js", "WebGL", "Javascript"],
    link:"http://johnhckuo.github.io/Minecraft/",
    icon:"FaCubes"
  },{
    title: "Open Data Crawler",
    description:[
      "A web crawler built to fetch the open data from Taiwan government.",
      "parse the DOM element of the open data page, and use Python & Selenium to fetch these data according to its XPath.",
    ],
    keywords:["Python", "Selenium", "Open Data"],
    link:"https://github.com/johnhckuo/Selenium_Project",
    icon:"FaBug"
  },{
    title: "Localized Chat",
    description: [
      "Hello Neighbor chat is a localized chatting app built upon React.js.",
      "User can create a chatroom near him/her to begin a chat on Google map ",
      "Each chatroom are categorized into different hashtag so that users can find the chatrooms they interested the most."
    ],
    keywords:["React.js", "Redux", "Javascript"],
    link:"https://hello-neighbor.github.io/Hello-Neighbor-Chat/",
    icon:"FaComments"
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
    title: "Terrain Generator",
    description:[
      "Randomly generating island terrain using diamond-square algorithm."
    ],
    keywords:["Three.js", "WebGL", "Javascript"],
    link:"http://johnhckuo.github.io/Island_Generator/normal",
    icon:"FaGlobe"
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
    title:"Fitness Club Page",
    description:[
      "Using HTML/CSS to build an elaborate fitness club official website."
    ],
    keywords:["HTML5", "CSS"],
    link:"http://johnhckuo.github.io/FitnessClub_WebPage/",
    icon:"FaDribbble"
  },{
    title: "3D Modeling App",
    description:[
      "A web-based 3D modeling application which enable users to create their 3D content without installing sophiticated software.",
      "This application can parse certain 3D file (STL, OBJ) and render it on the website using Three.js."
    ],
    keywords:["Three.js", "Node.js", "Javascript"],
    link:"http://johnhckuo.github.io/3D_Modeling_System/",
    icon:"FaCube"
  },{
    title: "Todo List",
    description:[
      "A simple todo list built with react.js"
    ],
    keywords:["React.js", "Javascript"],
    link:"https://johnhckuo.github.io/Todo-List/",
    icon:"FaListUl"
  },{
    title: "CSS3D Carousel",
    description: ["Applying CSS on image 3D slideshow."],
    keywords: ["CSS", "Javascript", "HTML5"],
    link:"http://johnhckuo.github.io/CSS3D_Carousel/",
    icon:"FaImage"
  },{
    title: "Fireflies Simulator",
    description: ["Simulate fireflies flying route and handle the transform of light."],
    keywords: ["Three.js", "WebGL", "Javascript"],
    link:"http://johnhckuo.github.io/Fireflies/",
    icon:"FaBug"
  },{
    title:"Oraclize Tutorial",
    description:[
      "Record some basic tutorials and reminders of using Oracalize.",
      "Using Oraclize to build the connection between blockchain and third-party API."
    ],
    keywords: ["Ethereum", "Truffle", "Solidity"],
    link:"https://github.com/johnhckuo/Oraclize-Tutorial",
    icon:"FaBook"
  },{
    title: "Smart Contract 101",
    description:[
      "Share some basic Ethereum smart contract 101 and Solidity programming tutorial. ",
      "This demo used Truffle & Testrpc as our testing framework."
    ],
    keywords: ["Ethereum", "Truffle", "Solidity"],
    link:"https://github.com/johnhckuo/Ethereum-101",
    icon:"FaBook"
  },{
    title: "Insurance Smart Contract",
    description:[
      "Building a decentrailze insurance application using Ethereum platform.",
      "This project uses Truffle as our testing framework."
    ],
    keywords:["Ethereum", "Javascript", "Solidity"],
    link:"https://github.com/johnhckuo/Insurance-Smart-Contract",
    icon:"FaBitcoin"
  },{
    title: "Real-time Disaster Visualizer",
    description: [
      "Fetch the open data released by government and visualize these data for greater convenience(D3.js、C3.js、Canvas.js). ",
      "Using Ajax to dynamically updating disaster data. ",
      "Using Wireframe、Gliffy, and Cacoo as interface designing tools."
    ],
    keywords: ["D3.js", "Ajax", "Canvas.js"],
    link:"http://johnhckuo.github.io/Taiwan_RealTime_Disaster/",
    icon:"FaBarChart"
  },
  {
    title: "Shaders",
    description:[
      "Some interesting shader applications."
    ],
    keywords:["Shader", "WebGL", "Javascript"],
    link:"https://johnhckuo.github.io/Shader-Projects/",
    icon:"FaCube"
  },
  {
    title: "Web-based AR Tag Detector",
    description:[
      "Building a web-based AR App by using Twisted Web Socket, Python, OpenCV, and Three.js.",
      "App will identify some certain patterns and render corresponding 3D object on certain points."
    ],
    keywords:["Python", "Node.js", "Opencv"],
    link:"https://github.com/johnhckuo/WebAR",
    icon:"FaEye"
  },

]

export default Portfolios;
