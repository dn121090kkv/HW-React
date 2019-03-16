import React, { Component } from 'react';

class CityListContent extends Component{

    constructor(props){
        super(props);
        this.state = {
            likes : 0,
            dislikes: 0
        };

        this.handleLikes = this.handleLikes.bind(this);
    }

    handleLikes(event) {

    	let targetClassList = event.target.classList;

    	if(targetClassList.contains("like_btn")){
            this.setState({
                likes: this.state.likes + 1,
            });
		}else if(targetClassList.contains("dislike_btn")){
            this.setState({
                dislikes: this.state.dislikes + 1,
            });
        }
    }


    render() {

		return(
		<div className="container city" key={this.props.id}>
			<img src={ this.props.src } alt="logo" className="index-logo" />
			<h1> { this.props.title } </h1>
			<div className="like-wrapper">
				<span className="like-wrapper-good">
					<button
						onClick = {this.handleLikes}
						className="like_btn like blog_btn"></button>
					<span>{ this.state.likes }</span>
				</span>
				<br/>
				<span className="like-wrapper-bad">
					<button onClick = {this.handleLikes}
						className="dislike_btn dislike blog_btn"></button>
					<span>{ this.state.dislikes }</span>
				</span>
			</div>
			<button > Start Education </button>
			<button > show more </button>
			<div className={ true ? "hide" : "show"}>{ this.props.description}</div>
		</div>
		)
	};
};

export default CityListContent;