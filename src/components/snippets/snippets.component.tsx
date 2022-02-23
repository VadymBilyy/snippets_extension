import { Button, List } from '@material-ui/core';
import React, { FC, Fragment, useState } from 'react';
import { Snippet } from '../../models/snippet';
import { AddSnippetModal } from '../add-snippet/add-snippet.component';
import { SnippetItem } from '../snippet-item/snippet-item.component';
import { useSnippetStyles } from './snippet.component.styles';

interface SnippetsProps {
	snippets: Snippet[];
	onSnippetSelect(snippetName: Snippet): void;
	onSnippetRemove(snippetName: Snippet): void;
	onAddSnippet(snippetName: Snippet): void;
}

export const Snippets: FC<SnippetsProps> = ({ snippets, onSnippetSelect, onSnippetRemove, onAddSnippet }) => {
	const [isModalOpen, handleModalVisibility] = useState(false);
	const classes = useSnippetStyles();

	const renderSnippets = (snippets: Snippet[]) =>
		snippets.map((snippet) => (
			<li key={snippet.name}>
				<SnippetItem snippet={snippet} onSnippetSelect={onSnippetSelect} onSnippetRemove={onSnippetRemove} />
			</li>
		));

	return (
		<Fragment>
			<AddSnippetModal
				isOpen={isModalOpen}
				onAddSnippet={onAddSnippet}
				onClose={() => handleModalVisibility(false)}
			/>
			<List>{renderSnippets(snippets)}</List>
			<footer className={classes.footer}>
				<Button variant={'contained'} color={'primary'} onClick={() => handleModalVisibility(true)}>
					Create template
				</Button>
			</footer>
		</Fragment>
	);
};
