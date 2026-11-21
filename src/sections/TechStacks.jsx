import { techStackImgs } from "../constants";

const TechStacks = () => {
  return (
    <section
      id="skills"
      className="flex-center section-padding text-white"
    >
      <div className="w-full h-full md:px-10 px-5">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackImgs.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
            >
              {tech.imgPath && (
                <img
                  src={tech.imgPath}
                  alt={tech.name}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                  onError={(e) => {
                    // Image failed to load: show the fallback badge instead
                    e.currentTarget.hidden = true;
                    e.currentTarget.nextElementSibling.hidden = false;
                  }}
                />
              )}
              <div
                hidden={Boolean(tech.imgPath)}
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl"
              >
                {tech.emoji ?? tech.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
