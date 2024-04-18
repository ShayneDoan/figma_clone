"use client";

import { useThreads } from "@/liveblocks.config";
import { Composer, Thread } from "@liveblocks/react-comments";

export function CommentsOverlay() {
  const { threads } = useThreads();

  console.log(threads);

  return (
    <div>
      {threads.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
    </div>
  );
}