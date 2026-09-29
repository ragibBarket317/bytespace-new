// Figma design px -> CSS. `--u` যে ancestor এ define করা আছে সেখান থেকে scale নেয় (hero: viewport অনুযায়ী,
// DesignStage: 1px)। কোথাও define না থাকলে 1px fallback — তাই card গুলো যেকোনো জায়গায় বসানো যায়।
export const u = (px: number) => `calc(${px} * var(--u, 1px))`;

// Stage এর ভিতরে top-left anchor করা position (design px)
export const place = ([x, y, w, h]: readonly [number, number, number, number]) => ({
  left: u(x),
  top: u(y),
  width: u(w),
  height: u(h),
});
