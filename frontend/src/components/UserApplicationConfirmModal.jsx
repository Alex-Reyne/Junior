import { useState } from 'react';
import axios from 'axios';
import { Button, Box, Dialog } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineFolderOpen, AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

export default function ConfirmModal(props) {
	const {
		job_title,
		description,
		salary,
		formatted_salary,
		date_posted,
		formatted_date,
		date_applied,
		formatted_date_applied,
		job_type,
		is_remote,
		employer_email,
		company_name,
		employer_bio,
		employer_photo_url,
		deadline,
		photo_url,
		city,
		pay,
		formatted_pay,
		formatted_deadline,
		posting_location,
		job_posting_id,
		gig_posting_id,
		is_accepted,
		is_completed,
	} = props;

	const [askConfirm, setAskConfirm] = useState(false);
	// const [openModal, setOpenModal] = useState(false);

	const navigate = useNavigate();

	// const handleView = () => {
	// 	openModal === true ? setOpenModal(false) : setOpenModal(true);
	// };

	const [view, setView] = useState('ask');
	const handleView = () => {
		if (view === 'ask') {
			setView('confirm');
		} else if (view === 'confirm') {
			setView('ask');
		}
	};

	return (
		<div className='apply-modal'>
			{view === 'confirm' && (
				<section>
					<p id='submitted-msg'>Your application has been deleted.</p>
					<Button variant='contained'>Close</Button>
				</section>
			)}
			{view === 'ask' && (
				<section>
					<h1>
						Are you sure you want to delete your application for {job_title}?
					</h1>
					<Button variant='contained' onClick={() => console.log('delete')}>
						Delete
					</Button>
					<Button variant='contained' onClick={() => console.log('Cancel')}>
						Cancel
					</Button>
				</section>
			)}
		</div>
	);
}
