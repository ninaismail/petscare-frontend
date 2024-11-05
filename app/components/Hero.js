import Link from "next/link";
import Image from "next/image";
import Paw from "./icons/Paw";
import Phone from "./icons/Phone";

const Hero = () => {
    return (
        <section className="bg-accent/30 lg:h-screen">
        <div className="sm:w-10/12 w-11/12 h-full flex justify-between items-center flex-wrap mx-auto gap-6 pt-40">
            <div className="2xl:w-4/12 lg:w-5/12 w-full space-y-10">
                <h1 class="text-primary 2xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-[memoire] lg:leading-relaxed">We are here to care of your <br className="max-2xl:hidden"/><span class="text-secondary">little pets.</span></h1>
                <p class="tracking-wide text-justify font-[montserrat] lg:w-2/3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.</p>
                <div className="flex flex-wrap gap-6 items-center">
                    <Link id="go-to-services" href={`#services`} prefetch={false} scroll={false} class="w-fit cursor-pointer px-5 py-4 font-[montserrat] text-center rounded-lg text-white bg-gradient-to-b from-primary to-accent hover:from-accent hover:to-primary hover:brightness-125 transition-all duration-400">Our Services</Link>
                    <Link id="schedule-a-call" href={`#calendar`} prefetch={false} scroll={false} class="cursor-pointer font-[montserrat] text-center text-primary hover:brightness-125 transition-all duration-400 flex items-center gap-2">
                        <span><Phone styles="w-5 aspect-square" /></span>
                        Schedule a Call</Link>
                </div>
            </div>
            <div className="relative lg:w-6/12 w-full">
            <div
                className="w-full h-full bg-cover bg-center bg-repeat absolute inset-0 z-[-1]"
                style={{
                    backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M869.5 685.5Q796 871 608 861.5t-359-84Q78 703 142.5 531T313 252q106-107 247-55.5T822 374q121 126 47.5 311.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23FF8128%22 d=%22M869.5 685.5Q796 871 608 861.5t-359-84Q78 703 142.5 531T313 252q106-107 247-55.5T822 374q121 126 47.5 311.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                    backgroundSize: "110%", // Scale background by 10%
                }}
                ></div>
                <Image
                    src="/images/hero/girlwithpups.webp"
                    alt="Girl and her Puppies"
                    width={472}
                    height={588}
                    priority
                    responsive
                    className="mx-auto"
                    />
                    <div className="absolute w-[40px] aspect-square top-0 right-0">
                        <Paw />
                    </div>
            </div>
        </div>
        </section>
    );
}

export default Hero;
