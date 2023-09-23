import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/users/UserPage";

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <Routes>
        <Route path="/" element={<UserPage />}>
          <Route path=":id" element={<h1>Hello...</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
