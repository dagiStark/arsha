import TestimonialAccordion from "./TestimonialAccordion";
import TestimonialCards from "./TestimonialCards";

function Testimonials() {
  return (
    <main>
      <div className="mt-20">
        <section>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] mt-12">
              Testimonials
            </h1>
            <p className="text-xl text-black/40 mt-4 mb-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              magni?
            </p>
          </div>
        </section>

        <section>
          <TestimonialCards />
        </section>

        <section className="mt-24 items-center justify-center text-center bg-[#f5f6f8] px-24 flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] mt-12 mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-black/40 mt-4 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              magni Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima, ea. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Error, magni?
            </p>
          </div>
          <TestimonialAccordion />
        </section>
      </div>
    </main>
  );
}

export default Testimonials;
