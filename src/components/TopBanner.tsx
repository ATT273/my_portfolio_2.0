import TopBannerImage from "../assets/images/wp-work.jpg";

const TopBanner = () => {
  return (
    <div className="relative h-dvh w-full overflow-hidden mb-36">
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-white z-20">
        <p className="text-5xl font-bold">Hello, I'm Tran Anh Tuan</p>
        <p className="text-4xl font-light">I'm a Front-end Developer. I make websites and mobile apps</p>
      </section>
      <div className="absolute inset-0 h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-gray-500/40 z-10" />
      <img src={TopBannerImage} alt="top banner" className="w-full" />
    </div>
  );
};

export default TopBanner;
