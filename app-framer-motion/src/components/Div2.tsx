import { motion, useMotionValue, useTransform, MotionValue} from "framer-motion";

export const Div2: React.FC = () => {
    const initialState = 0;
    const x: MotionValue = useMotionValue(initialState);
    const opacity = useTransform(x, [-50, 100, 250], [0.05, 1, 0.05]);

    return (
        <>
            <motion.div
                style={{
                    backgroundColor: "#900",
                    width: "100px",
                    height: "50px",
                    padding: "20px",
                    color: "#fff",
                    x,
                    opacity,
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
                    right: 250,
                }}
            >左右にドラッグできるDiv2</motion.div>
        </>
    );
}
