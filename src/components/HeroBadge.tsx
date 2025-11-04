export default function HeroBadge({
  content,
  position,
  color,
}: {
  content: string;
  position?: string;
  color: string;
}) {
  return (
    <div
      className={`flex  ${
        position === "bottom"
          ? "justify-start"
          : "justify-end mt-20 sm:mt-24 xl:mt-24"
      }`}
    >
      <div
        className={`backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-${color}-400/20`}
      >
        <p
          className={`text-[14px] uppercase font-bold tracking-widest text-neutral-100`}
        >
          [ {content} ]
        </p>
      </div>
    </div>
  );
}
