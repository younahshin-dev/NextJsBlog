'use client'

import { useRouter } from "next/navigation";

export default function ContactButton() { 
  const router = useRouter();
  return (
      <button className="py-1 px-2 font-semibold rounded-lg shadow-md text-black bg-amber-300 hover:bg-orange-700" onClick={() => { router.push('/contact'); }}>Contact Me</button>
  );
}