interface PostFigurePlaceholderProps {
  alt: string;
}

export function PostFigurePlaceholder({ alt }: PostFigurePlaceholderProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-[linear-gradient(135deg,#111827,#1f2937_55%,#374151)] shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
      <div
        aria-label={alt}
        className="flex aspect-[16/9] items-center justify-center px-8 text-center"
        role="img"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-400">
            Image Placeholder
          </p>
          <p className="mt-4 font-serif text-xl leading-relaxed text-white md:text-2xl">{alt}</p>
        </div>
      </div>
      <figcaption className="border-t border-white/10 bg-black/20 px-6 py-4 text-sm text-zinc-200">
        {alt}
      </figcaption>
    </figure>
  );
}
