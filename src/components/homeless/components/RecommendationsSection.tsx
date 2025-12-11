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
    <section className="py-20 px-6 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-primary mb-6">RECOMMENDATIONS</h2>
        
        <p className="text-muted-foreground mb-10 max-w-3xl">
          Recommendations are in addition to — not in place of — building more permanent housing. 
          <span className="text-primary font-medium"> The most critical solution for homelessness is more permanent housing.</span>
        </p>
        
        <div className="space-y-4 max-w-3xl">
          {recommendations.map((rec, index) => (
            <div key={index} className="recommendation-item">
              <div className="bullet-primary" />
              <p className="text-foreground">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
