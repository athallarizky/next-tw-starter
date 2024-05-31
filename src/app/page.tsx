import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-5">
      <Image src="/next.svg" alt="next-logo" width="250" height="25" />
      <div className="mt-2">Next.js + App Route + Tailwind</div>
    </main>
  );
}
