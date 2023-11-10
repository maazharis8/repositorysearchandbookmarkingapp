import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Repositories from "./app/modules/repositories";
import Bookmarks from "./app/modules/bookmarks/Bookmarks";
import Layout from "./app/Components/hoc/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="bookmark" element={<Bookmarks />} />
            <Route path="/" element={<Repositories />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
