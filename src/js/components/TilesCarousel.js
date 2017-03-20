import React from 'react';

import TilesItem from './TilesItem';

export default class UpdatesCarousel extends React.Component {

	render() {
        return (
			<div class='row tiles-carousel'>
				<div class='col-md-6 col-md-offset-3'>
					<div class='row'>
						{this.props.data.tiles.map((tile, index) => (
							<TilesItem key={tile.title + index} data={tile} />
						))}
					</div>
				</div>
			</div>
        );
 	}
 }
