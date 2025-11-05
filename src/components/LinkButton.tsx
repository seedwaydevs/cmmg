import Link from "next/link";

type ColorKeys = "red" | "blue" | "orange";

type LinkButtonProps = {
  text: string;
  svg?: string;
  url?: string;
  color?: ColorKeys; // optional, defaults to blue
};

export default function LinkButton({
  text,
  url,
  color = "orange",
  svg,
}: LinkButtonProps) {
  const colorMap: Record<
    ColorKeys,
    {
      from: string;
      to: string;
      hoverFrom: string;
      hoverTo: string;
      shadow: string;
      border: string;
    }
  > = {
    red: {
      from: "from-red-600",
      to: "to-red-700",
      hoverFrom: "hover:from-red-500",
      hoverTo: "hover:to-red-600",
      shadow: "shadow-red-500/25",
      border: "border-red-400/20",
    },
    blue: {
      from: "from-blue-600",
      to: "to-blue-700",
      hoverFrom: "hover:from-blue-500",
      hoverTo: "hover:to-blue-600",
      shadow: "shadow-blue-500/25",
      border: "border-blue-400/20",
    },
    orange: {
      from: "from-orange-600",
      to: "to-orange-700",
      hoverFrom: "hover:from-orange-500",
      hoverTo: "hover:to-orange-600",
      shadow: "shadow-orange-500/25",
      border: "border-orange-400/20",
    },
  };

  const selectedColor = colorMap[color] || colorMap.blue;

  return (
    <Link
      href={url || ""}
      className={`group relative inline-flex items-center justify-center gap-2 
                  bg-gradient-to-r ${selectedColor.from} ${selectedColor.to} 
                  ${selectedColor.hoverFrom} ${selectedColor.hoverTo}
                  text-white font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-md
                  transition-all duration-300 shadow-xl ${selectedColor.shadow}
                  transform hover:-translate-y-0.5 border ${selectedColor.border} 
                  text-sm lg:text-base`}
    >
      <span>{text}</span>
      {/* d="M9 5l7 7-7 7" */}
      {svg && (
        <svg
          className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={svg}
          />
        </svg>
      )}
    </Link>
  );
}
