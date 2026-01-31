import { ExternalLink } from "lucide-react";
import RPGImage from "../assets/images/react-rpg.jpg";
import TravelImage from "../assets/images/travel.jpg";

const PROJECTS = [
  { name: "Next RPG Game", url: "https://next-rpg-game.netlify.app/", image: RPGImage },
  { name: "Travel page", url: "https://travel-company-omega.vercel.app/", image: TravelImage },
];

const PetProjects = () => {
  return (
    <div id="projects" className="mb-16 flex flex-col gap-8">
      <h2 className="p-4 mb-8 font-bold text-3xl text-center bg-neutral-50">PET PROJECTS</h2>
      <div className="text-stone-200 flex flex-wrap justify-center items-center">
        {PROJECTS.map((item) => {
          return (
            <div key={item.name} className="relative size-80 m-5 group overflow-hidden">
              <div className="inset-0 absolute top-0 left-0 flex-col justify-end bg-neutral-300/30 hidden group-hover:flex duration-300 z-10">
                <h3 className="text-white text-2xl font-semibold text-center bg-neutral-300">{item.name}</h3>
                <a
                  href={item.url}
                  target="_blank"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <ExternalLink className="text-neutral-900 stroke-3" />
                </a>
              </div>
              <img src={item.image} className="inset-0 scale-100 group-hover:scale-120 duration-300" alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetProjects;
