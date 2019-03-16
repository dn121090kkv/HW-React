import React, {Component} from "react";

class HeaderComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <header className={this.props.class + "header"}>

            </header>
        );
    };
};

export default HeaderComponent;