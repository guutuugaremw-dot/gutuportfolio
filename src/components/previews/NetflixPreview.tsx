import React, { useState } from 'react';
import { Play, Info, ArrowUpRight, Search, Volume2, VolumeX, Check, Plus } from 'lucide-react';

interface MovieItem {
  id: string;
  title: string;
  match: string;
  rating: string;
  duration: string;
  genre: string;
  color: string;
}

const MOVIES: MovieItem[] = [
  {
    id: 'm-1',
    title: 'Cyberpunk Syndicate: Neo Tokyo',
    match: '99% Match',
    rating: '18+',
    duration: '2h 18m',
    genre: 'Sci-Fi / Action',
    color: 'from-red-950 via-slate-900 to-black',
  },
  {
    id: 'm-2',
    title: 'Quantum Abyss',
    match: '97% Match',
    rating: '16+',
    duration: '1h 54m',
    genre: 'Psychological Thriller',
    color: 'from-blue-950 via-slate-900 to-black',
  },
  {
    id: 'm-3',
    title: 'The Silicon Valley Heist',
    match: '95% Match',
    rating: '13+',
    duration: '2h 05m',
    genre: 'Crime / Tech Doc',
    color: 'from-emerald-950 via-slate-900 to-black',
  },
  {
    id: 'm-4',
    title: 'Interstellar Velocity',
    match: '98% Match',
    rating: '16+',
    duration: '2h 30m',
    genre: 'Space Adventure',
    color: 'from-purple-950 via-slate-900 to-black',
  },
];

export const NetflixPreview: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieItem>(MOVIES[0]);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [inMyList, setInMyList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = searchQuery
    ? MOVIES.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.genre.toLowerCase().includes(searchQuery.toLowerCase()))
    : MOVIES;

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-black text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-sans select-none">
      {/* Top Netflix Streaming Header */}
      <div className="h-11 bg-black/90 backdrop-blur-md border-b border-zinc-900 px-3 sm:px-4 flex items-center justify-between gap-3 shrink-0 z-20">
        <div className="flex items-center gap-4">
          <span className="text-red-600 font-extrabold text-base sm:text-lg tracking-wider font-sans">
            NETFLIX
          </span>
          <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-300">
            <span className="text-white font-medium cursor-pointer">Home</span>
            <span className="hover:text-white cursor-pointer transition-colors">Series</span>
            <span className="hover:text-white cursor-pointer transition-colors">Films</span>
            <span className="hover:text-white cursor-pointer transition-colors">New & Popular</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Titles, genres..."
              className="w-28 sm:w-36 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded text-[11px] text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-red-600"
            />
          </div>

          <a
            href="https://netflixapp-virid.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
          >
            <span>Open Live App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Hero Billboard Banner */}
      <div className={`relative h-44 sm:h-52 bg-gradient-to-r ${selectedMovie.color} p-4 sm:p-5 flex flex-col justify-end overflow-hidden border-b border-zinc-800`}>
        {/* Subtle grid light effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

        <div className="relative z-20 max-w-lg">
          <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-semibold mb-1">
            <span className="text-red-500 font-bold uppercase tracking-wider">NETFLIX ORIGINAL</span>
            <span>·</span>
            <span className="text-emerald-400">{selectedMovie.match}</span>
            <span>·</span>
            <span className="px-1 border border-zinc-600 text-[9px] rounded">{selectedMovie.rating}</span>
            <span>·</span>
            <span>{selectedMovie.duration}</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
            {selectedMovie.title}
          </h3>

          <p className="text-xs text-zinc-300 line-clamp-2 mt-1 drop-shadow">
            In a neon-lit dystopian megacity, an outlaw hacker uncovers a dark neural conspiracy that threatens global consciousness.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => setIsPlayingPreview(true)}
              className="px-3.5 py-1.5 bg-white hover:bg-zinc-200 text-black rounded font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>Play Trailer</span>
            </button>

            <button
              onClick={() => setInMyList(!inMyList)}
              className="px-3 py-1.5 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded font-medium text-xs flex items-center gap-1.5 transition-colors border border-zinc-700"
            >
              {inMyList ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{inMyList ? 'In My List' : 'Add to List'}</span>
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 bg-black/60 hover:bg-black/90 text-zinc-300 rounded-full border border-zinc-700 transition-colors ml-auto"
              title="Toggle Audio"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Movie Row Gallery */}
      <div className="flex-1 bg-zinc-950 p-3 sm:p-4 overflow-y-auto">
        <div className="flex items-center justify-between text-xs text-zinc-300 font-semibold mb-2">
          <span>Trending on Netflix App</span>
          <span className="text-[10px] text-zinc-500 font-mono">Select any title to preview</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {filteredMovies.map(movie => {
            const isSelected = movie.id === selectedMovie.id;
            return (
              <div
                key={movie.id}
                onClick={() => setSelectedMovie(movie)}
                className={`group p-2.5 rounded-lg border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-zinc-900 border-red-600 shadow-lg shadow-red-950/40'
                    : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-600'
                }`}
              >
                <div className={`h-16 rounded bg-gradient-to-br ${movie.color} flex items-center justify-center p-2 mb-2 relative overflow-hidden`}>
                  <Play className="w-6 h-6 text-white/70 group-hover:scale-110 transition-transform" />
                  <span className="absolute bottom-1 right-1 text-[9px] font-mono text-zinc-400 bg-black/70 px-1 rounded">
                    {movie.duration}
                  </span>
                </div>
                <div className="text-xs font-bold text-white truncate">{movie.title}</div>
                <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-1">
                  <span className="text-emerald-400 font-semibold">{movie.match}</span>
                  <span>{movie.genre.split('/')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simulated Video Player Modal */}
      {isPlayingPreview && (
        <div className="absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 animate-in fade-in">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="text-xs font-bold text-red-500">
              NOW PLAYING: {selectedMovie.title}
            </span>
            <button
              onClick={() => setIsPlayingPreview(false)}
              className="text-xs text-zinc-400 hover:text-white px-2 py-1 bg-zinc-800 rounded"
            >
              Close Player
            </button>
          </div>

          <div className="my-auto text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center mx-auto animate-pulse">
              <Play className="w-8 h-8 fill-red-500 text-red-500 ml-1" />
            </div>
            <div className="text-sm font-semibold text-white">
              Streaming HD Video Stream
            </div>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Full movie playback and dynamic trailer engines are fully functional on the live Vercel web app.
            </p>
            <a
              href="https://netflixapp-virid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-bold text-xs transition-colors"
            >
              <span>Watch on Live Vercel App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center text-[10px] text-zinc-500 font-mono">
            PRESS CLOSE OR ESCAPE TO RETURN
          </div>
        </div>
      )}

      {/* Footer Info Strip */}
      <div className="h-7 bg-black border-t border-zinc-900 px-3 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
        <div>PRODUCTION VERCEL URL: netflixapp-virid.vercel.app</div>
        <div className="text-red-500 font-bold">STREAMING ACTIVE</div>
      </div>
    </div>
  );
};
