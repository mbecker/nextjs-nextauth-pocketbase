"use client";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  if (session === null) return null;
  return (
    <code className="max-w-screen-lg block whitespace-pre overflow-x-scroll text-xs font-mono bg-gray-200 p-2 rounded-sm">
      <pre>
        <pre>{JSON.stringify(session, undefined, 2)}</pre>
      </pre>
    </code>
  );
}
