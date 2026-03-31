import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { HomeIcon, CompassIcon } from "lucide-react";

export function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      {/* Ambient grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px 60px),
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px 60px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, white, transparent)",
        }}
      />

      {/* Centre radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

      <Empty className="border-none max-w-2xl">
        <EmptyHeader>
          <EmptyTitle
            className="font-heading font-extrabold text-[clamp(6rem,20vw,10rem)] leading-none tracking-tighter text-white"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, white 20%, transparent 80%)",
              maskImage:
                "linear-gradient(to bottom, white 20%, transparent 80%)",
            }}
          >
            404
          </EmptyTitle>
          <EmptyDescription className="-mt-8 text-nowrap text-zinc-400 text-base font-medium">
            The page you&apos;re looking for might have been <br />
            moved or doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent>
          <div className="flex gap-3">
             <Button
               asChild
               className="bg-white text-black hover:bg-zinc-100 font-bold text-sm uppercase tracking-widest px-6 h-11 rounded-full"
             >
               <Link href="/">
                 <HomeIcon className="size-4 mr-2" />
                 Go Home
               </Link>
             </Button>

             <Button
               asChild
               variant="outline"
               className="border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-white font-bold text-sm uppercase tracking-widest px-6 h-11 rounded-full"
             >
               <Link href="/services">
                 <CompassIcon className="size-4 mr-2" />
                 Explore
               </Link>
             </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
