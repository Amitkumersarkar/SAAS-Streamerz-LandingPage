import { FOOTER_CONTENT } from "../../constants";

const Footer = () => {

    return (
        <footer className="mt-20 text-neutral-400 ">
            <div className="max-w-7xl mx-auto px-4 border-t border-neutral-800 ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
                    {
                        FOOTER_CONTENT.sections.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-white font-medium mb-4">
                                    {
                                        section.title
                                    }
                                </h3>
                                <ul className="space-y-2">
                                    {
                                        section.links.map((link, index) => {

                                        })
                                    }
                                </ul>
                            </div>
                        ))
                    }

                </div>
            </div>
        </footer>
    );
};

export default Footer;