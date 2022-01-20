import './styles/PortfolioCard.scss';
import {Grid} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ApplicationCard(props) {
	const { first_name, last_name, email, bio, photo_url, github_url, linkedIn_url, resume_url, location, dev_photo_url } =
		props;

	return (
		<Grid container direction='row' columnSpacing={3}>
			<Grid item className='profile-pic'>
				<img id="profile-pic"
					src={photo_url}
					alt={`Photo of ${first_name} ${last_name}`}
				/>
			</Grid>
			<Grid item xs={12} sm container direction='column'>
				<Grid item>
					<h3>{`${first_name} ${last_name}`}</h3>
				</Grid>
				<Grid container direction='row' className='profile-info'>
					<Grid item xs={3}>
						<p>{email}</p>
						<p>Github: {github_url}</p>
						<p>LinkedIn: {linkedIn_url}</p>
						<p>Resume: {resume_url}</p>
						<p><LocationOnIcon /> {location}</p>
					</Grid>
					<Grid item>
						<p>{bio}</p>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
		
	);
}
