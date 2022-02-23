import makeStyles from '@material-ui/styles/makeStyles';

export const useAddSnippetStyles = makeStyles({
	content: {
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		height: 300,
		marginTop: '20%',
		backgroundColor: 'white',
		border: '1px solid #000',
		padding: 10,
	},
	textarea: {
		flex: 1,
	},
	preview: {
		flex: 1,
		overflow: 'auto',
		border: '1px solid black',
	},
	templateCreator: {
		display: 'flex',
		height: '100%',
		gap: 10,
		flex: 1,
	},
	title: {
		textAlign: 'center',
		margin: 0,
	},
});
