import React from 'react';

export default class LargeUpdate extends React.Component {
	
	render() {
		const Description = function(props) {
			var button;
			if (props.data.button) {
				button = <a href={props.data.button.url} class='btn btn-green'>{props.data.button.text}</a>;
			} else {
				button = null;
			}
			return (
				<div>
					<div class='description-text'>
						<h2 class='update-title'>{props.data.title}</h2>
						<p class='update-description' dangerouslySetInnerHTML={{__html: props.data.description}}></p>
					</div>
					{button}
				</div>
			)
		};

		var content;
		if (this.props.children) {
			content = this.props.children
		} else {
			content = <Description data={this.props.data} />
		}

        return (
			<div class='row'>
				<div class='col-md-6 col-md-offset-3'>
					<div class='row large-update rounded'>
						<div class='col-md-8 update-main-description'>
							{content}
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
