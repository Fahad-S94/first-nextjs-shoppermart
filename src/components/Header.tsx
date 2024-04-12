'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { signIn } from 'next-auth/react';
import { Session } from 'next-auth';
import Image from 'next/image';

export default function Header({ session }: { session: Session }) {
  return (
    <header className="border-b p-4 flex items-center justify-between flex-wrap">
      <Link href="/" className="font-bold text-red-700 text-3xl tracking-tight">
        Shopper<span className="text-blue-700">M</span>art
      </Link>
      <nav className="flex gap-4 *:rounded *:px-2 ">
        <Link
          href="/newAdForm"
          className="border border-blue-600 text-blue-600 inline-flex gap-1 items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="h-3" />
          <span>Post a Ad</span>
        </Link>
        <span className="border-r"></span>
        {!session?.user && (
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
        {session?.user && (
          <>
            <Link href={'/account'}>
              <Image
                src={session.user.image as string}
                alt={'avatar'}
                width={80}
                height={52}
                className="rounded-md "
              />
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
