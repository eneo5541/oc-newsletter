import React from 'react';

import HighlightsItem from './HighlightsItem';

export default class HighlightsCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0
		}
	}

	render() {
		var style = { backgroundImage: `url('${this.props.data.background}')` };
        return (
			<div class='row highlights-carousel bg-image' style={style}>
				<h2 class='carousel-title'>{this.props.data.title}</h2>
				<div class='col-md-6 col-md-offset-3'>
					<div class='row'>
						{this.props.data.tiles.map(function (tile, index) {
							var selected = (this.state.selectedIndex === index);
							return (
								<HighlightsItem key={tile.student + index} data={tile} selected={selected}/>
							);
						 }.bind(this))}
					</div>
					<div class='row pagination'>
						{this.props.data.tiles.map(function (tile, index) {
							var paginationClass = 'bullet ' + (this.state.selectedIndex === index ? 'selected' : '');
							return (
								<div key={'pagination' + index} class={paginationClass}/>
							);
						 }.bind(this))}
					</div>
				</div>
			</div>
        );
 	}
 }
