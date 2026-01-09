import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

const PricingPlans = () => {
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1 * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="pricing">
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <motion.div
                    className="text-center mb-12 border-t border-neutral-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                        {PLANS_CONTENT.sectionTitle}
                    </h2>
                    <p className="mt-4">
                        {PLANS_CONTENT.sectionDescription}
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {PLANS_CONTENT.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={childVariants}
                            className={`p-8 rounded-xl shadow-lg bg-neutral-950 ${plan.popular
                                ? "border border-blue-900/80"
                                : "border border-neutral-800"
                                }`}
                        >
                            {plan.popular && (
                                <div className="text-center mb-4">
                                    <span className="text-white bg-blue-600 text-xs py-1 px-3 rounded-full uppercase">
                                        {PLANS_CONTENT.popularBadge}
                                    </span>
                                </div>
                            )}
                            <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
                                {plan.description}
                            </h3>
                            <div className="text-2xl lg:text-3xl font-medium mb-6">
                                {
                                    plan.price
                                }
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PricingPlans;
