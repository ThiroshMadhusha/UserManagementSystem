import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUSer from "./components/AddUSer";
import EditUSer from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/add" element={<AddUSer />}></Route>
          <Route path="/edit/:id" element={<EditUSer />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
