import { CircleChevronRight } from "lucide-react";

interface Props {
  item: {
    title: string;
    duration: string;
    description: string;
  };
}
const ExperienceItem = ({ item }: Props) => {
  return (
    <>
      <div className="grid grid-cols-[30px_1fr] items-center">
        <CircleChevronRight className="size-5" />
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>
      <div className="grid grid-cols-[30px_1fr]">
        <div className="size-5" />
        <div>
          <p className="font-normal">{item.duration}</p>
          <p className="font-normal">{item.description}</p>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
