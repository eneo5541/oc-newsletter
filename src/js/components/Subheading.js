import React from 'react';

export default class Subheading extends React.Component {
	render() {
        return (
			<div class='row subheading'>
				<h2>{this.props.data.title}</h2>
				<p>{this.props.data.subtitle}</p>
			</div>
        );
 	}
 }
