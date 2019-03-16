import React, {Component} from "react";

class AsideComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <aside className={this.props.class + "stest"}>

            </aside>
        );
    };
};

export default AsideComponent;