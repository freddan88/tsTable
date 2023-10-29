import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <main className="max-w-4xl mx-auto">
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
