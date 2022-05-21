import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUSer from "./components/AddUSer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/add" element={<AddUSer />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
