import React from "react"
import ReactDOM from "react-dom"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

import Main from "./components/index/main"
import "../style/reset.css"
import "../style/transition.css"

const app = document.getElementById('app')

ReactDOM.render(
	<Main />
 , app);
