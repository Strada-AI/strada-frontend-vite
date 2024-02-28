import React from "react";
import { Button } from "./components/ui/Button";
function App() {
    return (
        <div className="w-screen flex flex-col items-center justify-center space-y-4">
            <span className="text-3xl">Welcome to strada</span>
            <Button value="Get Started" className="dark:(border-dark-300 bg-gray-800 text-white)" />
        </div>
    );
}
export default App;
