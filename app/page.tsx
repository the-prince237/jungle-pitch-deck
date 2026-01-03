import { PitchDeck } from "@/presentation/components";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full">
        <PitchDeck />
      </main>
    </div>
  );
}
