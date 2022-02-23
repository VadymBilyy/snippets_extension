InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function (sdk) {
	sdk.Compose.registerComposeViewHandler(function (composeView) {
		let isAppended = false;
		// Create an iframe
		const iFrameOrigin = 'http://localhost:3000';
		const iframe = document.createElement('iframe');
		iframe.style.width = 'none';
		iframe.style = 'border: none; width: 350px; height: 400px';
		iframe.setAttribute('src', iFrameOrigin);

		composeView.addButton({
			title: 'Manage snippets',
			hasDropdown: true,
			iconUrl: 'https://image.ibb.co/mXS2ZU/images.png',
			onClick: function (event) {
				event.dropdown.el.appendChild(iframe);
				if (!isAppended) {
					isAppended = true;
					window.addEventListener(
						'message',
						({ origin, data }) => {
							if (origin === iFrameOrigin) {
								const el = document.createElement('article');
								el.innerHTML = data.snippet;
								// Clear existing text
								const composeBody = composeView.getBodyElement();
								composeBody.innerText = '';
								// Insert template
								event.composeView.insertHTMLIntoBodyAtCursor(el);
							}
						},
						false,
					);
				}
			},
		});

		composeView.on('destroy', function (event) {
			isAppended = false;
		});
	});
});
