import JsIcon from "../assets/icons/js-icon";
import NextjsIcon from "../assets/icons/nextjs-icon";
import HtmlIcon from "../assets/icons/html-icon";
import CssIcon from "../assets/icons/css-icon";
import LaravelIcon from "../assets/icons/laravel-icon";
import PhpIcon from "../assets/icons/php-icon";
import NuxtIcon from "../assets/icons/nuxt-icon";
import TechItem from "./TechItem";
import TypescriptIcon from "../assets/icons/typescript-icon";
import ReactIcon from "../assets/icons/react-icon";
import VueIcon from "../assets/icons/vue-icon";
import NestjsIcon from "../assets/icons/nestjs-icon";
import TailwindIcon from "../assets/icons/tailwind-icon";
import ExpressjsIcon from "../assets/icons/expressjs-icon";
import JiraIcon from "../assets/icons/jira-icon";
import GitIcon from "../assets/icons/git-icon";

const Skills = () => {
  return (
    <section id="skills" className="mb-16 flex flex-col gap-8">
      <h2 className="p-4 mb-8 font-bold text-3xl text-center bg-neutral-50">TECH STACK</h2>
      <div className="works-section text-stone-200 flex flex-col flex-wrap gap-4 items-start w-1/2 m-auto">
        <div className="flex justify-start gap-4 items-center">
          <p className="text-neutral-900 font-semibold text-xl">Languages: </p>
          <TechItem Icon={JsIcon} name="Javascript" />
          <TechItem Icon={TypescriptIcon} name="Typescript" />
          <TechItem Icon={HtmlIcon} name="HTML" />
          <TechItem Icon={CssIcon} name="CSS" />
          <TechItem Icon={PhpIcon} name="PHP" />
        </div>
        <div className="flex justify-start gap-4">
          <p className="text-neutral-900 font-semibold text-xl">Frameworks: </p>
          <TechItem Icon={NextjsIcon} name="Next.js" />
          <TechItem Icon={NuxtIcon} name="Nuxt.js" />
          <TechItem Icon={NestjsIcon} name="Nest.js" />
          <TechItem Icon={ExpressjsIcon} name="Express.js" />
          <TechItem Icon={LaravelIcon} name="Laravel" />
        </div>
        <div className="flex justify-start gap-4">
          <p className="text-neutral-900 font-semibold text-xl">Libraries: </p>
          <TechItem Icon={ReactIcon} name="React" />
          <TechItem Icon={VueIcon} name="Vue.js" />
          <TechItem Icon={TailwindIcon} name="Tailwind CSS" />
        </div>
        <div className="flex justify-start gap-4">
          <p className="text-neutral-900 font-semibold text-xl">Tools & Others: </p>
          <TechItem Icon={GitIcon} name="Git" />
          <TechItem Icon={JiraIcon} name="Jira" />
          {/* <TechItem Icon={TailwindIcon} name="Tailwind CSS" /> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
