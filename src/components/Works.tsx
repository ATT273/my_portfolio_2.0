import { ExternalLink } from "lucide-react";
import GHMImage from "../assets/images/ghm_sqr.jpg";
import JSPAImage from "../assets/images/spa2.jpg";
import MoriImage from "../assets/images/mori2.jpg";
import TTImage from "../assets/images/thaithinh.jpg";

const PROJECTS = [
  { name: "GHMSOFT", url: "https://ghmsoft.vn", image: GHMImage },
  { name: "JADESPA", url: "https://jmedicalspa.vn/", image: JSPAImage },
  { name: "MORIMORI", url: "https://mori-mori.vn/", image: MoriImage },
  { name: "THAITHINH MEDIC", url: "https://thaithinhmedic.vn/", image: TTImage },
];
const Works = () => {
  return (
    <div id="works" className="mb-16 flex flex-col gap-8">
      <h2 className="p-4 mb-8 font-bold text-3xl text-center bg-neutral-50">WORKS</h2>
      <div className="works-section text-stone-200 flex flex-wrap justify-center items-center">
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

export default Works;
