import Image from "next/image";
import ContactButton from "./ContactButton";

export default function Profile() { 
  return (
    <section className="flex flex-col items-center font-sans font-bold">
        <Image src={`/images/profile.png`} alt="profile image" width={200} height={200} className="m-5 rounded-full "/>
        <h2 className="text-3xl font-extrabold dark:text-white">Hi, I'm Roaving</h2>
        <h3 className="text-2xl font-thin dark:text-white">Full-stack engineer</h3>
        <p className="font-thin m-1">코딩은 언제 쉬워지는가</p>
        <ContactButton />
    </section>
  );
}