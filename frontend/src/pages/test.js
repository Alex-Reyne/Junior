import { useEffect, useState } from 'react';
import './styles/JobSearch.scss';
import axios from 'axios';

import JobSearchCard from '../components/JobSearchCard';
import SearchBar from '../components/SearchBar';

export default function JobSearch(props) {
	const [query, setQuery] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState({
		jobs: [],
		gigs: [],
	});

	const jobs = searchResults.jobs.map(item => {
		return (
			<div>
				<p>{item.job_title}</p>
			</div>
		);
	});
	const gigs = searchResults.gigs.map(item => {
		return (
			<div>
				<p>{item.job_title}</p>
			</div>
		);
	});

	return (
		<div className='jobsearch-content'>
			<h1>Job Search Page</h1>
			<SearchBar
				state={query}
				onChange={e => setQuery(e.target.value)}
				onSubmit={() => setSearchTerm(query)}
			/>
			{searchResults.jobs.length > 0 && (
				<div>
					<h1>Jobs:</h1>
					{jobs}
				</div>
			)}
			{searchResults.gigs.length > 0 && (
				<div>
					<h1>Gigs:</h1>
					{gigs}
				</div>
			)}
		</div>
	);
}
