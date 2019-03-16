import React, {Component} from "react";

class FooterComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <footer className={this.props.class + "stest"}>

            </footer>
        );
    };
};

export default FooterComponent;