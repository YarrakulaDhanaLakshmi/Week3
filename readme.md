WebSocket Chat Application

 Overview

The WebSocket Chat Application is a real-time chat application that allows multiple users to communicate seamlessly. The application is built using WebSocket technology and provides a clean, intuitive user interface for messaging.

Features

- Real-Time Messaging: Enables instant communication between users using WebSocket.
- Broadcast Functionality: Messages are broadcasted to all connected clients.
- Responsive Design: Clean and responsive user interface.
- Keyboard Shortcuts: Press 'Enter' to send messages.
- Connection Feedback: Displays connection and disconnection status.

Files Included

- `server.js`: Backend Node.js server to handle WebSocket connections.
- `index.html`: Frontend HTML file for the chat interface.
- Embedded CSS: Provides styles for the layout and design.
- Embedded JavaScript: Handles WebSocket communication and user interactions.

How to Use

1. Install the required dependencies:
  
   npm install ws
 

2. Start the WebSocket server:
  
   node server.js
  

3. Open `index.html` in a modern web browser.

4. Type a message in the input field and click "Send" or press 'Enter' to send it.

5. Messages will appear in the chat window and will be broadcasted to all connected clients.

 Code Structure

 Backend (server.js)

1. WebSocket Server:
   - Listens on `ws://localhost:8080`.
   - Handles client connections and messages.
   - Broadcasts messages to all connected clients.

2. Core Functions:
   - `on('connection')`: Triggered when a client connects.
   - `on('message')`: Processes received messages and broadcasts them.
   - `on('close')`: Logs client disconnection.

3. Dependencies:
   - `ws`: WebSocket library for Node.js.
   - `http`: Built-in Node.js module for HTTP server.

 Frontend (index.html)

1. HTML Structure:
   - `.chat-container`: Main container for the chat interface.
   - `#messages`: Displays chat messages dynamically.
   - `#messageInput`: Input field for typing messages.
   - `#sendButton`: Button to send messages.

2. CSS:
   - Styles for chat layout, input fields, and buttons.
   - `.chat-messages`: Scrollable container for messages.
   - `.chat-input`: Flexbox layout for input and send button.

3. JavaScript:
   - Establishes WebSocket connection to `ws://localhost:8080`.
   - Handles sending and receiving messages.
   - Dynamically updates the chat window.
   - Provides error and connection handling.

 How to Customize

1. Change WebSocket URL:
   Update the WebSocket URL in the JavaScript section:
   
   const socket = new WebSocket('ws://your-server-url');
  

2. Modify Styles:
   Adjust the embedded CSS for different themes or layouts.

3. Enhance Features:
   - Add user authentication.
   - Implement message encryption.
   - Enable chat rooms or private messaging.

 Browser Compatibility

The app is compatible with modern browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

 Future Enhancements

- Add user avatars.
- Display timestamps for messages.
- Implement persistent chat history using a database.
- Support multiple chat rooms.

License

This project is open-source and can be freely modified and distributed.
YARRAKULA DHANA LAKSHMI
yarrakuladhanalakshmi@gmail.com

