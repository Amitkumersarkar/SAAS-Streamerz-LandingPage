import { HOW_IT_WORKS_CONTENT } from "../constants";

const HowItWorks = () => {

    return (
        <div id="works">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 border-t border-neutral-800">
                    <h2 className="text-3xl lg:text-5x mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                        {HOW_IT_WORKS_CONTENT.sectionTitle}
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
                        {HOW_IT_WORKS_CONTENT.sectionDescription}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;