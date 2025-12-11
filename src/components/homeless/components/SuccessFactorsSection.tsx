import { Users, MessageCircle, Home, Brain, Briefcase } from "lucide-react";

const factors = [
  {
    icon: Users,
    title: "Consistent Case Management",
  },
  {
    icon: MessageCircle,
    title: "Communicative Case Management",
  },
  {
    icon: Home,
    title: "Housing Navigation",
  },
  {
    icon: Brain,
    title: "Mental Health Services",
  },
  {
    icon: Briefcase,
    title: "Job Training",
  },
];

const SuccessFactorsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="section-title text-foreground mb-4">
            HOW WERE PEOPLE <span className="text-primary">SUCCESSFULLY HOUSED?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            People who were successfully housed were most impacted by high quality service 
            and resources that bring stability.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {factors.map((factor, index) => (
            <div 
              key={index} 
              className="finding-card text-center group hover:border-primary transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <factor.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">{factor.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessFactorsSection;
