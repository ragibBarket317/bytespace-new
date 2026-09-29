import type { Course } from "@/types";

// "Happy Students" card এর avatar stack (hero + creator section) — Figma এর ৭টা ছবি
export const studentAvatars = Array.from(
  { length: 7 },
  (_, i) => `/images/home/avatars/student-${i + 1}.png`,
);

export const logos = [1, 2, 3, 4, 5].map((n) => ({
  src: `/images/home/logos/logo-${n}.png`,
  alt: "Logoipsum",
}));

// Pill গুলো Figma অনুযায়ী ৩ row এ ভাগ করা
export const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const base = {
  author: "purepearl studio",
  price: 25,
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
};
const titles = [
  ["Learn Figma from Basic", "UI/UX Design"],
  ["Build Digital Asset", "Graphic Design"],
  ["the Power of Big Data", "Data Science"],
  ["Balancing Productivity and Wellbeing", "Productivity"],
  ["Mastering Money Management", "Business"],
  ["From Idea to Startup Success", "Business"],
];
export const courses: Course[] = titles.map(([title, category], i) => ({
  ...base,
  id: `course-${i + 1}`,
  title,
  category,
  image: `/images/home/courses/course-${i + 1}.png`,
}));

export const learningPaths = [
  { label: "Design", icon: "/images/home/paths/design.png" },
  { label: "Development", icon: "/images/home/paths/development.png" },
  { label: "IT & Software", icon: "/images/home/paths/it-software.png" },
  { label: "Business", icon: null }, // icon PNG দেওয়া হয়নি — BuildingIcon ব্যবহার হচ্ছে
  { label: "Marketing", icon: "/images/home/paths/marketing.png" },
  { label: "Photography", icon: "/images/home/paths/photography.png" },
];

export const learningProgress = 55;

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/home/avatars/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/home/avatars/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/home/avatars/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];
