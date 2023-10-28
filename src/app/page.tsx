"use client";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <div className="p-8">
      <h1>Hi {session.data?.user?.name}</h1>
      <button
        className="mt-3 p-2 px-4 border rounded-md hover:bg-gray-100"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
