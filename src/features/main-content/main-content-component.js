import React, { Component } from 'react';
import styles from "./main-content-component.css"
import SchoolList from "./shcool-list/school-list-component.js"
const MainContent = (props) => {
	return (
		<div> 
			 <h1 className={styles.test + " test"}>Test</h1>
			 <SchoolList className={ styles.blueColor} />
		</div>
	);
};

export default MainContent;