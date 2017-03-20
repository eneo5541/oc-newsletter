import React from 'react';

export default class Header extends React.Component {

	render() {
		var style = { backgroundImage: `url('${this.props.data.image}')` };
        return (
			<div class='row header bg-image' style={style}>
				<img class='open-college-logo' src='images/logo-black-txt.svg'></img>
				<h1>Our monthly newsletter</h1>
				<h2>{this.props.data.date}</h2>
			</div>
        );
 	}
 }
