import React from 'react';
import { useAppStyles } from './App.styles';
import { SnippetsContainer } from './containers/snippets.container';

export const App = () => {
	const classes = useAppStyles();
	return (
		<section>
			<h2 className={classes.title}>Personal Snippets</h2>
			<SnippetsContainer />
		</section>
	);
};
