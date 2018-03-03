import React from 'react';
import SliderStyle from '../assets/css/Slider.css';
import PropTypes from 'prop-types';

export default class slide extends React.Component
{

	static propTypes =
	{
		images:PropTypes.array
	};

	static defaultProps=
	{
		images:[
			'assets/images/slide1.jpg',
			'assets/images/slide2.jpg',
			'assets/images/slide3.jpg'
		]
	};

	constructor(props)
	{

		super(props);
		this.state=
		{
			currentImage:0,
			leftBtnDetail:false,
			rightBtnDetail:false
		};

		this.handlerMoverHover = this.handlerMoverHover.bind(this);
		this.handlerChangeImage = this.handlerChangeImage.bind(this);
		this.handlerMoverLeave = this.handlerMoverLeave.bind(this);
	}

	handlerChangeImage(event)
	{
		var nextImage= this.state.currentImage+1;
		if(nextImage==this.props.images.length)
		{
			nextImage = 0;
		}
		this.setState({
			currentImage:nextImage
		});

		//reset timer and process bar
	}

	handlerMoverHover(event)
	{
		var direction = event.currentTarget.getAttribute('direction');
		if(direction=='left')
		{
			this.setState({
				leftBtnDetail:true
			});
		}
	}

	handlerMoverLeave(event)
	{
		var direction = event.currentTarget.getAttribute('direction');
		if(direction=='left')
		{
			this.setState({
				leftBtnDetail:false
			});
		}
	}

	render()
	{
		var current = this.props.images[this.state.currentImage];
		var leftIndex = this.state.currentImage==0?this.props.images.length-1:this.state.currentImage-1;
		var rightIndex = this.state.currentImage==(this.props.images.length-1)?0:this.state.currentImage+1;
		var lbtStyle = {
			backgroundImage:'url("'+this.props.images[leftIndex]+'")',
			backgroundSize:'cover',
			backgroundPosition:'center center'
			/*backgroundColor:'red'*/
		};
		return(
			<div className={SliderStyle.frame}>
				<div className={SliderStyle.picture_frame}>
					<img className={SliderStyle.picture} src={current}/>
				</div>
				<div  direction='left' onClick={this.handlerChangeImage} onMouseOut={this.handlerMoverLeave} onMouseOver={this.handlerMoverHover} className={SliderStyle.leftSign}>
					<div style={this.state.leftBtnDetail?lbtStyle:{}} className={SliderStyle.leftBtnFrame}>
						<i className="material-icons">&#xE5CB;</i>
					</div>
				</div>
				<div direction='right' onClick={this.handlerChangeImage} className={SliderStyle.rightSign}>
					<div className={SliderStyle.rightBtnFrame}>
						<i className="material-icons">&#xE5CC;</i>
					</div>
				</div>

			</div>
		);
	}

};