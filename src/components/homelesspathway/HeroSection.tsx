import { Download } from "lucide-react";
import { Button } from "@/components/homelesspathway/ui/button";
import coverImage from "@/components/homelesspathway/assets/pathwayscover.jpg";


const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center py-20 px-6
      bg-background dark:bg-[#0f1212]"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            {/* Title */}
            <h1 className="hero-title text-foreground dark:text-white">
              HOMELESSNESS AUDIT:
              <br />
              <span style={{ color: "#41ffca" }}>
                PATHWAYS TO PERMANENT HOUSING
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg max-w-xl leading-relaxed
              text-muted-foreground dark:text-gray-300"
            >
              Performance audit of LAHSA&apos;s and the City of Los Angeles&apos;s
              performance transitioning people from interim housing to permanent
              housing. The audit covers City-funded interim housing sites over a
              5-year scope period, Fiscal Years 2019–2023.
            </p>

            {/* CTA */}
            <Button
              size="lg"
              className="gap-2 font-semibold text-black"
              style={{ backgroundColor: "#41ffca" }}
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

          {/* Image */}
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
