import "./App.css";
import PostCreator from "./components/PostCreator/PostCreator";
import PostsContainer from "./components/PostsContainer/PostsContainer";

function App() {
  return (
    <div>
      <PostCreator />
      <PostsContainer />    
    </div>
  );
}

export default App;