import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const API_ENDPOINT = 'https://66c4cb0fb026f3cc6cf0b1b4.mockapi.io/';

export default function Home() {
  return (
    <main className="">
      <nav>
        <ul>
          <li>
            <Link href="/async-fetch">Async Fetch</Link>
          </li>
          <li>
            <Link href="/sync-fetch">Sync Fetch</Link>
          </li>
          <li>
            <Link href="/axios-async-fetch">Axios Async Fetch</Link>
          </li>
          <li>
            <Link href="/axios-sync-fetch">Axios Sync Fetch</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
