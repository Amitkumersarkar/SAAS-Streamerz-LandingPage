import { HERO_CONTENT } from "../../constants";

const Hero = () => {
    return (
        <section className="pt-28 lg:pt-36">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                <div className="mb-8 border border-neutral-800 px-3 py-2 rounded-full text-xs">
                    {HERO_CONTENT.badgeText}
                </div>
            </div>
        </section>
    );
};

export default Hero;
