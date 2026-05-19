import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";

export function ReminderCard() {
  return (
    <aside
      className="w-[280px] shrink-0 rounded-2xl bg-white p-3 shadow-2xl xl:w-[300px]"
      aria-label="Upcoming class reminder"
    >
      <div className="relative mb-3 overflow-hidden rounded-xl">
        <Image
          src={images.reminder}
          alt="Gym workout reminder"
          width={280}
          height={140}
          className="h-[120px] w-full object-cover"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Reminder
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 px-1 pb-1">
        <div>
          <p className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold uppercase tracking-wide text-black">
            Armour
          </p>
          <p className="text-xs text-gray-500">Tomorrow | 5.00 PM</p>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neon text-black transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2"
          aria-label="View reminder details"
        >
          <ArrowUpRight className="h-4 w-4 stroke-[2.5]" aria-hidden />
        </button>
      </div>
    </aside>
  );
}
