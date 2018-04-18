import React from "react"
import ReactDOM from "react-dom"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

import Main from "./components/index/main"
import "../style/reset.css"

const app = document.getElementById('app')

ReactDOM.render(
<Router>
	<Main />
</Router> , app);
