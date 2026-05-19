type SparkleProps = {
  className?: string;
  size?: number;
};

export function Sparkle({ className = "", size = 16 }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}
