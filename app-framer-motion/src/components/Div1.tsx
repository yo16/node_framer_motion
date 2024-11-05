import { motion } from "framer-motion";

export const Div1: React.FC = () => {
    return (
        <>
            <motion.div
                style={{
                    backgroundColor: "#33e",
                    width: "100px",
                    height: "50px",
                    padding: "20px",
                    color: "#fff",
                }}
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 1.05,
                }}
                drag="x"
                dragConstraints={{
                    left: -50,
                    right: 200,
                }}
            >左右にドラッグできるDiv</motion.div>
        </>
    );
}
