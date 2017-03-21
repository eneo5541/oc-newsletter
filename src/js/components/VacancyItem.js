import React from 'react';

export default class VacancyItem extends React.Component {
	
	render() {
		return (
			<div class='row vacancy-item'>
				<i class="fa fa-briefcase" aria-hidden="true"></i>
				<div class='description-text'>
					<h3>{this.props.data.title}</h3>
					<p>{this.props.data.description}</p>
					<a href={this.props.data.descriptionTranscript}><i class="fa fa-file-pdf-o" aria-hidden="true"></i>Download the job description</a>
					<p class='closing-date'>Closing date is {this.props.data.closingDate}. <a href="mailto:hr@opencolleges.edu.au">Please reply to HR for this position</a></p>
				</div>
			</div>
        );
 	}
 }
