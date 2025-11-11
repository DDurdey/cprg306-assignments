"use client";

import Link from 'next/link';
import { useUserAuth } from './contexts/AuthContext';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


  return (
    <main className="min-h-screen bg-[#0a001f] text-white flex flex-col items-center py-10">

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-cyan-400">
          CPRG 306: Web Development 2 - Assignments
        </h1>
      </header>

      {!user && (
        <button
          onClick={gitHubSignIn}
          className="px-6 py-3 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition text-lg"
        >Sign in with GitHub
        </button>
      )}

      {user && (
        <div className="text-center space-y-6">
          <p className="text-xl">
            Welcome, <span className="text-cyan-300">{user.displayName}</span>
          </p>

          <nav>
            <p><Link href="/week-2">Week 2</Link></p>
            <p><Link href="/week-3">Week 3</Link></p>
            <p><Link href="/week-4">Week 4</Link></p>
            <p><Link href="/week-5">Week 5</Link></p>
            <p><Link href="/week-6">Week 6</Link></p>
            <p><Link href="/week-7">Week 7</Link></p>
            <p><Link href="/week-8">Week 8</Link></p>
            <p><Link href="/week-9/shopping-list">Week 9</Link></p>
            <p><Link href="/week-10">Week 10</Link></p>
            <p><Link href="/week-11">Week 11</Link></p>
          </nav>

          <button
            onClick={firebaseSignOut}
            className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-500 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </main>
  );
}