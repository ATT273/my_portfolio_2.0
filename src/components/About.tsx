import { Mail } from "lucide-react";
import Github from "../assets/icons/github";
import Linkedin from "../assets/icons/linkedin";
import PortraitImage from "../assets/images/portrait.png";
import SectionTitle from "./shared/SectionTitlte";

const About = () => {
  return (
    <section id="about" className="mb-16 flex flex-col gap-8">
      <SectionTitle title="ABOUT ME" />
      <div className="flex flex-1 justify-center gap-4">
        <div className="flex flex-col gap-4">
          <div className="p-4 text-lg max-w-187.5">
            <p className="text-2xl font-bold text-slate-100 mb-2">Summary</p>
            <div className="text-slate-300">
              <p>
                I'm Tran Anh Tuan, a frontend developer with 3 years of experience specializing in React.js, Next.js,
                Vue.js, and TypeScript.
              </p>
              <p>
                I focus on building scalable, user-centric web applications with clean, maintainable code. My background
                in Computer Science combined with hands-on experience has helped me deliver efficient solutions across
                various projects.
              </p>
              <p>
                As a collaborative team player, I thrive in environments where I can contribute ideas, support
                colleagues, and grow together with the team to achieve shared goals.
              </p>
            </div>
          </div>
          <div className="w-60 h-px bg-amber-600/50"></div>
          <div className="p-4 text-lg">
            <p className="text-2xl font-bold text-slate-100 mb-2">Contact Info</p>
            <div className="text-slate-300">
              <p>
                <b>Location: </b> Hanoi, Viet Nam
              </p>
              <p>
                <b>Email: </b>anhtuan273@gmail.com
              </p>
            </div>

            <br />
            <div className="flex flex-1 items-center">
              <a href="mailto:anhtuan273@gmail.com" target="_blank" className="mr-3 group" title="GMail">
                <Mail className="text-amber-800 size-8 group-hover:text-amber-500" />
              </a>
              <a href="https://github.com/ATT273" target="_blank" className="mr-3 group" title="GitHub">
                <Github className="text-amber-800 size-8 group-hover:text-amber-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/tuan-tran-7b565b198/"
                target="_blank"
                className="mr-3 group"
                title="LinkedIn"
              >
                <Linkedin className="text-amber-800 size-8 group-hover:text-amber-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <img className="size-64 rounded-full object-cover" src={PortraitImage} alt="tuan_tran_portrait" />
        </div>
      </div>
    </section>
  );
};

export default About;
