import React from 'react';

export default class HighlightsItem extends React.Component {
	
	render() {
		var display = 'row highlights-item rounded ' + (this.props.selected ? '' : 'hidden');
        return (
			<div class={display}>	
				<i class="fa fa-comments" aria-hidden="true"></i>
				<div>
					<div class='description-text'>
						<p>"{this.props.data.quote}"</p>
						<p>{this.props.data.student}</p>
						<p class='degree-text'>{this.props.data.degree}</p>
					</div>
				</div>
			</div>
        );
 	}
 }
