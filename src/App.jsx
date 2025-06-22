// src/App.jsx
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import Discover from "./pages/Discover";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    // UPDATED: Added a gradient background class
    <div className="relative flex bg-gradient-to-br from-background to-primary">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Searchbar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Discover />
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            {/* Right Sidebar */}
          </div>
        </div>
      </div>

      {activeSong?.attributes && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-primary backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
