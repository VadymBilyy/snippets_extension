import React, { FC } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Snippet } from '../../models/snippet';

interface SnippetsProps {
	snippet: Snippet;
	onSnippetSelect(snippetName: Snippet): void;
	onSnippetRemove(snippetName: Snippet): void;
}

export const SnippetItem: FC<SnippetsProps> = ({ snippet, onSnippetSelect, onSnippetRemove }) => {
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		onSnippetRemove(snippet);
	};
	return (
		<ListItem button onClick={() => onSnippetSelect(snippet)}>
			<ListItemText primary={snippet.name} />
			{snippet.isRemovable && (
				<IconButton edge="end" aria-label="delete" onClick={handleDelete}>
					<DeleteIcon />
				</IconButton>
			)}
		</ListItem>
	);
};
