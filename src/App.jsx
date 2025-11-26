// src/App.jsx
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import Discover from "./pages/Discover";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex bg-background min-h-screen selection:bg-primary/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />
      
      {/* Ambient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <Sidebar />
      <div className="flex-1 flex flex-col bg-background/30 backdrop-blur-sm">
        <header className="h-28 flex items-center">
          <Searchbar />
        </header>
        <div className="px-10 h-[calc(100vh-112px)] overflow-y-auto custom-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Discover />
          </div>
        </div>
      </div>

      {activeSong?.attributes && (
        <div className="absolute h-28 md:h-32 bottom-0 left-0 right-0 flex animate-slideup bg-slate-950/90 backdrop-blur-3xl border-t border-white/5 z-[100] shadow-[0_-10px_50px_rgba(0,0,0,0.5)]">
          <MusicPlayer />
        </div>
      )}

    </div>
  );
};

export default App;
