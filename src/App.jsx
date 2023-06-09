import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirestoreUsers from "./pages/firestore_users";
import { AppBar } from "./components/appbar";
import { HomePage } from "./pages/home_page";
import { Footer } from "./components/footer";
import LoginPage from "./pages/login_page";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/firestore-users" element={<FirestoreUsers />} />  
      </Routes>
      <Footer />

    </Router>
  )
}

export default App