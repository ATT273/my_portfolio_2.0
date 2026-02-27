const SectionTitle = ({ title, classNames }: { title: string; classNames?: string }) => {
  return (
    <h2 className={`p-4 mb-8 font-bold text-3xl text-center text-slate-100 ${classNames}`}>
      <span className="border-b border-amber-600/50 px-10 py-2">{title}</span>
    </h2>
  );
};

export default SectionTitle;
