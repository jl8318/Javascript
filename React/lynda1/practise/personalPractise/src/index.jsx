import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {ErrorPage} from './components/ErrorPage.jsx';
import SkiDay from "./components/SkiDayCount.jsx";


const style = {
	backgroundColor:'orange',
	color:'red',
	fontFamily:'verdana'
}

/*const title = createElement(
	<h1 id ='title' className='Header' style = {style}></h1>,
	'HelloWorld'
);*/

render(
	<ErrorPage/>,
	document.getElementById('react-containter')
	);