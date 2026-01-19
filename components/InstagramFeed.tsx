import React from 'react';
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';
import { SocialPost } from '../types';

const REEL_URL = "https://www.instagram.com/reel/DTp8zRHAbDr/?igsh=YnAwcW9vMmRvM2hr";

const POSTS: SocialPost[] = [
  {
    id: 1,
    thumbnailUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    caption: 'Featured: Watch our latest transformation reel! 😁 #OUDental #Reels',
    likes: 482,
    type: 'video'
  },
  {
    id: 2,
    thumbnailUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop',
    caption: 'Meet our amazing hygienist team! 👋 #DreamTeam #DentalLife',
    likes: 189,
    type: 'image'
  },
  {
    id: 3,
    thumbnailUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    caption: 'Did you know flossing extends your life expectancy? 🦷 #HealthFacts',
    likes: 542,
    type: 'video'
  },
  {
    id: 4,
    thumbnailUrl: 'https://images.unsplash.com/photo-1629909615184-74f495363b63?q=80&w=800&auto=format&fit=crop',
    caption: 'A peek into our state-of-the-art sterilization lab. Safety first! 🛡️',
    likes: 320,
    type: 'video'
  }
];

const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="p-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full mb-4 shadow-lg">
            <Instagram className="text-white w-8 h-8" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-brand-dark mb-2">Follow Us @o.udentalclinic</h2>
          <p className="text-gray-500 mb-6">See our latest transformations and educational reels.</p>
          <a 
            href={REEL_URL} 
            target="_blank" 
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-brand-maroon text-white px-6 py-3 rounded-full font-bold hover:bg-brand-gold transition-all duration-300 shadow-xl"
          >
            <Play size={18} fill="currentColor" /> Watch Newest Reel
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTS.map((post) => (
            <a 
              key={post.id} 
              href={REEL_URL}
              target="_blank"
              rel="noreferrer"
              className="relative group overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer shadow-md hover:shadow-2xl transition-all"
            >
              <img 
                src={post.thumbnailUrl} 
                alt={post.caption} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                {post.type === 'video' && (
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/40 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                )}
                <div className="flex space-x-6 font-bold">
                  <span className="flex items-center gap-2"><Heart className="w-5 h-5 fill-white" /> {post.likes}</span>
                  <span className="flex items-center gap-2"><MessageCircle className="w-5 h-5 fill-white" /> 12</span>
                </div>
                <p className="mt-4 text-center text-sm line-clamp-3 font-medium opacity-90 leading-relaxed">{post.caption}</p>
              </div>

              {/* Static Video Indicator */}
              {post.type === 'video' && (
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;