"use client";

import { useEffect, useState } from "react";

export default function LegalPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
    >
      <div className="max-w-4xl space-y-12">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Legal & Disclosures
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Important information about the use of this platform
          </p>
        </div>

        {/* Research-Only Disclaimer */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Research-Only Disclaimer
          </h2>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="leading-relaxed text-muted-foreground">
              Macro Bias is a research and educational platform. All content,
              data, analyses, regime classifications, and performance metrics
              presented on this platform are for informational and research
              purposes only. The platform is designed to illustrate systematic
              approaches to macro regime analysis and should not be construed as
              a complete investment program or strategy.
            </p>
          </div>
        </section>

        {/* No Investment Advice */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            No Investment Advice
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Nothing on this platform constitutes investment advice, a
              recommendation to buy or sell any security, or an offer or
              solicitation to invest in any fund, product, or strategy. Users
              should:
            </p>
            <ul className="list-inside space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>
                  Consult with qualified financial advisors before making any
                  investment decisions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>
                  Conduct their own due diligence on any investment or strategy
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>
                  Consider their own financial situation, risk tolerance, and
                  investment objectives
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>
                  Understand that leveraged products carry significant risks
                  including potential loss of principal
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Backtest Limitations */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Backtest Limitations
          </h2>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
            <p className="leading-relaxed text-amber-200">
              <strong>Important:</strong> All performance data shown on this
              platform is backtested and hypothetical. Backtested performance
              has inherent limitations:
            </p>
            <ul className="mt-4 list-inside space-y-2 text-amber-200/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>It is prepared with the benefit of hindsight</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>It may not reflect the impact of material market factors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>
                  Actual trading would have resulted in different outcomes due
                  to slippage, fees, and execution timing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>
                  Past performance is not indicative of future results
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Data Sources */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Data Sources
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Data used in our analyses and displays comes from various
              third-party sources believed to be reliable. However, we make no
              representations or warranties as to the accuracy, completeness, or
              timeliness of such information. Data providers include:
            </p>
            <ul className="list-inside space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>Major financial data vendors for market prices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>Central bank publications for monetary data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>Government statistical agencies for economic data</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Conflicts of Interest */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Conflicts of Interest
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Users should be aware that the operators of this platform, their
              affiliates, and related parties may:
            </p>
            <ul className="list-inside space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>
                  Hold positions in securities mentioned or analyzed on the
                  platform
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>
                  Trade in the same direction as or against regime signals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>
                  Have financial interests in products or instruments discussed
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                <span>
                  Receive compensation from third parties related to content
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Future Subscription Notice */}
        <section>
          
          
        </section>

        {/* Contact */}
        <section className="border-t border-border pt-8">
          
          <p className="mt-2 text-xs text-muted-foreground">
            Last updated: February 2026
          </p>
        </section>
      </div>
    </div>
  );
}
