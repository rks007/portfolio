import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          RKS
        </motion.span>
        <div className="social">
          <a href="https://github.com/rks007" target="_blank">
            <img src="/github2.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rishabh-kumar-singh-b54a5a272/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://x.com/rishabhsingh_7" target="_blank">
            <img src="/twitterX.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/Rishabh_Singh_007/" target="_blank">
            <img src="/leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
