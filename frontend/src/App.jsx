import PageTabs from "./Tabs";
import Admin from "./Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<PageTabs />} />
            <Route path="admin">
              <Route index element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
