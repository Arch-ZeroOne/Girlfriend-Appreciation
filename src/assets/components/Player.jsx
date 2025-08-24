import React from "react";
import Music from "../../music/music.mp3";
function Player() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div class="w-full max-w-sm p-4">
        <div class="relative overflow-hidden rounded-lg transition-all duration-300 group bg-background/20 hover:scale-[1.02] text-foreground backdrop-blur-[2px] p-6 bg-black hover:shadow-lg hover:shadow-primary/20">
          <div class="absolute inset-0 z-0 h-full w-full rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all pointer-events-none dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"></div>

          <div class="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-lg glass-effect"></div>

          <div class="relative z-10">
            <div class="flex items-start gap-2">
              <div class="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 -mt-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-zinc-500"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
                <div class="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl"></div>
              </div>

              <div class="flex-1">
                <div class="flex items-start justify-between gap-4">
                  <div class="space-y-1.5">
                    <p class="font-semibold leading-none tracking-tight text-foreground text-white">
                      Now Playing
                    </p>
                    <p class="text-sm text-muted-foreground/80 text-white">
                      No.1 Party Anthem - Artic Monkeys
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 text-foreground dark:text-white">
              <div class="space-y-2">
                <div
                  class="relative h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/50 dark:bg-zinc-800/50"
                  role="presentation"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-zinc-300/20 via-zinc-300/30 to-zinc-300/20 dark:from-white/5 dark:via-white/10 dark:to-white/5"></div>

                  <div class="absolute inset-y-0 left-0 flex bg-gradient-to-r from-black/50 via-black/50 to-black/50 dark:from-white/80 dark:via-white/80 dark:to-white/80 transition-all duration-200 ease-out progress-width">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/5 to-white/5"></div>
                  </div>
                </div>
                <div class="flex justify-between text-xs font-medium">
                  <span class="tabular-nums text-zinc-600 dark:text-zinc-400">
                    1:30
                  </span>
                  <span class="tabular-nums text-zinc-600 dark:text-zinc-400">
                    3:45
                  </span>
                </div>
              </div>

              <div class="mt-6 flex items-center justify-center gap-6">
                <button
                  class="relative inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:scale-105 duration-300 transition text-primary h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  aria-label="Previous track"
                >
                  <div class="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"></div>
                  <div class="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md glass-effect"></div>
                  <div class="pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-5"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </div>
                  <audio autoPlay src={Music} controls className="hidden" />
                </button>

                <button
                  class="relative inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:scale-105 duration-300 transition text-primary h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  aria-label="Pause"
                >
                  <div class="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"></div>
                  <div class="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md glass-effect"></div>
                  <div class="pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-5"
                    >
                      <rect width="4" height="16" x="6" y="4"></rect>
                      <rect width="4" height="16" x="14" y="4"></rect>
                    </svg>
                  </div>
                </button>

                <button
                  class="relative inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:scale-105 duration-300 transition text-primary h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  aria-label="Next track"
                >
                  <div class="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"></div>
                  <div class="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md glass-effect"></div>
                  <div class="pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-5"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="absolute inset-0 z-20 rounded-lg bg-gradient-to-r from-transparent dark:via-white/5 via-black/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
