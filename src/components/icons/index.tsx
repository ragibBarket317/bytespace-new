export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 172 34"
      className={className}
      fill="none"
      role="img"
      aria-label="ByteSpace"
    >
      <path
        d="M2 6.5C2 3.5 4.2 1.5 7 1.5s5 2 5 5V10c1.6-1.2 3.6-1.9 5.8-1.9 5.6 0 10.2 4.6 10.2 10.3S23.4 28.7 17.8 28.700c-3 0-5.7-1.3-7.6-3.4-.7 1.9-2.4 3.1-4.5 3.100C3.5 28.4 2 26.7 2 24.500V6.500Z"
        fill="var(--color-accent)"
      />
      <path d="M15 14.500v8.200l6.6-4.100L15 14.500Z" fill="var(--color-primary)" />
      <text
        x="38"
        y="26"
        fill="currentColor"
        fontSize="25"
        fontWeight="800"
        fontFamily="var(--font-poppins), sans-serif"
        letterSpacing="-0.5"
      >
        ByteSpace
      </text>
    </svg>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.9-4.9" />
    </svg>
  );
}

export function BagIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 22"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M2 6.500h16l-.900 13a1.5 1.5 0 0 1-1.5 1.400H4.400a1.5 1.5 0 0 1-1.5-1.400L2 6.500Z" />
      <path d="M6.5 9V5a3.5 3.5 0 0 1 7 0v4" />
    </svg>
  );
}

export function StarIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="currentColor"
      aria-hidden
    >
      <path d="m12 2.5 2.9 6.2 6.6.8-4.9 4.6 1.3 6.700L12 17.500l-5.9 3.3 1.3-6.700L2.5 9.500l6.6-.8L12 2.500Z" />
    </svg>
  );
}

export function LevelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" className={className} fill="currentColor" aria-hidden>
      <rect x="1" y="7" width="2.5" height="6" rx="1" />
      <rect x="5.8" y="4" width="2.5" height="9" rx="1" />
      <rect x="10.5" y="1" width="2.5" height="12" rx="1" />
    </svg>
  );
}

export function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden>
      <rect x="4" y="3" width="20" height="22" rx="2" fill="currentColor" />
      <g fill="var(--color-accent)">
        <rect x="8" y="7" width="3.5" height="3" />
        <rect x="12.5" y="7" width="3.5" height="3" />
        <rect x="17" y="7" width="3" height="3" />
        <rect x="8" y="12" width="3.5" height="3" />
        <rect x="12.5" y="12" width="3.5" height="3" />
        <rect x="17" y="12" width="3" height="3" />
        <rect x="8" y="17" width="3.5" height="3" />
        <rect x="12.5" y="17" width="3.5" height="3" />
        <rect x="17" y="17" width="3" height="3" />
      </g>
    </svg>
  );
}

export function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 22" className={className} aria-hidden>
      <circle cx="11" cy="11" r="11" fill="var(--color-primary)" />
      <path
        d="m6.2 11.3 3.2 3.1 6.4-6.6"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
