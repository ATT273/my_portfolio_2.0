import { CircleChevronRight } from "lucide-react";

const Experience = () => {
  return (
    <div id="exp" className="flex flex-col gap-8 mb-16">
      <h2 className="p-4 mb-8 font-bold text-3xl text-center bg-neutral-50">EDUCATION & EXPERIENCE</h2>
      <div className="flex flex-col xp-section px-50 gap-8">
        <section className="edu-section bg-neutral-50 rounded-md p-4">
          <h2 className="text-3xl font-bold text-[--dark-text]">Education</h2>
          <ul className="items-list mt-5 pl-5">
            <li className="items flex flex-col">
              <div className="grid grid-cols-[30px_1fr] items-center">
                <CircleChevronRight className="size-5" />
                <h3 className="text-lg font-semibold">Hanoi University of Civil Engineering</h3>
              </div>
              <div className="grid grid-cols-[30px_1fr]">
                <div className="size-5" />
                <div>
                  <p className="font-normal">year 2013- 2020</p>
                  <p className="font-normal">Major: Computer science </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="experience-section bg-neutral-50 rounded-md p-4">
          <h2 className="text-3xl font-bold text-[--dark-text]">Experience</h2>
          <ul className="items-list mt-5 pl-5">
            <li className="items flex flex-col">
              <div className="grid grid-cols-[30px_1fr] items-center">
                <CircleChevronRight className="size-5" />
                <h3 className="text-lg font-semibold">Goodday Venaja</h3>
              </div>
              <div className="grid grid-cols-[30px_1fr] items-center">
                <div className="size-5" />
                <div>
                  <p className="font-normal">year 2024- 2025</p>
                  <p className="font-normal">Position: Fullstack Developer </p>
                </div>
              </div>
            </li>
            <li className="items flex flex-col">
              <div className="grid grid-cols-[30px_1fr] items-center">
                <CircleChevronRight className="size-5" />
                <h3 className="text-lg font-semibold">GHM</h3>
              </div>
              <div className="grid grid-cols-[30px_1fr] items-center">
                <div className="size-5" />
                <div>
                  <p className="font-normal">year 2022- 2024</p>
                  <p className="font-normal">Position: Front-end Developer </p>
                </div>
              </div>
            </li>
            <li className="items flex flex-col">
              <div className="grid grid-cols-[30px_1fr] items-center">
                <CircleChevronRight className="size-5" />
                <h3 className="text-lg font-semibold">Boxi Haravan</h3>
              </div>
              <div className="grid grid-cols-[30px_1fr] items-center">
                <div className="size-5" />
                <div>
                  <p className="font-normal">year 2018- 2019</p>
                  <p className="font-normal">Position: Internship </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Experience;
