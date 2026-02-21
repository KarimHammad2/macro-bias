"use client";

import { useEffect, useState } from "react";

interface TableOfContentsItem {
  id: string;
  title: string;
}

const tocItems: TableOfContentsItem[] = [
  { id: "what-is", title: "What is Macro Bias" },
  { id: "what-not", title: "What Macro Bias is Not" },
  { id: "core-inputs", title: "Core Inputs" },
  { id: "why-no-futures", title: "Why We Avoid Futures" },
  { id: "update-frequency", title: "Update Frequency" },
];

export default function FrameworkPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("what-is");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
    >
      <div className="flex gap-12">
        {/* Main content */}
        <div className="flex-1 space-y-12">
          {/* Page header */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Framework & Methodology
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Understanding the Macro Bias systematic overlay approach
            </p>
          </div>

          {/* What is Macro Bias */}
          <section id="what-is" className="scroll-mt-24">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              What is Macro Bias
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Macro Bias is a systematic macro regime overlay designed to
                provide actionable signals for portfolio exposure management.
                The framework synthesizes multiple data streams including
                macroeconomic indicators, liquidity conditions, and volatility
                regimes to classify market environments.
              </p>
              <p className="leading-relaxed">
                The core output is a regime classification (Risk-On, Neutral, or
                Risk-Off) accompanied by a continuous score ranging from -1 to
                +1. This allows for both discrete regime-based decisions and
                more granular position sizing.
              </p>
              <p className="leading-relaxed">
                The methodology is designed for investors who seek to reduce
                drawdowns while participating in market upside, particularly
                those comfortable with leveraged exposure during favorable
                conditions.
              </p>
            </div>
          </section>

          {/* What Macro Bias is Not */}
          <section id="what-not" className="scroll-mt-24">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              What Macro Bias is Not
            </h2>
            <ul className="list-inside space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-negative" />
                <span>
                  Not a trading system or specific trade recommendation service
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-negative" />
                <span>Not investment advice or financial guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-negative" />
                <span>
                  Not a guaranteed system for avoiding all market losses
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-negative" />
                <span>Not suitable for all investors or risk profiles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-negative" />
                <span>Not a substitute for professional financial advice</span>
              </li>
            </ul>
          </section>

          {/* Core Inputs */}
          <section id="core-inputs" className="scroll-mt-24">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Core Inputs
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  Macro Environment
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Economic growth indicators, inflation dynamics, central bank
                  policy signals, and cross-asset correlations inform the
                  broader economic context.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  Liquidity Conditions
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Central bank balance sheets, credit spreads, funding market
                  stress indicators, and cross-border capital flows drive
                  liquidity assessment.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  Volatility Regime
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Implied vs realized volatility, term structure dynamics,
                  correlation regimes, and tail risk indicators determine market
                  stress levels.
                </p>
              </div>
            </div>
          </section>

          {/* Why We Avoid Futures */}
          <section id="why-no-futures" className="scroll-mt-24">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Why We Avoid Futures
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                A key design decision is the preference for leveraged ETFs/ETPs
                over futures contracts. This stems from a fundamental difference
                in cost structure that has significant implications for
                long-term compounding.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">
                  Futures/Perpetuals Cost Structure:
                </strong>{" "}
                Time-based financing costs accumulate continuously. The longer
                you hold, the more you pay, regardless of how often you adjust
                positions. This is particularly punitive for regime-following
                strategies that may hold positions for extended periods.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">
                  Leveraged ETF/ETP Cost Structure:
                </strong>{" "}
                Decision-based costs that primarily manifest during rebalancing.
                If you hold through a regime without changes, your cost is
                minimal. This aligns better with our methodology.
              </p>
            </div>

            {/* Comparison table */}
            <div className="mt-6 overflow-x-auto rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Instrument Type
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Illustrative Annual Cost
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Cost Driver
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="px-6 py-4 text-sm text-foreground">
                      Futures / Perpetuals
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-sm text-negative">
                      20-35% p.a.
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      Time-based (exposure × time)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-foreground">
                      Leveraged ETFs/ETPs
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-sm text-positive">
                      2-4% p.a.
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      Decision-based (rebalancing events)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Note: Costs are illustrative and vary by market conditions,
              specific instruments, and broker arrangements.
            </p>
          </section>

          {/* Update Frequency */}
          <section id="update-frequency" className="scroll-mt-24">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Update Frequency
            </h2>
            <ul className="list-inside space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-positive" />
                <span>
                  <strong className="text-foreground">Daily Score:</strong>{" "}
                  Updated at market close each trading day based on intraday
                  data
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-positive" />
                <span>
                  <strong className="text-foreground">Weekly Review:</strong>{" "}
                  Full model recalibration and regime assessment every weekend
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-positive" />
                <span>
                  <strong className="text-foreground">
                    Regime Change Alerts:
                  </strong>{" "}
                  Immediate notification when regime classification changes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-positive" />
                <span>
                  <strong className="text-foreground">Monthly Reports:</strong>{" "}
                  Comprehensive performance and attribution analysis
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* Sticky table of contents */}
        <aside className="hidden w-48 flex-shrink-0 lg:block">
          <div className="sticky top-24">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              On this page
            </h3>
            <nav>
              <ul className="space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block text-sm transition-colors ${
                        activeSection === item.id
                          ? "font-medium text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
