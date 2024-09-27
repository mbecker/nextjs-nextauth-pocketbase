export default function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      xlinkTitle="hi"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      shapeRendering="geometricPrecision"
    >
      <title>Chevron Up</title>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
