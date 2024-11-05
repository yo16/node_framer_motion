import { useState } from "react";
import { motion } from "framer-motion";

import "./Switch1.css";

export const Switch1: React.FC = () => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const toggleSwitch = () => setIsOn((curValue) => !curValue);

    return (
        <>
            <div
                className="mySwitch1"
                data-ison={isOn}
                onClick={toggleSwitch}
            >
                <motion.div
                    className="myHandle1"
                    layout
                    transition={spring}
                />
            </div>
        </>
    );
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};
