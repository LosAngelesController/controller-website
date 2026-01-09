'use client';

import * as React from 'react';
import Navbar from '@/components/Navbar';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reportCover =
  'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/unnamed%20(3).png?alt=media&token=ab2d7ad3-fb55-4005-a832-d0feccff40a2';

const Index = () => {
  // Prevent hydration mismatch (theme / client-only logic in Navbar or elsewhere)
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a stable skeleton that matches SSR output
    return (
      <>
        <div className="h-16 border-b border-border" />
        <div className="min-h-screen bg-background" />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-dark py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h1 className="font-display text-foreground text-4xl leading-tight dark:text-white md:text-5xl lg:text-6xl">
                  Fraud, Waste &amp; Abuse Investigative Report:{' '}
                  <span className="text-primary">LADOT Red Zone Parking Tickets</span>
                </h1>

                <p className="text-muted-foreground max-w-prose text-lg leading-relaxed dark:text-white">
                  The Controller&apos;s Office Fraud, Waste and Abuse (FWA) Unit conducted an
                  investigation after receiving a hotline tip that a Los Angeles Department
                  of Transportation (LADOT) traffic officer issued fraudulent Red Curb No
                  Stopping zone (&quot;red zone&quot;) parking tickets.
                </p>

                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent dark:text-white"
                  asChild
                >
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Investigative%20Report%20LADOT%20Traffic%20Officer%20-%20Final%20-%2004-29-2025.pdf?alt=media&token=7d1e03a6-8759-4ca8-b93d-66f27124d839"
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
                  src={reportCover}
                  alt="LADOT Red Zone Parking Tickets Investigation Report Cover"
                  className="border-border w-full max-w-md rounded-xl border shadow-2xl"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="py-16 dark:bg-[#212121] md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-foreground mb-12 text-3xl dark:text-white md:text-4xl lg:text-5xl">
              Report Highlights
            </h2>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">

                <h2 className="text-xl font-semibold text-foreground dark:text-white">
                  Report Highlights
                </h2>

                <ul className="list-disc ml-6 space-y-5 marker:text-[#41ffca]">

                  {/* Bullet 1 */}
                  <li>
                    <span className="text-foreground dark:text-white">
                      The Controller&apos;s Office found that{" "}
                      <span className="font-bold">
                        the traffic officer improperly issued 163 parking tickets
                      </span>.
                    </span>

                    {/* Open-circle sub-bullet */}
                    <ul className="list-[circle] ml-8 mt-3 space-y-2 marker:text-[#41ffca]">
                      <li className="text-foreground dark:text-white">
                        The traffic officer repeatedly issued tickets where red curbs weren&apos;t visible
                        or where red zone street signs weren&apos;t readable, and they falsified locations
                        of red zone parking violations.
                      </li>
                    </ul>
                  </li>

                  {/* Bullet 2 */}
                  <li>
                    <span className="text-foreground dark:text-white">
                      The Controller&apos;s Office found 2 instances where these tickets were contested and
                      should have been canceled, but{" "}
                      <span className="font-bold">
                        LADOT still wrongly deemed the tickets as &ldquo;Valid&rdquo;
                      </span>.
                    </span>
                  </li>

                  {/* Bullet 3 */}
                  <li>
                    <span className="text-foreground dark:text-white">
                      As a result of the Controller&apos;s Office&apos;s findings,{" "}
                      <span className="font-bold">
                        LADOT canceled & refunded all 163 tickets
                      </span>{" "}
                      ($22,571 in refunds).
                    </span>
                  </li>

                </ul>

              </div>


              <div className="space-y-6 dark:text-zinc-300">
                <div className="stat-card border border-zinc-600 p-4 dark:bg-black/30">
                  <div className="font-display text-foreground mb-2 text-2xl md:text-3xl">
                    163 Tickets
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Total number of improperly issued parking tickets identified by the Controller&apos;s Office
                    investigation.
                  </p>
                </div>

                <div className="stat-card border border-zinc-600 p-4 dark:bg-black/30">
                  <div className="font-display text-foreground mb-2 text-2xl md:text-3xl">
                    $22,571 Refunded
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Total amount refunded to drivers after LADOT canceled all 163 fraudulent tickets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="section-dark py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-foreground mb-12 text-3xl dark:text-white md:text-4xl lg:text-5xl">
              Key Recommendations
            </h2>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-primary text-lg font-medium leading-relaxed dark:text-[#41ffca] max-w-3xl">
                  It&apos;s crucial for LADOT to issue tickets correctly, proactively identify problematic tickets,
                  and provide people a fair process for contesting problematic tickets.
                </p>

                <p className="text-primary mb-4 mt-8 font-semibold dark:text-[#41ffca]">
                  The Controller&apos;s Office recommended that LADOT improve its oversight of parking enforcement
                  by:
                </p>

                <ul className="space-y-6">
                  {[
                    'Conducting audits',
                    "Creating an accessible database of traffic officers' curb maintenance requests",
                    'Assessing its Initial Review process',
                    'Developing metrics to identify outliers of contested citation data',
                  ].map((t) => (
                    <li key={t} className="ml-5 list-disc dark:text-[#41ffca]">
                      <span className="text-primary text-lg">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optional right-side card
              <div className="stat-card border border-zinc-600 p-4 dark:bg-black/30">
                <h3 className="text-primary mb-4 text-lg font-semibold uppercase tracking-wide dark:text-[#41ffca]">
                  Oversight Improvements
                </h3>
                <p className="text-muted-foreground leading-relaxed dark:text-zinc-300">
                  These recommendations aim to strengthen LADOT’s enforcement oversight,
                  improve review processes, and reduce the risk of improper citations.
                </p>
              </div>
              */}
            </div>
          </div>
        </section>

        <footer className="border-border border-t py-8">
          <div className="container mx-auto px-6">
            <p className="text-muted-foreground text-sm dark:text-zinc-200">
              © 2026 Los Angeles City Controller. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
