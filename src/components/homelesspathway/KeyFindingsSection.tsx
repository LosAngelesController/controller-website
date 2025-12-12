const findings = [
  {
    stat: "1 in 4",
    label: "BEDS UNUSED",
    description:
      "costing taxpayers an estimated $218 million between FY 2019–FY 2023.",
    boldStart: "1 in 4 City-funded interim housing beds went unused",
  },
  {
    stat: "1 in 3",
    label: "COULDN'T SECURE A BED",
    description:
      "during FY22 and FY23. (16,000 people were removed from the shelter bed waiting list after an average of six months.)",
    boldStart:
      "Nearly 1 in 3 people who expressed interest in a shelter bed were unable to secure one",
  },
  {
    stat: "50%+",
    label: "RETURNED TO HOMELESSNESS",
    description: "or unknown destinations.",
    boldStart:
      "More than 50% of people exiting City-funded interim housing returned to homelessness",
  },
  {
    stat: "<20%",
    label: "SECURED PERMANENT HOUSING",
    description: "",
    boldStart:
      "Less than 1 in 5 people in City-funded interim housing secured permanent housing.",
  },
];

const KeyFindingsSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary dark:bg-secondary bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-14 text-foreground dark:text-white">
          KEY FINDINGS
        </h2>

        <div className="space-y-12">
          {findings.map((finding, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-start gap-6"
            >
              {/* Left content */}
              <div className="flex gap-4 items-start flex-1">
                {/* Teal bullet */}
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#41ffca" }}
                />

                <p className="leading-relaxed text-foreground dark:text-white">
                  <span className="font-semibold">
                    {finding.boldStart}
                  </span>
                  {finding.description && (
                    <span className="text-foreground/80 dark:text-white">
                      {" "}
                      {finding.description}
                    </span>
                  )}
                </p>
              </div>

              {/* Stat card */}
              <div className="lg:w-48 flex-shrink-0">
                <div className="rounded-xl p-6 text-center
                  bg-muted dark:bg-[#0f1416]
                  border border-border dark:border-white/10"
                >
                  <p
                    className="text-4xl font-extrabold leading-none"
                    style={{ color: "#41ffca" }}
                  >
                    {finding.stat}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-wider
                    text-muted-foreground dark:text-white/60"
                  >
                    {finding.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFindingsSection;
