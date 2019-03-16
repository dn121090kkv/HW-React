import React, {Component} from "react";
import CitiesList from "../../../constants";
import CityListContent from "../city-list/city-list-component"

class MainContentComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
           <main>
               {
                   CitiesList.cities.map( city => {
                       return (
                       <CityListContent
                       key = {city.id}
                       title = {city.title}
                       src = {city.src}
                       description = {city.description}
                       likes = {city.likes}
                       dislikes = {city.dislikes}
                       />
                       )
                   })
               }
           </main>
        );
    };
};

export default MainContentComponent;