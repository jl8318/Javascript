'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
	backgroundColor: 'orange',
	color: 'red',
	fontFamily: 'verdana'

	/*const title = createElement(
 	<h1 id ='title' className='Header' style = {style}></h1>,
 	'HelloWorld'
 );*/

};
render(React.createElement(
	'h1',
	{ id: 'title', className: 'Header', style: { backgroundColor: 'orange', color: 'red', fontFamily: 'verdana' } },
	' HelloWorld'
), document.getElementById('react-containter'));
