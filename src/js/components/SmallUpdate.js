import React from 'react';

export default class SmallUpdate extends React.Component {
	render() {
        return (
			<div class='col-md-3'>
				<div class='small-update rounded'>
					<img class='update-image hidden-sm hidden-xs' src={this.props.data.image}></img>
					<div class='description-text'>
						<h3 class='update-title'>{this.props.data.title}</h3>
						<p class='update-description' dangerouslySetInnerHTML={{__html: this.props.data.description}}></p>
						<p class='update-date'>Last update: {this.props.data.date}</p>
					</div>
				</div>
			</div>
        );
 	}
 }
