import React from 'react';

import SmallUpdate from './SmallUpdate';

export default class UpdatesCarousel extends React.Component {

	render() {
        return (
			<div class='row updates-carousel'>
				<div class='col-md-8 col-md-offset-2'>
					<h2 class='carousel-title'>{this.props.data.title}</h2>
					<div class='row'>
						{this.props.data.tiles.map((tile, index) => (
							<SmallUpdate key={tile.title + index} data={tile} />
						))}
					</div>
				</div>
			</div>
        );
 	}
 }
