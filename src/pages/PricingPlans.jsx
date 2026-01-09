import { motion } from "framer-motion";

const PricingPlans = () => {
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        transition: {
            delay: 1 * 0.2,
            duration: 0.6,
            ease: "easOut"
        }
    }
    return (
        <section id="pricing">
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <motion.div className="text-center mb-12 border-t border-neutral-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className=""></h2>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingPlans;