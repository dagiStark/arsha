import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapComponent from "./MapComponent";
import { contactLinks } from "../../constants";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TextField, Button, Paper, InputBase } from "@mui/material";
import { motion } from "framer-motion";

function Contact() {
  return (
    <main id="contact">
      <div className="">
        <motion.section
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] mt-12">
              Contact
            </h1>
            <p className="text-xl text-black/40 mt-4 mb-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              magni?
            </p>
          </div>
        </motion.section>

        <section className="flex justify-center gap-10">
          <div className="flex flex-col gap-5 border-y-4 border-y-[#47b2e4] py-5 w-[40%] rounded-lg">
            <div className="flex items-center justify-start gap-4">
              <LocationOnIcon className="text-[#47b2e4]" />
              <div>
                <h1 className="text-2xl font-semibold text-[#283a5ae6]">
                  Address
                </h1>
                <p className="text-black/70">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              <LocationOnIcon className="text-[#47b2e4]" />
              <div>
                <h1 className="text-2xl font-semibold text-[#283a5ae6]">
                  Call Us
                </h1>
                <p className="text-black/70">+1 5589 55488 55</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              <LocationOnIcon className="text-[#47b2e4]" />
              <div>
                <h1 className="text-2xl font-semibold text-[#283a5ae6]">
                  Email Us
                </h1>
                <p className="text-black/70">info@example.com</p>
              </div>
            </div>

            <div>
              <MapComponent />
            </div>
          </div>
          <div className="w-[40%]">
            <div className="flex flex-col gap-5 border-y-4 border-y-[#47b2e4] py-5  rounded-lg">
              <form action="" className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <TextField
                    id="outlined-basic"
                    label="Your Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Your Email"
                    variant="outlined"
                  />
                </div>
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                />
                <TextField
                  id="outlined-textarea"
                  label="Write your message"
                  placeholder="Placeholder"
                  multiline
                />

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
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center justify-center bg-[#f5f6f8] px-24 mt-16 py-8">
            <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] ">
              Join Out Newsletter
            </h1>
            <p className="text-xl text-black/40 mt-4 mb-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            </p>

            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: 600,
                borderRadius: "50px",
              }}
            >
              <InputBase
                sx={{ paddingLeft: 2, flex: 1 }}
                placeholder="Enter your email"
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#47b2e4",
                  borderRadius: "50px",
                  fontSize: "14px",
                  padding: "8px 25px",
                  transition: "0.3s",
                }}
              >
                {" "}
                Subscribe
              </Button>
            </Paper>
          </div>

          <div className="px-24 py-8 flex justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-[#283a5ae6]">ARSHA</h1>
              <p className="text-black/70">A108 Adam Street </p>
              <p className="text-black/70">New York, NY 535022 </p>{" "}
              <p className="text-black/70">
                {" "}
                <span className="text-[#283a5ae6] font-bold">Phone:</span> +1
                5589 55488 55{" "}
              </p>{" "}
              <p className="text-black/70">
                <span className="text-[#283a5ae6] font-bold">Email:</span>{" "}
                info@example.com
              </p>
            </div>

            <div className="flex justify-between gap-10">
              <ul>
                <h1 className="text-xl font-bold text-[#283a5ae6] mb-4">
                  Useful Links
                </h1>
                {contactLinks.usefulLinks.map((link, index) => (
                  <li key={index} className="text-black/70 flex gap-2">
                    <ArrowForwardIosIcon className="text-[#47b2e4]" />
                    {link.label}
                  </li>
                ))}
              </ul>
              <ul>
                <h1 className="text-xl font-bold text-[#283a5ae6] mb-4">
                  Our Services
                </h1>
                {contactLinks.serviceLinks.map((link, index) => (
                  <li key={index} className="text-black/70 flex gap-2">
                    {" "}
                    <ArrowForwardIosIcon className="text-[#47b2e4]" />
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col flex-wrap w-[30%]">
              <h1 className="text-xl font-bold text-[#283a5ae6] mb-2">
                Follow Us
              </h1>
              <p className="text-black/70 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae, mollitia!
              </p>
              <div className="text-black/70 flex gap-2">
                <XIcon />
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p>© Copyright Arsha All Rights Reserved</p>
        </section>
      </div>
    </main>
  );
}

export default Contact;
