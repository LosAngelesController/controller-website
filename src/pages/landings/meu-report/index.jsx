import Navbar from '@/components/Navbar';
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-dark py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight text-foreground">
                  Audit: LAPD&apos;s Compliance with Military Equipment State Law{" "}
                  <span className="text-primary">AB 481</span>
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-prose">
                  Performance audit of the LAPD&apos;s compliance with California state law AB 481.
                  (AB 481&apos;s purpose is to bring public oversight to the funding, acquisition
                  and use of military equipment by law enforcement agencies.)
                </p>

                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent"
                  asChild
                >
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Press%20Releases%2FAB481%20Performance%20Audit%20-%2008272024.pdf?alt=media&token=c0abff89-8daf-445f-931c-46bf80236862"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </a>
                </Button>
              </div>

              <div className="flex justify-center md:justify-end">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/ab481-cover-bw.jpg?alt=media&token=5f1ae7fc-9d7d-4850-977e-06038805a6da"
                  alt="LAPD AB 481 Compliance Audit Report Cover"
                  className="w-full max-w-md rounded-xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="section-light py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-12 text-foreground">
              Key Findings
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-primary text-lg font-medium leading-relaxed">
                  LAPD is failing to fully comply with state law AB 481 to bring transparency
                  and accountability to its military equipment usage and policy.
                </p>

                <p className="text-primary font-semibold mt-8 mb-4">
                  Specifically, LAPD is failing to:
                </p>

                <ul className="space-y-4">
                  {[
                    "Effectively track military equipment like grenades and tear gas",
                    "Detail when, why, and how military equipment was used",
                    "Keep up with other California law enforcement agencies",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="stat-card">
                  <div className="text-2xl md:text-3xl font-display text-foreground mb-2">
                    AB 481
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    In the fall of 2021, California Assembly Bill (AB) 481 was signed into law with the intent and
                    purpose of bringing public oversight and accountability to the funding, acquisition and use of
                    military equipment.
                  </p>
                </div>

                <div className="stat-card">
                  <div className="text-2xl md:text-3xl font-display text-foreground mb-2">
                    Military Equipment
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Includes everything from drones and high-caliber firearms to flashbang grenades and battering rams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="section-dark py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-12 text-foreground">
              Key Recommendations
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <ul className="space-y-6">
                {[
                  "Keep accurate inventory",
                  "Disclose military equipment usage",
                  "Reduce risk of reporting inaccuracies",
                  "Improve the public's ability to engage with and impact policies",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-primary text-lg">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="stat-card">
                <h3 className="text-primary font-semibold text-lg mb-4 uppercase tracking-wide">
                  Path to Compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  These recommendations aim to bring LAPD into full compliance with AB 481,
                  ensuring public oversight of military equipment funding, acquisition, and usage.
                  Implementation will require systematic changes to inventory management,
                  reporting procedures, and community engagement practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-6">
            <p className="text-muted-foreground text-sm">
              © 2025 LAPD AB 481 Compliance Audit. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
