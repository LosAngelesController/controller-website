const recommendations = [
  "Develop a formal policy for how City offices reserve beds",
  "Establish data quality standards to ensure that beds are reported accurately",
  "Develop performance-based incentives",
  "Develop ways to promptly identify underperformance",
  "Develop a formal corrective action policy to deal with underperformance",
  "More housing navigators",
  "Monitor more types of outcomes for people",
  "Improve group shelters to provide more privacy & comfort",
];

const RecommendationsSection = () => {
  return (
    <section className="py-20 px-6 bg-background dark:bg-secondary">
      <div className="container max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-6 text-foreground dark:text-white">
          RECOMMENDATIONS
        </h2>

        {/* Intro */}
        <p className="text-lg mb-12 max-w-3xl text-muted-foreground dark:text-white/70">
          Recommendations are in addition to — not in place of — building more
          permanent housing.
          <span
            className="font-semibold"
            style={{ color: "#41ffca" }}
          >
            {" "}
            The most critical solution for homelessness is more permanent
            housing.
          </span>
        </p>

        {/* List */}
        <div className="space-y-5 max-w-3xl">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Teal bullet */}
              <div
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "#41ffca" }}
              />

              {/* Text */}
              <p className="leading-relaxed text-foreground dark:text-white">
                {rec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
