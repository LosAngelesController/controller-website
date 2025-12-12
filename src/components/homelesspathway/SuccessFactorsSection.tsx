import { Users, MessageCircle, Home, Brain, Briefcase } from "lucide-react";

const factors = [
  { icon: Users, title: "Consistent Case Management" },
  { icon: MessageCircle, title: "Communicative Case Management" },
  { icon: Home, title: "Housing Navigation" },
  { icon: Brain, title: "Mental Health Services" },
  { icon: Briefcase, title: "Job Training" },
];

const SuccessFactorsSection = () => {
  return (
    <section className="py-20 px-6 bg-background dark:bg-secondary">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight
            text-foreground dark:text-white"
          >
            HOW WERE PEOPLE{" "}
            <span style={{ color: "#41ffca" }}>
              SUCCESSFULLY HOUSED?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground dark:text-white/70">
            People who were successfully housed were most impacted by high
            quality service and resources that bring stability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="
                rounded-xl p-8 text-center transition-all duration-300
                bg-muted dark:bg-[#0f1416]
                border border-border dark:border-white/10
                hover:border-border/70 dark:hover:border-white/20
              "
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "rgba(65, 255, 202, 0.12)" }}
              >
                <factor.icon
                  className="w-7 h-7"
                  style={{ color: "#41ffca" }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-snug
                text-foreground dark:text-white"
              >
                {factor.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessFactorsSection;
