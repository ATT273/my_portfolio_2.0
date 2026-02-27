interface Props {
  Icon: React.FC<{ className?: string }>;
  name: string;
}

const TechItem = ({ Icon, name }: Props) => {
  return (
    <div className="flex items-center gap-2 py-1 px-4 rounded-md hover:border-amber-600/50 bg-slate-800 border border-slate-700 cursor-pointer">
      <Icon className="size-5" />
      <p className="text-neutral-300">{name}</p>
    </div>
  );
};

export default TechItem;
