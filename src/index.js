import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from "./logo.svg";
import like from "./img/like.png";
import dislike from "./img/dislike.png";
import "./index.css"
import * as serviceWorker from './serviceWorker';
import App from "./core/App.js"
import MainContent from "../src/features/main-content/main-content-component.js"

const rootElement = document.getElementById("root");

// const studies = [
// 		{
// 		title:"Learn University",
// 		src: logo,
// 		class: "btn btn-primary",
// 		buttonTitle: ""
// 		},
// 		{
// 		title:"Learn React",
// 		src: logo,
// 		class: "btn btn-succes",
// 		buttonTitle: "s"
// 		}
// ];

// class Container extends Component {
	
// 	constructor (props) {

// 			super(props);

// 			this.state = {
// 				likes : 0,
// 				dislikes: 0
// 			}
// 	}

// 	handleLikes(event) {

// 		this.setState({
// 			likes: this.state.likes + 1,
// 		})
// 	}

// 	render() {
// 		return(
// 		<div className="container staudies">
// 			<img src={ this.props.src } alt="logo" className="index-logo" />
// 			<h1> { this.props.title } </h1>
// 			<div class="like-wrapper">
// 				<span class="like-wrapper-good">
// 					<button
// 						onClick={ this.handleLikes }
// 					 class="fas like">+</button>
// 					<span>(0)</span>
// 				</span>
// 				<br/>
// 				<span className="like-wrapper-bad">
// 					<button className="fas dislike">-</button>
// 					<span>(0)</span>
// 				</span>
// 			</div>
// 			<button > Start Education </button>
// 			<button > show more </button>
// 			<div class={ true ? "hide" : "show"}>  some text < /div>
// 		</div>
// 		)	
// 	}
// };


// const Container = (props) => {
// 	console.log("props", props)

// 	return(
// 		<div className="container staudies">
// 			<img src={ props.src } alt="logo" className="index-logo" />
// 			<h1> { props.title } </h1>
// 			<div class="like-wrapper">
// 				<span class="like-wrapper-good">
// 					<button class="fas like">+</button>
// 					<span>(0)</span>
// 				</span>
// 				<br/>
// 				<span class="like-wrapper-bad">
// 					<button class="fas dislike">-</button>
// 					<span>(0)</span>
// 				</span>
// 			</div>
// 			<button className={ props.class }> Start Education </button>
// 			<button className={ props.class }> show more </button>
// 			<div class={ true ? "hide" : "show"}>  some text < /div>
// 		</div>
// 		)	
// };


ReactDOM.render (
	<App />,
	rootElement
);