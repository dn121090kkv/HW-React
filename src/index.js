import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StudiesData from "./constants";
import "./index.css"
import App from "./core/App"

const rootElement = document.getElementById("root");

class Container extends Component {
	
	constructor (props) {

			super(props);

			this.state = {
				likes : 0,
				dislikes: 0
			}
	}

	handleLikes(event) {

		this.setState({
			likes: this.state.likes + 1,
		})
	}

	render() {
		return(
		<div className="container staudies">
			<img src={ this.props.src } alt="logo" className="index-logo" />
			<h1> { this.props.title } </h1>
			<div class="like-wrapper">
				<span class="like-wrapper-good">
					<button
						onClick={ this.handleLikes.bind(this) }
					 class="fas like">+</button>
					<span>(0)</span>
				</span>
				<br/>
				<span className="like-wrapper-bad">
					<button className="fas dislike">-</button>
					<span>(0)</span>
				</span>
			</div>
			<button > Start Education </button>
			<button > show more </button>
			<div class={ true ? "hide" : "show"}>  some text </div>
		</div>
		)
	}
};
class ClickButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"};

        this.press = this.press.bind(this);
    }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

ReactDOM.render(

	<App/>,
	rootElement
);