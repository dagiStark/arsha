import { serviceItems } from "../../constants";
import { Button } from "@mui/material";
import ctaBg from "../../assets/img/cta-bg.jpg"; // Import the image
import { motion } from "framer-motion";

function Services() {
  return (
    <main
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctaBg})`, // Set the background image for the main container
      }}
      id="services"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Services Section */}
        <div className="flex flex-col items-center justify-center bg-[#f5f6f8] px-24 py-16">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl uppercase font-bold text-[#283a5ae6]">
              Services
            </h1>
            <p className="text-xl text-black/40 mt-4">
              Discover the wide range of solutions we offer to cater to your
              needs.
            </p>
          </motion.div>
          <div>
            <div className="flex justify-between rounded-lg p-8 gap-4 mt-10">
              {serviceItems.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col gap-4 p-8 rounded-lg bg-white"
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <service.icon color="#47b2e4" size={40} />
                  <h2 className="text-2xl font-bold text-[#283a5ae6]">
                    {service.title}
                  </h2>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="flex gap-6 items-center bg-[#283a54] bg-opacity-70 py-32 px-24 text-white"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="w-[70%] p-8">
            <h2 className="text-[28px] font-bold">Call To Action</h2>
            <p className="font-normal text-xl">
              Ready to elevate your projects to the next level? Connect with us
              today and discover how our expertise can make a difference. Give us
              a call and let&apos;s talk about your project.
            </p>
          </div>

          <div>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "50px",
                padding: "8px 25px",
                color: "#fff",
                borderColor: "#fff",
              }}
            >
              Call To Action
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default Services;
