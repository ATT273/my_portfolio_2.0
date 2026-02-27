import SectionTitle from "./shared/SectionTitlte";
import ExperienceItem from "./shared/ExperienceItem";

const Experience = () => {
  return (
    <section id="exp" className="flex flex-col gap-8 mb-16">
      <SectionTitle title="EDUCATION & EXPERIENCE" />
      <div className="flex flex-col xp-section gap-8 w-262 m-auto">
        <section className="rounded-lg p-4">
          <h2 className="text-3xl font-bold text-slate-100">Education</h2>
          <ul className="items-list mt-5 pl-5 text-slate-300">
            <li className="items flex flex-col">
              <ExperienceItem
                item={{
                  title: "Hanoi University of Civil Engineering",
                  duration: "year 2013- 2020",
                  description: "Major: Computer science",
                }}
              />
            </li>
          </ul>
        </section>
        <section className="experience-section rounded-md p-4">
          <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
          <ul className="flex flex-col gap-4 mt-5 pl-5 text-slate-300">
            <li className="items flex flex-col">
              <ExperienceItem
                item={{
                  title: "Goodday Venaja",
                  duration: "year 2024- 2026",
                  description: "Position: Fullstack Developer",
                }}
              />
            </li>
            <li className="items flex flex-col">
              <ExperienceItem
                item={{ title: "GHM", duration: "year 2022- 2024", description: "Position: Front-end Developer " }}
              />
            </li>
            <li className="items flex flex-col">
              <ExperienceItem
                item={{ title: "Boxi Haravan", duration: "year 2018- 2019", description: "Position: Internship" }}
              />
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Experience;
