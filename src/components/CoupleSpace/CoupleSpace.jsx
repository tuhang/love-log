import React from 'react';
import { config } from '../../config/config';

const CoupleSpace = () => {
  const calculateDays = () => {
    const firstMeet = new Date(config.FIRST_MEET);
    const today = new Date();
    const diffTime = Math.abs(today - firstMeet);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen p-8 text-center text-white bg-gradient-love">
      <div className="mb-12">
        <h2 className="text-2xl font-bold">我们已经在一起</h2>
        <div className="my-4 text-6xl font-bold">{calculateDays()}</div>
        <div className="text-2xl">天</div>
      </div>
      
      <div className="flex justify-center items-center gap-8">
        <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-lg">
          <img 
            src={config.COUPLE_AVATARS.partner1} 
            alt={config.COUPLE_NAME_1}
            className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="text-xl font-bold">{config.COUPLE_NAME_1}</h3>
          <div className="mt-4">
            {Object.entries(config.SOCIAL_LINKS.partner1).map(([platform, link]) => (
              <a 
                key={platform} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-2 text-white hover:underline"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        <div className="text-5xl animate-pulse-slow">❤️</div>

        <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-lg">
          <img 
            src={config.COUPLE_AVATARS.partner2} 
            alt={config.COUPLE_NAME_2}
            className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="text-xl font-bold">{config.COUPLE_NAME_2}</h3>
          <div className="mt-4">
            {Object.entries(config.SOCIAL_LINKS.partner2).map(([platform, link]) => (
              <a 
                key={platform} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-2 text-white hover:underline"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleSpace; 