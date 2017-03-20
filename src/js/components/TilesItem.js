import React from 'react';

export default class TilesItem extends React.Component {

	render() {
		var style = { backgroundImage: `url('${this.props.data.image}')` };
        return (
			<div class='col-md-4'>
				<div class='tiles-item' style={style}>
					<div class='description-text'>
						<h3 class='title'>{this.props.data.title}</h3>
						<p class='date'>{this.props.data.date}</p>
					</div>
				</div>
			</div>
        );
 	}
 }
