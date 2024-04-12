'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { signIn } from 'next-auth/react';
import { Session } from 'next-auth';

export default function Header({ session }: { session: Session }) {
  return (
    <header className="border-b p-4 flex items-center justify-between flex-wrap">
      <Link href="/" className="font-bold text-red-700 text-3xl tracking-tight">
        Shopper<span className="text-blue-700">M</span>art
      </Link>
      <nav className="flex gap-4 *:rounded *:px-2 *:py-1 ">
        <button className="border border-blue-600 text-blue-600 inline-flex gap-1 items-center">
          <FontAwesomeIcon icon={faPlus} className="h-3" />
          <span>Post a Ad</span>
        </button>
        {session?.user && (
          <>
            <button className="border-r border-l text-gray-600">Sign-Up</button>
            <button
              onClick={() => signIn('google')}
              className="bg-blue-800 text-white border-0 px-6"
            >
              Login
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
