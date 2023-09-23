import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/users/UserPage";
import TestPage from "./pages/test/TestPage";
import UserPageModal from "./pages/users/UserPageModal";
import Portal from "./shared/components/Portal";

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <Routes>
        <Route path="/" element={<UserPage />}>
          <Route
            path=":id"
            element={
              <Portal>
                <UserPageModal />
              </Portal>
            }
          />
        </Route>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
