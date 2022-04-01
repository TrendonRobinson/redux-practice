import "./App.css";

import Profile from "./components/Profile";
import Login from "./components/Login";
import Zipcode from "./components/Zipcode";
import Businesses from "./components/Businesses";

function App() {
    return (
        <div className="App">
            <Zipcode />
            <Businesses />
            {/* <Profile />
            <Login /> */}
        </div>
    );
}

export default App;
