import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	logo: {
		display: 'flex',
		img: {
			height: '150px',
			width: '150px',
			borderRadius: '50%',
		},
	},
	navbrand: {
		fontFamily: 'trirong',
		fontSize: '30px',
		fontWeight: 'bold !important',
		textShadow: ' 14px 4px 4px #aaa',
	},
	nav: {
		flex: '1.5',

		padding: '.6rem',
		[theme.breakpoints.up('lg', 'xl')]: {
			display: 'flex',
			flex: '1.5',
			flexDirection: 'row',
		},
	},
	item: {
		padding: '.7rem',
		listStyle: 'none',
		textDecoration: 'none',
		fontFamily: 'serif',
		fontWeight: 'bold',
		opacity: 1,
		color: 'green',
	},
	avatar: {
		width: '2rem',
		height: '2rem',
		borderRadius: '50%',
		background: 'red',
		textAlign: 'center',
		fontSize: '1.4rem',
		fontFamily: 'georgia',
		marginRight: '1rem',
		[theme.breakpoints.up('lg', 'xl')]: {
			width: '2.9rem',
			height: '2.9rem',
			borderRadius: '50%',
			background: 'purple',
			color: 'yellow',
			textAlign: 'center',
			fontSize: '1.7rem',
			marginRight: '6rem',
		},
	},
	logout: {
		display: 'block',
	},
	none: {
		display: 'none',
	},
	theming: {
		marginLeft: '16rem',
		[theme.breakpoints.down('md', 'sm')]: {
			display: 'none',
		},
	},
	disabled: {
		padding: '.7rem',
		listStyle: 'none',
		textDecoration: 'none',
		fontFamily: 'serif',
		fontWeight: 'bold',
		opacity: 0.4,
		color: 'grey !important',

		pointerEvents: 'none',
	},
}));
