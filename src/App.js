import './App.css';
import Main from './components/Main/Main';
import PostDetails from './components/PostDetails/PostDetails'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/details/:id" element={<PostDetails/>} />

      </Routes>
    </div>
  );
}

export default App;
