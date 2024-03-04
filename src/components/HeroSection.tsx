import Link from "next/link";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Unleash your musical potential with our immersive courses, designed to
          spark creativity and refine skills. Whether you're a novice or honing
          expertise, embark on a transformative journey today.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>Explore Courses</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;