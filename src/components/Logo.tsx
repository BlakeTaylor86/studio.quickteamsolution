export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt="Quick Team Studios"
      className={`pixelated rounded-full bg-black ${className}`}
    />
  );
}
