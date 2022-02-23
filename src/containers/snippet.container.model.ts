import { Snippet } from '../models/snippet';

export const filterNewSnippet = (snippetToRemove: Snippet) => (snippet: Snippet) =>
	snippet.name !== snippetToRemove.name;

export const getSavedSnippets = (): Snippet[] => {
	const savedSnippetsJSON = localStorage.getItem('emailSnippets');
	return savedSnippetsJSON ? JSON.parse(savedSnippetsJSON) : [];
};

export const setSavedSnippetsOnLocalStorage = (snippets: Snippet[]) => {
	const sessionStorageSnippetList = JSON.stringify(snippets);
	localStorage.setItem('emailSnippets', sessionStorageSnippetList);
};

export const sendSelectedSnippet = (snippet: Snippet): void => {
	window.parent.postMessage({ snippet: snippet.template }, '*');
};
