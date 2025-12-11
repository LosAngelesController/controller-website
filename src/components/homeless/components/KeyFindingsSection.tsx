const findings = [
  {
    stat: "1 in 4",
    label: "BEDS UNUSED",
    description: "costing taxpayers an estimated $218 million between FY 2019-FY 2023.",
    boldStart: "1 in 4 City-funded interim housing beds went unused",
  },
  {
    stat: "1 in 3",
    label: "COULDN'T SECURE A BED",
    description: "during FY22 and FY23. (16,000 people were removed from the shelter bed waiting list after an average of six months.)",
    boldStart: "Nearly 1 in 3 people who expressed interest in a shelter bed were unable to secure one",
  },
  {
    stat: "50%+",
    label: "RETURNED TO HOMELESSNESS",
    description: "or unknown destinations.",
    boldStart: "More than 50% of people exiting City-funded interim housing returned to homelessness",
  },
  {
    stat: "<20%",
    label: "SECURED PERMANENT HOUSING",
    description: "",
    boldStart: "Less than 1 in 5 people in City-funded interim housing secured permanent housing.",
  },
];

const KeyFindingsSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-foreground mb-12">KEY FINDINGS</h2>
        
        <div className="space-y-8">
          {findings.map((finding, index) => (
            <div key={index} className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex gap-4 items-start flex-1">
                <div className="bullet-primary flex-shrink-0 mt-2" />
                <p className="text-foreground leading-relaxed">
                  <span className="font-semibold">{finding.boldStart}</span>{finding.description && ` ${finding.description}`}
                </p>
              </div>
              
              <div className="finding-card lg:w-48 flex-shrink-0 p-5">
                <p className="stat-number text-3xl md:text-4xl">{finding.stat}</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider leading-tight">
                  {finding.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFindingsSection;
