interface SocialLinks {
  [key: string]: string;
}

interface CoupleConfig {
  COUPLE_NAME_1: string;
  COUPLE_NAME_2: string;
  FIRST_MEET: string;
  COUPLE_AVATARS: {
    partner1: string;
    partner2: string;
  };
  SOCIAL_LINKS: {
    partner1: SocialLinks;
    partner2: SocialLinks;
  };
}

export const config: CoupleConfig = {
  COUPLE_NAME_1: "小明",
  COUPLE_NAME_2: "小红",
  FIRST_MEET: "2024-01-01",
  COUPLE_AVATARS: {
    partner1: "/avatars/partner1.jpg",
    partner2: "/avatars/partner2.jpg"
  },
  SOCIAL_LINKS: {
    partner1: {
      weibo: "https://weibo.com/partner1",
      instagram: "https://instagram.com/partner1"
    },
    partner2: {
      weibo: "https://weibo.com/partner2",
      instagram: "https://instagram.com/partner2"
    }
  }
}; 