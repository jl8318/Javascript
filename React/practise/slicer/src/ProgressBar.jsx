import React from 'react';
import progressStyle from '../assets/css/ProgressBar.css';
import PropTypes from 'prop-types';

export default class ProgressBar extends React.Component
{
	static propTypes =
	{
		height:PropTypes.string,
		color:PropTypes.string,
		time:PropTypes.number
	};

	static defaultProps=
	{

		height:'0.5rem',
		color:'red',
		time:5000
	};

	constructor(props)
	{
		super(props);
		this.state={
			another:false
		};
	}

	render()
	{
		var style={
			height:this.props.height,
			backgroundColor:this.props.color

		};
		setTimeout(function(it){
			it.setState({
				another:!it.state.another
			});
		},5000,this);
		return(
			<div className={progressStyle.frame}>
				<div className={this.state.another?progressStyle.bar_full:progressStyle.bar}>
					

				</div>
			</div>
		);
	}
}