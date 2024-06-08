import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function AboutPage() { 
  return (
    <>
      <section className="flex flex-col items-center content-center">
        <h2 className="font-extrabold text-3xl">Contact me</h2>
        <p className="font-thin text-lg m-2">info@dream-coding.com</p>
        <section className="w-48 flex flex-row justify-between ">
          <FaGithub size={ "3em" }/>
          <FaLinkedin  size={ "3em" }/>
          <FaYoutube  size={ "3em" }/>
        </section>
        <h2 className="font-extrabold text-3xl m-8"> Or Send me an email</h2>
        <div className="w-3/12 m-2 p-3 flext flex=col w-full bg-cyan-950 rounded-lg">
          <p className="font-medium text-white p-2">
            your Email
          </p>
          <input datatype="text" className="w-full"></input>
          <p className="font-medium text-white p-2">
            Subject
          </p>
          <input datatype="text" className="w-full"></input>
          <p className="font-medium text-white p-2">
            Message
          </p>
          <textarea className="w-full h-40"></textarea>
          <button className="w-full bg-amber-900 text-white" >submit</button>
        </div>
      </section>
    </>
  );
}