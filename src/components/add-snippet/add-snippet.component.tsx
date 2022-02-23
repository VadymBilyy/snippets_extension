import { Button, TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import React, { FC, useState } from 'react';
import { Snippet } from '../../models/snippet';
import { useAddSnippetStyles } from './add-snippet.styles';

interface AddSnippetProps {
	isOpen: boolean;
	onClose(): void;
	onAddSnippet(snippetName: Snippet): void;
}

export const AddSnippetModal: FC<AddSnippetProps> = ({ isOpen, onAddSnippet, onClose }) => {
	const [value, onValueChange] = useState('');
	const [templateName, onTemplateNameChange] = useState('');
	const classes = useAddSnippetStyles();

	const handleClose = () => {
		onValueChange('');
		onTemplateNameChange('');
		onClose();
	};

	const handleAddSnippet = () => {
		onAddSnippet({
			name: templateName,
			template: value,
			isRemovable: true,
		});
		handleClose();
	};
	const isTemplateButtonDisabled = value === '' || templateName === '';
	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description">
			<div className={classes.content}>
				<div className={classes.templateCreator}>
					<textarea
						value={value}
						className={classes.textarea}
						onChange={(e) => onValueChange(e.target.value)}></textarea>
					<div className={classes.preview}>
						<h4 className={classes.title}>Template Preview</h4>
						<div dangerouslySetInnerHTML={{ __html: value }} />
					</div>
				</div>
				<TextField
					placeholder={'Template name'}
					value={templateName}
					onChange={(e) => onTemplateNameChange(e.target.value)}
				/>
				<Button
					disabled={isTemplateButtonDisabled}
					variant={'contained'}
					color={'primary'}
					onClick={handleAddSnippet}>
					add template
				</Button>
			</div>
		</Modal>
	);
};
