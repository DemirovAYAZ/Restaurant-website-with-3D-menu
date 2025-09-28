import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "salads",
  "fast-food",
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const zoomLevelAtom = atom(100);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [zoomLevel, setZoomLevel] = useAtom(zoomLevelAtom);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50));
  };

  useEffect(() => {
    const playAudio = async () => {
      try {
        const audio = new Audio("/audios/page-flip-01a.mp3");
        await audio.play();
      } catch (error) {
        console.log("Audio play prevented by browser autoplay policy");
      }
    };

    playAudio();
  }, [page]);

  return (
    <>
      <div className="pointer-events-none select-none z-20 absolute inset-0 flex flex-col justify-between">
        <div className="flex justify-between items-start p-6">
          <div className="pointer-events-auto">
            <h3 className="text-white text-2xl font-bold">
              <span className="text-orange-400">3D</span> Interactive Menu
            </h3>
          </div>
        </div>
        
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center gap-2 min-w-[60px]">
            <div className="text-white text-xs font-medium mb-2">
              {zoomLevel}%
            </div>
            
            <button
              onClick={handleZoomIn}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 group"
              title="Zoom In"
            >
              <svg className="w-4 h-4 text-white group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            
            <button
              onClick={handleZoomOut}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 group"
              title="Zoom Out"
            >
              <svg className="w-4 h-4 text-white group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
              </svg>
            </button>
            
            <button
              onClick={() => setZoomLevel(100)}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 group"
              title="Reset to Fit"
            >
              <svg className="w-4 h-4 text-white group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-3 max-w-full p-6 flex-wrap justify-center">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-3 py-2 rounded-full text-sm sm:text-base uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/50 text-white backdrop-blur-sm"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-3 py-2 rounded-full text-sm sm:text-base uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/50 text-white backdrop-blur-sm"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </div>
    </>
  );
};