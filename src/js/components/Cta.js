import React from 'react';

export default class Cta extends React.Component {
	render() {
        return (	
        	<div class='row cta'>
				<a href={this.props.data.url} class='btn btn-green'><h3>{this.props.data.text}</h3></a>
			</div>
        );
 	}
 }
