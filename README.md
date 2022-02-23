# Amplemarket Coding Challenge

### **Goal: Build a chrome extension that adds support for basic templates to Gmail**

People who spend a lot of time writing emails (sales reps, customer support reps, etc) know that you end up writing the same things over and over again. Templates help folks be much more efficient. By the end of this challenge, you will have a chrome extension that allows you to easily insert a reply template into a message draft within Gmail with just a couple of clicks.

Below you can see an example of a chrome extension that adds templates (they call them snippets) to Gmail:

[https://lh6.googleusercontent.com/I6cp9_QEuIrgSHX6_mT-IDJw7f3nbUW8Kw_hbDWl8m7JvZ3E6cYiCU8qfHNBKNkAZMkG56pwg7jYxL7sm7RWKEzPjRNrWeDlL03Io4knGWCg9ZALqYqJRfukek52fomnX8oq4zsk](https://lh6.googleusercontent.com/I6cp9_QEuIrgSHX6_mT-IDJw7f3nbUW8Kw_hbDWl8m7JvZ3E6cYiCU8qfHNBKNkAZMkG56pwg7jYxL7sm7RWKEzPjRNrWeDlL03Io4knGWCg9ZALqYqJRfukek52fomnX8oq4zsk)

### Functionality requirements of the chrome extension you will build:

- Adds a button next to the Gmail send button. When you click this button a modal opens which will show a selection of default templates (the UI doesn’t need to look exactly like the one in the picture above - tho the modal should show up next to the button that triggers it)
- Within the **templates modal there should be an iframe with the src set to a url pointing to the backend (e.g. [https://xyz-amplemarket-challenge.herokuapp.com/templates](https://xyz-amplemarket-challenge.herokuapp.com/templates) or** https://localhost:3000/templates**).** We know there are other ways of implementing this, but we would like you to do it via an iframe. ****
- When you click one of the templates in the list, it will insert the text of the template into the body of the draft (replacing any existing text there)
- The extension **should work for a personal Gmail account - @gmail.com.** (vs a Google Mail on some other domain).

Things you do **not** need to implement (but you can if you want to go the extra mile)**:**

- Way to create a template via the chrome extension (the list of default templates can be hardcoded)
- Preview of template in chrome extension
- User specific templates - the list of default templates can be the same for all users
- Extra backend functionality - You do not need to implement user login for instance. The backend can be very simple (essentially an endpoint that serves the default templates)

Technologies we would like you to use:

- [InboxSDK](https://www.inboxsdk.com/) - SDK to build apps inside gmail
- React.js - You should use react within the iframe which renders the template choices. If you wish you can also use it in the extension itself.

Other than InboxSDK and React you have total freedom to use whatever technologies/libraries you want.

## How to run extension
1. Generate new AppId for inboxSDK
2. Open `extesions/snippets.js` and replace 'YOUR_APP_ID_HERE'
3. In terminal go to the app folder and run yarn start
4. Open Chrome to `chrome://extensions`
5. Then click on "Load Unpacked Extension" and select `extension` folder.
6. Open your inbox on Gmail and try to compose new letter
7. Click on the new extension icon