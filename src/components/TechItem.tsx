interface Props {
  Icon: React.FC<{ className?: string }>;
  name: string;
}

const TechItem = ({ Icon, name }: Props) => {
  return (
    <div className="flex items-center gap-2 py-1 px-4 rounded-md border border-neutral-600 bg-white">
      <Icon className="size-5" />
      <p className="text-neutral-800">{name}</p>
    </div>
  );
};

export default TechItem;
