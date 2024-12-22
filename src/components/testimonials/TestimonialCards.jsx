import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box } from "@mui/material";
import { testimonialItems } from "../../constants";
import Rating from "@mui/material/Rating";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

function TestimonialCards() {
  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        style={{
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-color": "#1976d2",
          width: "100%",
        }}
      >
        {testimonialItems.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="flex flex-col items-center justify-center mb-10">
              <img
                src={item.img}
                alt="testimonial"
                style={{ width: "150px", borderRadius: "50%" }}
              />
              <p className="text-xl font-bold text-black/80 mt-2">
                {item.name}
              </p>
              <p className="text-lg text-black/70 ">{item.designation}</p>
              <Rating name="read-only" value={item.rating} className="mb-4" />
              <p className="text-lg text-black/70 mt-2 italic">
                <FormatQuoteRoundedIcon
                  sx={{
                    fontSize: "40px",
                    color: "#47b2e4",
                    rotate: "180deg",
                    marginRight: "0 10px",
                  }}
                />
                {item.description}
                <FormatQuoteRoundedIcon
                  sx={{
                    fontSize: "40px",
                    color: "#47b2e4",
                    marginLeft: "0 10px",
                  }}
                />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default TestimonialCards;
