"use client";

import { config } from "@/config/config";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart } from "lucide-react";

export function CoupleSpace() {
  const calculateDays = () => {
    const firstMeet = new Date(config.FIRST_MEET).getTime();
    const today = new Date().getTime();
    const diffTime = Math.abs(today - firstMeet);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="love-page relative">
      <div className="love-decoration" />
      <div className="container mx-auto max-w-6xl">
        <Card className="love-card mb-12">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              我们的爱情计时器
            </h2>
            <div className="days-counter text-7xl font-bold mb-3">
              {calculateDays()}
            </div>
            <div className="text-xl text-gray-600">天</div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <Card className="love-card p-8 text-center">
            <div className="avatar-container inline-block mb-6">
              <Avatar className="w-32 h-32">
                <AvatarImage 
                  src={config.COUPLE_AVATARS.partner1} 
                  alt={config.COUPLE_NAME_1}
                  className="object-cover"
                />
                <AvatarFallback className="bg-pink-100 text-2xl text-pink-500">
                  {config.COUPLE_NAME_1[0]}
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {config.COUPLE_NAME_1}
            </h3>
            <div className="flex justify-center gap-4">
              {Object.entries(config.SOCIAL_LINKS.partner1).map(([platform, link]) => (
                <a 
                  key={platform}
                  href={link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </Card>

          <div className="text-center">
            <Heart 
              className="mx-auto animate-heartbeat text-pink-500" 
              size={64}
              fill="currentColor"
            />
          </div>

          <Card className="love-card p-8 text-center">
            <div className="avatar-container inline-block mb-6">
              <Avatar className="w-32 h-32">
                <AvatarImage 
                  src={config.COUPLE_AVATARS.partner2} 
                  alt={config.COUPLE_NAME_2}
                  className="object-cover"
                />
                <AvatarFallback className="bg-pink-100 text-2xl text-pink-500">
                  {config.COUPLE_NAME_2[0]}
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {config.COUPLE_NAME_2}
            </h3>
            <div className="flex justify-center gap-4">
              {Object.entries(config.SOCIAL_LINKS.partner2).map(([platform, link]) => (
                <a 
                  key={platform}
                  href={link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 