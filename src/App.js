import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./firebaseConfig.js";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

function App() {
  // Hook to know whether user is logged in or not.
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>{auth.currentUser && <SignOut />}</header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
