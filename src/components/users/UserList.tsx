import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, ShoppingBag, Share2, ShoppingCart, Percent, Layout } from 'lucide-react';
import UserCard from './UserCard';
import ScrollContainer from '../common/ScrollContainer';
import { users } from '../../data/users';

export default function UserList() {
  // Touch event handler'ı ekle
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const banners = [
    {
      title: 'Reels',
      to: '/reels',
      icon: <div className="grid grid-cols-2 gap-2">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
          <Heart className="w-4 h-4 text-white" />
        </div>
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
          <ShoppingBag className="w-4 h-4 text-white" />
        </div>
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
          <Share2 className="w-4 h-4 text-white" />
        </div>
      </div>,
      gradient: 'from-blue-500 to-purple-500',
      borderColor: 'border-blue-400/20',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
    },
    {
      title: 'Reels 2',
      to: '/reels-2',
      icon: <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
        <Layout className="w-8 h-8 text-white" />
      </div>,
      gradient: 'from-pink-500 to-rose-500',
      borderColor: 'border-pink-400/20',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400'
    },
    {
      title: 'Markalar',
      to: '/brands',
      icon: <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
        <ShoppingCart className="w-8 h-8 text-white" />
      </div>,
      gradient: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-400/20',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400'
    },
    {
      title: 'Endirimler',
      to: '/discounts',
      icon: <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
        <Percent className="w-8 h-8 text-white" />
      </div>,
      gradient: 'from-red-500 to-orange-500',
      borderColor: 'border-red-400/20',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400'
    }
  ];

  return (
    <div className="relative" onTouchStart={handleTouchStart}>
      <ScrollContainer className="flex gap-2 pb-1">
        {/* Special Banners */}
        {banners.map((banner) => (
          <Link 
            key={banner.title}
            to={banner.to}
            className="block min-w-[100px] group"
            onTouchStart={handleTouchStart}
          >
            <div className={`bg-gradient-to-br ${banner.gradient} rounded-xl shadow-sm border ${banner.borderColor} p-2 h-full`}>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img 
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/20 backdrop-blur-sm p-2 rounded-xl">
                    {banner.icon}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-1.5">
                <span className="text-xs font-medium text-white">{banner.title}</span>
              </div>
            </div>
          </Link>
        ))}

        {/* User Cards */}
        {users.map(user => (
          <UserCard
            key={user.id}
            username={user.username}
            avatar={user.avatar}
            isVerified={user.isVerified}
          />
        ))}
      </ScrollContainer>
    </div>
  );
}