import Link from "next/link";

type LinkButtonProps = {
  text: string;
  url: string;
  color: string;
};

export default function LinkButton({ text, url, color }: LinkButtonProps) {
  return (
    <Link
      href={url}
      className={`group relative inline-flex items-center justify-center gap-2 
                             bg-gradient-to-r from-${color}-600 to-${color}-700 hover:from-${color}-500 hover:to-${color}-600 
                             text-white font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-md transition-all duration-300 
                             shadow-xl hover:shadow-${color}-500/25 transform hover:-translate-y-0.5 
                             border border-${color}-400/20 text-sm lg:text-base`}
    >
      <span>{text}</span>
    </Link>
  );
}
