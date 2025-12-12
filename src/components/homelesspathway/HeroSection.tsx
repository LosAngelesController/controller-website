import { Download } from "lucide-react";
import { Button } from "@/components/homelesspathway/ui/button";
import coverImage from "@/components/homelesspathway/assets/pathwayscover.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center py-20 px-6 bg-[#0f1212]">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">

            <h1 className="hero-title text-white">
              HOMELESSNESS AUDIT:
              <br />
              <span className="text-[#41ffca]">
                PATHWAYS TO PERMANENT HOUSING
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Performance audit of LAHSA's and the City of Los Angeles's performance
              transitioning people from interim housing to permanent housing. The audit
              covers City-funded interim housing sites over a 5-year scope period,
              Fiscal Years 2019-2023.
            </p>

            <Button
              size="lg"
              className="gap-2 font-semibold bg-[#41ffca] text-black hover:bg-[#35e6b8]"

              onClick={() =>
                window.open(
                  "https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/PH%20Pathways_LAHSA%20Final_12.10.2024.pdf?alt=media&token=0f6681b8-a28b-44ed-8bfa-e040fd2a127f",
                  "_blank"
                )
              }
            >
              <Download className="w-5 h-5" />
              Download Report
            </Button>
          </div>

          <img
            src={coverImage.src}
            alt="Homelessness Audit: Pathways to Permanent Housing cover"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
