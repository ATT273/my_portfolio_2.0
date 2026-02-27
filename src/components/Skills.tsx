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
import SectionTitle from "./shared/SectionTitlte";
import TechStackList from "./shared/TechStackList";
import NodeIcon from "../assets/icons/node-icon";

const Skills = () => {
  return (
    <section id="skills" className="mb-16 flex flex-col gap-8">
      <SectionTitle title="TECH STACK" />
      <div className="works-section text-stone-200 flex flex-col flex-wrap gap-4 items-start w-262 m-auto">
        <TechStackList title="Front-end: ">
          <TechItem Icon={ReactIcon} name="React" />
          <TechItem Icon={NextjsIcon} name="Next.js" />
          <TechItem Icon={VueIcon} name="Vue.js" />
          <TechItem Icon={NuxtIcon} name="Nuxt.js" />
          <TechItem Icon={TypescriptIcon} name="Typescript" />
          <TechItem Icon={JsIcon} name="Javascript" />
          <TechItem Icon={HtmlIcon} name="HTML" />
          <TechItem Icon={CssIcon} name="CSS" />
        </TechStackList>
        <TechStackList title="Back-end: ">
          <TechItem Icon={NodeIcon} name="Node.js" />
          <TechItem Icon={NestjsIcon} name="Nest.js" />
          <TechItem Icon={ExpressjsIcon} name="Express.js" />
          <TechItem Icon={PhpIcon} name="PHP" />
          <TechItem Icon={LaravelIcon} name="Laravel" />
        </TechStackList>
        <TechStackList title="Tools & Others: ">
          <TechItem Icon={GitIcon} name="Git" />
          <TechItem Icon={JiraIcon} name="Jira" />
          <TechItem Icon={TailwindIcon} name="Tailwind CSS" />
        </TechStackList>
      </div>
    </section>
  );
};

export default Skills;
