import { motion } from "framer-motion";

export const Ul1: React.FC = () => {
    const listVar = {
        myHidden: {
            opacity: 0.5,
        },
    };
    const itemVar = {
        myHidden: {
            x: -10,
            opacity: 0.5,
        },
    };

    return (
        <>
            <motion.ul
                animate="myHidden"
                variants={ listVar }
            >
                <motion.li variants={ itemVar }>アイテム１</motion.li>
                <motion.li variants={ itemVar }>アイテム２</motion.li>
                <motion.li variants={ itemVar }>アイテム３</motion.li>
                <motion.li variants={ itemVar }>アイテム４</motion.li>
            </motion.ul>
        </>
    );
};
