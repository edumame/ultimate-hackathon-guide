import { clsx } from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center gap-x-3")}>
      {/* MentorMates double-hexagon mark — wide aspect (~1.64:1), size by height only */}
      <img
        src="/mm-mark.png"
        alt="MentorMates"
        className="h-full w-auto dark:brightness-0 dark:invert"
      />
      <span className="text-xl/7 font-semibold tracking-tight whitespace-nowrap text-gray-950 dark:text-white">
        The Ultimate Hackathon Guide
      </span>
    </div>
  );
}
