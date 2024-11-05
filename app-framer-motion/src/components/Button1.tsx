import { motion, TapInfo } from "framer-motion";

import "./Button1.css";

interface Button1Props {

};
export const Button1: React.FC<Button1Props> = ({

}) => {
    // click（framer-motionではtap）のイベント
    function onTapHandler(event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) {
        console.log(event);
        console.log(info);
    }

    return (
        <>
            <motion.button
                className="button1"
                onTap={onTapHandler}
            >
                ボタン１
            </motion.button>
        </>
    );
};
