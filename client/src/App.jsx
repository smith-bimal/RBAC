import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="flex h-[calc(100vh-80px)] bg-slate-100">
        <Sidebar />
        <Members />
      </div>
    </main>
  )
}

export default App
