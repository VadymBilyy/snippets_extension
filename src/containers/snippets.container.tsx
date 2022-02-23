import React, { useEffect, useState } from 'react';
import { Snippets } from '../components/snippets/snippets.component';
import { Snippet } from '../models/snippet';
import { DEFAULT_SNIPPETS } from '../storage/snippets';
import {
	filterNewSnippet,
	getSavedSnippets,
	sendSelectedSnippet,
	setSavedSnippetsOnLocalStorage,
} from './snippet.container.model';

export const SnippetsContainer = () => {
	const [snippets, handleSnippets] = useState<Snippet[]>(DEFAULT_SNIPPETS);

	const onSnippetRemove = (snippetToRemove: Snippet) => {
		const customSnippets = getSavedSnippets().filter(filterNewSnippet(snippetToRemove));
		const updatedSnippets = snippets.filter(filterNewSnippet(snippetToRemove));

		handleSnippets(updatedSnippets);
		setSavedSnippetsOnLocalStorage(customSnippets);
	};

	const onAddSnippet = (newSnippet: Snippet) => {
		const customSnippets = getSavedSnippets();

		handleSnippets([...snippets, newSnippet]);
		setSavedSnippetsOnLocalStorage([...customSnippets, newSnippet]);
	};

	useEffect(() => {
		const customSnippets = getSavedSnippets();
		if (customSnippets.length > 0) {
			const updatedSnippets = snippets.concat(customSnippets);
			handleSnippets(updatedSnippets);
		}
	}, []);

	return snippets.length > 0 ? (
		<Snippets
			snippets={snippets}
			onSnippetSelect={sendSelectedSnippet}
			onSnippetRemove={onSnippetRemove}
			onAddSnippet={onAddSnippet}
		/>
	) : null;
};
