import React from "react";
import {render} from "react-dom";
import ProgressBar from "../src/ProgressBar.jsx";
import Slider from "../src/Slider.jsx";

export default class Runner extends React.Component
{
	render(){
		return(
			<div>
				<Slider></Slider>
				<ProgressBar/>
			</div>
		);
	}
}

render(
	<Runner/>,
	document.getElementById('app')
	);