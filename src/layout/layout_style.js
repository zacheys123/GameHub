import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	container: {
		maxWidth: '90%',
		margin: '  auto',
		border: '1px solid gray',
		minHeight: '100vh',
	},
	layout_child: {
		flex: '3',
	},
	layout_footer: { flex: '.10', position: 'sticky' },
	layout_navbar: {
		flex: '.05',

		// [theme.breakpoints.up('lg', 'xl')]: {
		// 	minHeight: '2rem',
		// 	background: 'navy',
		// 	alignItems: 'center',
		// },
	},
}));
