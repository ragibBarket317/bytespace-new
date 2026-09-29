export const studentAvatars = Array.from(
  { length: 7 },
  (_, i) => `/images/home/avatars/student-${i + 1}.png`,
);

export const logos = [1, 2, 3, 4, 5].map((n) => ({
  src: `/images/home/logos/logo-${n}.png`,
  alt: "Logoipsum",
}));

export const learningProgress = 55;
