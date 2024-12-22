import { serviceItems } from "../../constants";
import { Button } from "@mui/material";
import ctaBg from "../../assets/img/cta-bg.jpg"; // Import the image

function Services() {
  return (
    <main
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctaBg})`, // Set the background image for the main container
      }}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Services Section */}
        <div className="flex flex-col items-center justify-center bg-[#f5f6f8] px-24 py-16">
          <h1 className="text-4xl uppercase font-bold text-[#283a5ae6]">
            Services
          </h1>
          <p className="text-xl text-black/40 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            magni?
          </p>
          <div>
            <div className="flex justify-between rounded-lg p-8 gap-4 mt-10">
              {serviceItems.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-8 rounded-lg bg-white"
                >
                  <service.icon color="#47b2e4" size={40} />
                  <h2 className="text-2xl font-bold text-[#283a5ae6]">
                    {service.title}
                  </h2>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="flex gap-6 items-center bg-[#283a54] bg-opacity-70 py-32 px-24 text-white">
          <div className="w-[70%] p-8">
            <h2 className="text-[28px] font-bold">Call To Action</h2>
            <p className="font-normal text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quam at cupiditate eligendi, ex nobis sapiente. Temporibus
              nesciunt esse aspernatur.
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
        </div>
      </div>
    </main>
  );
}

export default Services;
