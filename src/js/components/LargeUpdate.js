import React from 'react';

export default class LargeUpdate extends React.Component {
	
	render() {
		var button;
		if (this.props.data.button) {
			button = <a href={this.props.data.button.url} class='btn btn-green'>{this.props.data.button.text}</a>;
		} else {
			button = null;
		}
			

        return (
			<div class='row'>
				<div class='col-md-6 col-md-offset-3'>
					<div class='row large-update rounded'>
						<div class='col-md-8 update-main-description'>
							<div class='description-text'>
								<h2 class='update-title'>{this.props.data.title}</h2>
								<p class='update-description' dangerouslySetInnerHTML={{__html: this.props.data.description}}></p>
							</div>
							{button}
						</div>
						<div class='col-md-4 no-padding update-image'>		
							<img src={this.props.data.image}></img>
						</div>
					</div>
				</div>
			</div>
        );
 	}
 }
