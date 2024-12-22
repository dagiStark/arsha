import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <main className="bg-[#f5f6f8] px-24 mt-24 pb-10">
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] mt-12">
            Pricing
          </h1>
          <p className="text-xl text-black/40 mt-4 mb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            magni?
          </p>
        </div>
      </section>

      <section>
        <div>
          <PricingCard />
        </div>
      </section>
    </main>
  );
}

export default Pricing;
