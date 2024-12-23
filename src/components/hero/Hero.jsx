import { Button } from "@mui/material";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import heroImg from "../../assets/img/hero-img.png";
import client1 from "../../assets/img/clients/client-1.png";
import client2 from "../../assets/img/clients/client-2.png";
import client3 from "../../assets/img/clients/client-3.png";
import client4 from "../../assets/img/clients/client-4.png";
import client5 from "../../assets/img/clients/client-5.png";
import client6 from "../../assets/img/clients/client-6.png";
import client7 from "../../assets/img/clients/client-7.png";
import client8 from "../../assets/img/clients/client-8.png";

function Hero() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    let interval = setInterval(() => {
      if (swiper) {
        swiper.style.transform = `translateX(${
          parseFloat(
            swiper.style.transform.replace("translateX(", "").replace("px)", "")
          ) - 210 || 0
        }px)`;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="" id="hero">
      <section className="bg-[#37517e] pl-24 pr-24 pb-24 pt-32 flex items-center justify-center ">
        <motion.div
          className="text-wrap flex flex-col gap-6 w-[50%]"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-white ">
            Better Solutions For Your Business
          </h1>
          <p className="text-white/40 text-3xl font-semibold">
            We are team of talented designers making websites with React
          </p>

          <div className="text-white">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#47b2e4",
                borderRadius: "50px",
                fontSize: "14px",
                padding: "8px 25px",
                margin: " 0 0 0 30px",
                transition: "0.3s",
              }}
            >
              {" "}
              Get Started
            </Button>
            <Button
              variant="text"
              sx={{
                borderRadius: "50px",
                fontSize: "14px",
                padding: "8px 25px",
                margin: " 0 0 0 30px",
                transition: "0.3s",
                color: "#fff",
              }}
            >
              <Play />
              watch video
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="img-container"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImg} alt="hero image" loading="lazy" />
        </motion.div>
      </section>

      <section className="py-8 px-24 bg-[#f5f6f8]">
        <div className="flex h-[40px] gap-x-8 justify-center">
          <img src={client1} alt="client-1" loading="lazy" />
          <img src={client2} alt="client-2" loading="lazy" />
          <img src={client3} alt="client-3" loading="lazy" />
          <img src={client4} alt="client-4" loading="lazy" />
          <img src={client5} alt="client-5" loading="lazy" />
          <img src={client6} alt="client-6" loading="lazy" />
          <img src={client7} alt="client-7" loading="lazy" />
          <img src={client8} alt="client-8" loading="lazy" />
        </div>
      </section>
    </main>
  );
}

export default Hero;
