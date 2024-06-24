import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Header /> */}

      <main className="m-0 b-0 box-border grid">
        <div className="min-h-screen bg-gradient-to-t from-cyan-500 via-violet-500 to-blue-500">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
