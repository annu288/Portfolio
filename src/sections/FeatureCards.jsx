import { abilities } from "../constants";

const FeatureCards = () => (
  <section className="w-full padding-x-lg md:mt-16 mt-8">
    <div className="mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        What I Believe <span className="text-white-50">:</span>
      </h2>
      <p className="text-white-50 text-lg mb-8 max-w-2xl">
        Great work comes from a focus on quality, clear communication, and
        delivering on time—every time.
      </p>

      <div className="grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;