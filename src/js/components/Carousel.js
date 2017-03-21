import React from 'react';


export default class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedIndex: 0
		}
	}

	render() {
		const Pagination = props => {
			return (
				<div class='row pagination'>
					{props.tiles.map(function (tile, index) {
						var paginationClass = 'bullet ' + (this.state.selectedIndex === index ? 'selected' : '');
						return (
							<div key={'pagination' + index} class={paginationClass}/>
						);
					 }.bind(this))}
				</div>
			)
		};

		var displayPagination;
		if (this.props.data.pagination) {
			displayPagination = <Pagination tiles={this.props.data.tiles} />;
		} else {
			displayPagination = null;
		}

		const carouselClasses = `row carousel ${this.props.data.class}` + (this.props.data.background ? ' bg-image' : '');
		const columnClasses = `col-md-${this.props.data.size} col-md-offset-${(12 - this.props.data.size) / 2}`;
		const styling = this.props.data.background ? { backgroundImage: `url('${this.props.data.background}')` } : null;

        return (
			<div class={carouselClasses} style={styling}>
				<div class={columnClasses}>
					<h2 class='carousel-title'>{this.props.data.title}</h2>
					<div class='row'>
						{this.props.data.tiles.map(function (tile, index) {
							var ItemRenderer = this.props.data.renderer;
							var selected = (this.state.selectedIndex === index);
							return (
								<ItemRenderer key={tile.title + index} data={tile} selected={selected} />
							);
						 }.bind(this))}
					</div>
					{displayPagination}
				</div>
			</div>
        );
 	}
 }
