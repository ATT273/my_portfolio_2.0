import { ExternalLink } from "lucide-react";
import GHMImage from "../assets/images/ghm_sqr.jpg";
import JSPAImage from "../assets/images/spa2.jpg";
import MoriImage from "../assets/images/mori2.jpg";
import TTImage from "../assets/images/thaithinh.jpg";
import SectionTitle from "./shared/SectionTitlte";
import RPGImage from "../assets/images/react-rpg.jpg";
import TravelImage from "../assets/images/travel.jpg";
import TriponImage from "../assets/images/tripon.png";

const PROJECTS = [
  {
    name: "Tripon",
    url: "https://dev.tripon.kr/",
    image: TriponImage,
    desc: "Tripon is a website that offers travel and vacation packages in Vietnam for customers from Korea. The platform provides comprehensive information, including tour packages, resort and hotel room categories, and flights from Korea to Vietnam. Customers can directly book tours and accommodations on the website and review their booking history.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Production"],
  },
  {
    name: "THAITHINH MEDIC",
    url: "https://thaithinhmedic.vn/",
    image: TTImage,
    desc: "THAITHINH MEDIC is a website that connects customers with clinics, allows them to look up doctors’ schedules, book appointments directly, and access and review their own medical records.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Production"],
  },
  {
    name: "JADESPA",
    url: "https://jmedicalspa.vn/",
    image: JSPAImage,
    desc: "JADESPA is a website that provides information about spa services and skincare technologies, while also selling cosmetic and spa products. Customers can book spa appointments and place orders directly on the website.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "AOS", "Production"],
  },
  {
    name: "MORIMORI",
    url: "https://mori-mori.vn/",
    image: MoriImage,
    desc: "MORIMORI provides premium hourly home cleaning services. Beyond meeting essential household care needs, we are committed to delivering a flawless experience that enhances our customers’ quality of life. With a professional team and strong management expertise, MoriCare confidently stands as a trusted partner in caring for your home and family.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "AOS", "Production"],
  },
  {
    name: "GHMSOFT",
    url: "https://ghmsoft.vn",
    image: GHMImage,
    desc: "GHMSOFT is the official website of GHM, presenting the company’s vision, areas of operation, team members, and open career opportunities. The website is designed to provide a comprehensive overview of GHM’s mission and values, showcasing the company’s commitment to excellence and innovation in its field.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "AOS", "Production"],
  },
  {
    name: "Next RPG Game",
    url: "https://next-rpg-game.netlify.app/",
    image: RPGImage,
    desc: "Next RPG Game is an RPG built on Next.js. It features an auto-battler gameplay style where players fight opponents through stages and upgrade their equipment for subsequent battles.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Personal"],
  },
  {
    name: "Travel with us",
    url: "https://travel-company-omega.vercel.app/",
    image: TravelImage,
    desc: "Travel with us is a landing page introducing scenic attractions and popular travel destinations. The website is currently under development.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Personal"],
  },
];

const Works = () => {
  return (
    <section id="projects" className="mb-16 flex flex-col gap-8">
      <SectionTitle title="PROJECTS" />
      <div className="text-stone-200 flex flex-wrap justify-center items-center gap-4 w-262 m-auto">
        {PROJECTS.map((item) => {
          return (
            <div className="flex gap-4 hover:border hover:border-amber-600/50 rounded-lg p-4" key={item.name}>
              <div key={item.name} className="relative min-w-60 min-h-60 max-w-60 max-h-60 group overflow-hidden">
                <div className="inset-0 absolute top-0 left-0 flex-col justify-end bg-neutral-300/30 hidden group-hover:flex duration-300 z-10">
                  <a
                    href={item.url}
                    target="_blank"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <ExternalLink className="text-neutral-300 stroke-3" />
                  </a>
                </div>
                <img
                  src={item.image}
                  className="inset-0 scale-100 group-hover:scale-120 duration-300"
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-slate-100 font-semibold text-xl">{item.name}</p>
                <p className="flex gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-400 border border-slate-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </p>
                <p className="text-slate-300 flex-1">{item.desc}</p>
                <div className="flex justify-end">
                  <a href={item.url} target="_blank">
                    <p className="text-slate-200 hover:underline flex items-center gap-1 rounded-full px-3 py-1 border border-slate-700 hover:border-amber-600/50 duration-300">
                      <ExternalLink className="text-neutral-100 size-4" /> View
                    </p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
