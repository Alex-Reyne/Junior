import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './styles/UserMenu.scss';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars() {
	return (
		<Stack direction='row' spacing={2}>
			<Avatar alt='Sarah' src='images/sarah.jpeg' className='avatar' />
		</Stack>
	);
}

export default function PositionedMenu(props) {
	const { currentUser, logout } = props;

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		logout();
		handleClose();
	};

	return (
		<div>
			<div className='profile-info'>
				<span className='name'>{currentUser.first_name}</span>
				<Button
					sx={{ mr: '8rem', borderRadius: 50 }}
					id='demo-positioned-button'
					aria-controls={open ? 'demo-positioned-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<div className='profile-info'>
						<ImageAvatars />
					</div>
				</Button>
			</div>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<Link to='/profile'>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
				</Link>
				<Link to='/applications'>
					<MenuItem onClick={handleClose}>Applications</MenuItem>
				</Link>
				<Link to='/'>
					<MenuItem onClick={handleClose}>Settings</MenuItem>
				</Link>
				<Link to='/'>
					<MenuItem onClick={handleLogout}>Logout</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
