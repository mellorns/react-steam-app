import { motion } from "framer-motion";
import '../../assets/styles/loader.scss'




export default function Loader() {
  return (
    <div className="loader">
      <motion.div
        className="loader-circle "
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <div className="absolute w-20 h-20 border-4 border-gray-700 rounded-full"></div>
        <div className="absolute w-20 h-20 border-4 border-t-[#66c0f4] rounded-full"></div>
      </motion.div>

      <motion.p
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading Steam Data...
      </motion.p>
    </div>
  );
};

