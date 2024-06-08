
import Image from "next/image";
import {Open_Sans, Nanum_Gothic } from "next/font/google";
import "../../app/globals.css";
import ContactButton from "@/components/ContactButton";
import Profile from "@/components/Profile";
const gothic = Nanum_Gothic({subsets:['latin'], weight:'700'});

const sans = Open_Sans({ subsets: ['latin'] , weight: '700'});

export default function AboutPage() { 
  return (
    <>
      <Profile/>
      <div className="flex flex-col items-center py-2 px-2 m-10 bg-gray-200  rounded-xl shadow-xl">
        <h2 className="text-3xl mt-5 font-extrabold dark:text-white">Who am I?</h2>
        <p className="font-thin m-1">개발을 사랑하는 풀스택 개발자</p>
        <p className="font-thin m-1">사람과 디자인을 담는 웹앱을 만들고 있음</p>
        
        <h2 className="text-3xl mt-5 font-extrabold dark:text-white">Carrer</h2>
        <p className="font-thin m-1">구글러 (-Now)</p>
        <p className="font-thin m-1">메이스북 (-2019)</p>
        <p className="font-thin m-1">삼준전자 (-2015)</p>

        <h2 className="text-3xl mt-5 font-extrabold dark:text-white">Skills</h2>
        <p className="font-thin m-1">React, Vue, Node</p>
        <p className="font-thin m-1">Git, Clean Code</p>
        <p className="font-thin m-1">VS Code, IntelliJ, MongoDB</p>
      </div>
    </>
  );
}