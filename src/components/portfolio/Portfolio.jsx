import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "QuickPay",
    img: "/quickPay.png",
    deployLink: "https://upi-wallet.vercel.app/",
    githubLink: "https://github.com/rks007/Basic-Upi-Wallet",
    desc: "Built a MERN-stack UPI wallet application for secure financial management.",
  },
  {
    id: 2,
    title: "EchoBlog",
    img: "/echoBlog.png",
    deployLink: "https://blogging-website-delta-ebon.vercel.app/",
    githubLink: "https://github.com/rks007/Blogging_Website",
    desc: "Developed a full-stack blogging platform where users can write and publish blogs.",
  },
  {
    id: 3,
    title: "Course Selling Application",
    img: "/udemy.png",
    deployLink: "",
    githubLink: "https://github.com/rks007/course_selling_backend_application",
    desc: "Implemented secure JWT authentication, admin management, user interaction features for course browsing and purchasing, and integrated MongoDB for data storage.",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   deployLink: "https://upi-wallet.vercel.app/",
  //   githubLink: "https://github.com/rks007/Basic-Upi-Wallet",
  //   desc: "",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" width={23}/>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div>
              <a href={item.deployLink} target="_blank">
                {item.deployLink.length > 2 ? <button>Demo</button> : null}
              </a>
              -
              <a href={item.githubLink} target="_blank">
                <button>Source Code</button>
              </a>
            </div>
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
