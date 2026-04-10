import { clsx } from 'clsx';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export default function Logo({ className, size = 'md', variant = 'light' }: LogoProps) {
  const primaryColor = variant === 'light' ? '#FFFFFF' : '#0A1628';
  const sizes = {
    sm: { width: 160, height: 40 },
    md: { width: 220, height: 52 },
    lg: { width: 300, height: 72 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      viewBox="0 0 300 72"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('shrink-0', className)}
      aria-label="Leak Detection Ballantyne logo"
      role="img"
    >
      {/* Water droplet with sonar waves integrated into the design */}
      <g transform="translate(8, 8)">
        {/* Sonar rings */}
        <circle
          cx="24"
          cy="28"
          r="18"
          stroke="#00B4D8"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
        />
        <circle
          cx="24"
          cy="28"
          r="24"
          stroke="#00B4D8"
          strokeWidth="0.75"
          strokeOpacity="0.12"
          fill="none"
        />
        <circle
          cx="24"
          cy="28"
          r="30"
          stroke="#00B4D8"
          strokeWidth="0.5"
          strokeOpacity="0.06"
          fill="none"
        />

        {/* Water droplet */}
        <path
          d="M24 8C24 8 12 22 12 30C12 36.627 17.373 42 24 42C30.627 42 36 36.627 36 30C36 22 24 8 24 8Z"
          fill="url(#dropletGradient)"
        />

        {/* Droplet highlight */}
        <ellipse
          cx="20"
          cy="26"
          rx="3"
          ry="4.5"
          fill="white"
          fillOpacity="0.2"
          transform="rotate(-15 20 26)"
        />
      </g>

      {/* LEAK DETECTION text */}
      <text
        x="68"
        y="30"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight="800"
        fontSize="20"
        letterSpacing="3"
        fill={primaryColor}
      >
        LEAK DETECTION
      </text>

      {/* BALLANTYNE text */}
      <text
        x="68"
        y="52"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight="700"
        fontSize="18"
        letterSpacing="5"
        fill="#00B4D8"
      >
        BALLANTYNE
      </text>

      {/* Gradient definitions */}
      <defs>
        <linearGradient
          id="dropletGradient"
          x1="24"
          y1="8"
          x2="24"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#48CAE4" />
          <stop offset="100%" stopColor="#00B4D8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
