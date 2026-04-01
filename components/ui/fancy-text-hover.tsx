import { cn } from "@/lib/utils";

interface FancyLinkItem {
  label: string;
  href: string;
}

interface FancyTextHoverProps {
  links?: FancyLinkItem[];
  className?: string;
}

function splitIntoLetters(text: string): React.ReactNode[] {
  return text.split("").map((char, i) => (
    <span key={i} className="fancy-letter">
      {char}
    </span>
  ));
}

export default function FancyTextHover({ links = [], className }: FancyTextHoverProps) {
  return (
    <div className={cn("flex w-full flex-col items-center justify-center gap-4 py-2", className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="fancy-word text-zinc-600 hover:text-white text-5xl md:text-7xl font-heading font-black uppercase no-underline transition-colors duration-250 ease-[cubic-bezier(0.76,0,0.24,1)] tracking-tighter"
        >
          {splitIntoLetters(link.label)}
        </a>
      ))}
    </div>
  );
}