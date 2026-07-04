import { useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: "v1",
    title: "What is Cloud Computing?",
    service: "Cloud Services",
    thumb: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=640&h=360&fit=crop&auto=format",
    youtubeId: "M988_fsOSWo",
    color: "#1e88e5",
    duration: "5:12",
  },
  {
    id: "v2",
    title: "Cybersecurity for Businesses",
    service: "Cybersecurity",
    thumb: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=640&h=360&fit=crop&auto=format",
    youtubeId: "inWWhr5tnEA",
    color: "#0a7c59",
    duration: "7:34",
  },
  {
    id: "v3",
    title: "Enterprise Networking Explained",
    service: "Networking Solutions",
    thumb: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=640&h=360&fit=crop&auto=format",
    youtubeId: "3uhA8bdz8gI",
    color: "#c05621",
    duration: "6:50",
  },
  {
    id: "v4",
    title: "AI Automation in IT Operations",
    service: "AI & Automation",
    thumb: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=640&h=360&fit=crop&auto=format",
    youtubeId: "ad79nYk2keg",
    color: "#7c3aed",
    duration: "8:15",
  },
  {
    id: "v5",
    title: "How IT Support & AMC Works",
    service: "IT Support & AMC",
    thumb: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=640&h=360&fit=crop&auto=format",
    youtubeId: "dQw4w9WgXcQ",
    color: "#0a2463",
    duration: "4:45",
  },
  {
    id: "v6",
    title: "Hybrid Email Solutions Overview",
    service: "Mail Solution",
    thumb: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&h=360&fit=crop&auto=format",
    youtubeId: "ZghMPWGXexs",
    color: "#b91c1c",
    duration: "5:58",
  },
];

export function VideoSection() {
  const [active, setActive] = useState<string | null>(null);
  const activeVideo = videos.find((v) => v.id === active);

  return (
    <section id="videos" className="py-12 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-[#1e88e5] text-xs tracking-widest font-['Inter'] font-semibold uppercase">
            Learn More
          </span>
          <h2
            className="text-[#0a2463] mt-1 font-['Rajdhani']"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700 }}
          >
            Services in Action
          </h2>
          <p className="text-[#4a6080] text-xs mt-2 max-w-lg mx-auto leading-relaxed font-['Inter']">
            Watch short explainer videos to understand how each of our services can help your business.
          </p>
          <div className="mt-3 flex justify-center">
            <span className="w-12 h-0.5 bg-[#1e88e5] rounded-full block" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden border border-[#dce4ef] hover:shadow-md transition-all duration-300 group cursor-pointer"
              onClick={() => setActive(video.id)}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0a2463]/40 group-hover:bg-[#0a2463]/30 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Play size={18} className="text-[#0a2463] ml-0.5" fill="#0a2463" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-['Inter']">
                  {video.duration}
                </div>
                {/* Service tag */}
                <div
                  className="absolute top-2 left-2 text-white text-[10px] px-2 py-0.5 rounded-full font-['Inter'] font-semibold"
                  style={{ backgroundColor: video.color }}
                >
                  {video.service}
                </div>
              </div>
              {/* Info */}
              <div className="p-3">
                <h3
                  className="text-[#0a2463] font-['Rajdhani'] font-semibold leading-tight"
                  style={{ fontSize: "0.9rem" }}
                >
                  {video.title}
                </h3>
                <p className="text-[#1e88e5] text-[11px] mt-1 font-['Inter'] flex items-center gap-1">
                  <Play size={9} fill="#1e88e5" /> Watch video
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {active && activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white hover:text-blue-300 transition-colors flex items-center gap-1.5 text-sm font-['Inter']"
            >
              <X size={18} /> Close
            </button>
            {/* Title */}
            <div className="mb-3">
              <span
                className="text-white text-[10px] px-2 py-0.5 rounded-full font-semibold font-['Inter']"
                style={{ backgroundColor: activeVideo.color }}
              >
                {activeVideo.service}
              </span>
              <h3 className="text-white font-['Rajdhani'] font-bold text-lg mt-1">
                {activeVideo.title}
              </h3>
            </div>
            {/* Video iframe */}
            <div className="rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
