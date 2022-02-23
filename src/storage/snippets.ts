import { Snippet } from '../models/snippet';

export const DEFAULT_SNIPPETS: Snippet[] = [
	{
		name: 'Greetings',
		template: `<section>
			<h1>Hello</h1>
			<div>Nice to meet you!</div>
		</section>`,
		isRemovable: false,
	},
	{
		name: 'openProfile',
		template: `<section>
			<h1>Thanks for the interest in my profile</h1>
			<div>Currently, I'm open to the new positions</div>
		</section>`,
		isRemovable: false,
	},
];
