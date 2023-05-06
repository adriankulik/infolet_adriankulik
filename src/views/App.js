import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Shop from "./Shop/Shop";
import User from "./User/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<User />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
