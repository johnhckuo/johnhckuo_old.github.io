import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from 'react-router-dom'

import Routes from "./components/route/main"
import "../style/reset.css"
import "../style/global.css"

const app = document.getElementById('app')

ReactDOM.render(
	<HashRouter>
		<Routes />
	</HashRouter>
 , app);
