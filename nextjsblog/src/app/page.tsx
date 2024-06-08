import Profile from "@/components/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Profile />
      <main>
        <article>
          <h2>Featured Posts</h2>
          <p></p>
        </article>

        <article>
          <h2>You may like</h2>
          <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
        </article>
      </main>
    </>
  );
}
