import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="60f9538e-3c6e-4d96-a820-80424c4546cb"
        userName="devjaykes"
        userSecret="devjayke"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      />
    </div>
  );
}

export default App;
