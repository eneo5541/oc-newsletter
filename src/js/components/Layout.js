import React from 'react';

import Cta from './Cta';
import Footer from './Footer';
import Header from './Header';
import HighlightsCarousel from './HighlightsCarousel';
import LargeUpdate from './LargeUpdate';
import Subheading from './Subheading';
import TilesCarousel from './TilesCarousel';
import UpdatesCarousel from './UpdatesCarousel';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			headerData: {
				image: 'images/top-header.jpg',
				date: '1st Dec 2016'
			},
			nicsUpdateData: {
				title: 'Nic\'s Update',
				description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Ut sagittis non ante non congue. Maecenas varius rutrum augue, quis egestas sem molestie in. Nunc ut sollicitudin arcu. Sed mi purus, porta non vestibulum sed, blandit in purus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Ut sagittis non ante non congue. Maecenas varius rutrum augue, quis egestas sem molestie in. Nunc ut sollicitudin arcu.</p>',
				button: { text: 'Read More', url: '#' },
				image: 'images/Nic-photo.jpg'
			},
			divisionsData: {
				title: 'Updates from each division',
				tiles: [{
					title: 'HR',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Ut sagittis non ante non congue... <a href={this.props.data.link}>Read More</a>',
					date: 'June 27, 2016',
					image: 'images/finance-img.jpg',
					link: '#'
				}, {
					title: 'HR',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Ut sagittis non ante non congue... <a href={this.props.data.link}>Read More</a>',
					date: 'June 27, 2016',
					image: 'images/finance-img.jpg',
					link: '#'
				}, {
					title: 'HR',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Ut sagittis non ante non congue... <a href={this.props.data.link}>Read More</a>',
					date: 'June 27, 2016',
					image: 'images/finance-img.jpg',
					link: '#'
				}, {
					title: 'HR',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Ut sagittis non ante non congue... <a href={this.props.data.link}>Read More</a>',
					date: 'June 27, 2016',
					image: 'images/finance-img.jpg',
					link: '#'
				}]
			},
			vacanciesSubheading: {
				title: 'Current Vacancies',
				subtitle: 'Finding great people to join Open Colleges is currently high priority and critical to the success of our growth targets.',
				cta: {
					text: 'Have a look at all the jobs',
					url: '#'
				}
			},
			vacanciesUpdateData: {
				description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Ut sagittis non ante non congue. Maecenas varius rutrum augue, quis egestas sem molestie in. Nunc ut sollicitudin arcu. Sed mi purus, porta non vestibulum sed, blandit in purus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Ut sagittis non ante non congue. Maecenas varius rutrum augue, quis egestas sem molestie in. Nunc ut sollicitudin arcu.</p>',
				image: 'images/job-vacancy-img1.jpg'
			},
			studentQuotes: {
				title: 'What our students say about Open Colleges',
				background: 'images/bg-student-testimonial.jpg',
				tiles: [{
					quote: 'Our talent acquisition team are currently seeking applicants for 2 Education Compliance Advisor positions within our Business, Finance and Services Education Division',
					student: '1Sarah Smith',
					degree: 'Diploma of Counselling'
				}, {
					quote: 'Our talent acquisition team are currently seeking applicants for 2 Education Compliance Advisor positions within our Business, Finance and Services Education Division',
					student: '2Sarah Smith',
					degree: 'Diploma of Counselling'
				}, {
					quote: 'Our talent acquisition team are currently seeking applicants for 2 Education Compliance Advisor positions within our Business, Finance and Services Education Division',
					student: '3Sarah Smith',
					degree: 'Diploma of Counselling'
				}]
			},
			upcomingEventsSubheading: {
				title: 'Upcoming events at Open Colleges',
				subtitle: 'Finding great people to join Open Colleges is currently high priority and critical to the success of our growth targets.',
				cta: {
					text: 'All the events',
					url: '#'
				}
			},
			eventsData: {
				tiles: [{
					title: 'Christmas Party',
					date: '6th December, 2016',
					image: 'images/christmas-party.jpg',
					link: '#'
				}, {
					title: 'Christmas Party',
					date: '6th December, 2016',
					image: 'images/christmas-party2.jpg',
					link: '#'
				}, {
					title: 'Christmas Party',
					date: '6th December, 2016',
					image: 'images/christmas-party3.jpg',
					link: '#'
				}]
			}
		};
	}

	render() {
		return (
			<div class='open-colleges-newsletter'>
				<Header data={this.state.headerData} />
			    <LargeUpdate data={this.state.nicsUpdateData} />
			    <UpdatesCarousel data={this.state.divisionsData} />
			    <Subheading data={this.state.vacanciesSubheading}/>
				<LargeUpdate data={this.state.vacanciesUpdateData} />
				<Cta data={this.state.vacanciesSubheading.cta} />
				<HighlightsCarousel data={this.state.studentQuotes} />
			    <Subheading data={this.state.upcomingEventsSubheading}/>
			    <TilesCarousel data={this.state.eventsData} />
				<Cta data={this.state.upcomingEventsSubheading.cta} />
				<Footer />
			</div>
		);
	}
}
