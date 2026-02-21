"use client";

import { useEffect, useState } from "react";
import {
  yearlyPerformance,
  performanceMetrics,
  rollingPerformance,
} from "@/lib/mock-data";
import { StatCard } from "@/components/ui/stat-card";
import { EquityCurveChart } from "@/components/charts/equity-curve-chart";
import { DrawdownChart } from "@/components/charts/drawdown-chart";
import { cn } from "@/lib/utils";

export default function PerformancePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatPercent = (value: number) =>
    `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;

  return (
    <div
      className={`space-y-8 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
    >
      {/* Page header */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold text-foreground">
            Historical Performance
          </h1>
          <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
            Backtested
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Backtested performance data from 2009 to present
        </p>
      </div>

      {/* Disclaimer */}
      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
        <p className="text-sm text-amber-200">
          Data shown is backtested and for research illustration only. Past
          performance is not indicative of future results. This is not
          investment advice.
        </p>
        <p className="mt-2 text-xs text-amber-200/80">
          Live performance: not available.
        </p>
      </div>

      {/* Overview metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Macro Bias CAGR (2009-2025)"
          value={formatPercent(performanceMetrics.totalCAGR_macroBias)}
          subtitle="Compound Annual Growth Rate"
          variant="positive"
        />
        <StatCard
          title="S&P 500 CAGR (2009-2025)"
          value={formatPercent(performanceMetrics.totalCAGR_sp500)}
          subtitle="Benchmark CAGR"
        />
        <StatCard
          title="Average Annual Alpha"
          value={formatPercent(performanceMetrics.averageAnnualAlpha)}
          subtitle="Excess return vs benchmark"
          variant="positive"
        />
      </div>

      {/* Equity curve chart */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-1 text-lg font-semibold text-foreground">
          Equity Curve Comparison
        </h2>
        <p className="mb-4 text-xs text-muted-foreground">
          Index values starting at 100 (January 2009)
        </p>
        <EquityCurveChart />
      </div>

      {/* Drawdown chart */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-1 text-lg font-semibold text-foreground">
          Maximum Drawdown Comparison
        </h2>
        <p className="mb-4 text-xs text-muted-foreground">
          Peak-to-trough decline during each calendar year
        </p>
        <DrawdownChart />
      </div>

      {/* Performance breakdown */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Performance Breakdown
          </h2>
          <p className="text-sm text-muted-foreground">
            Rolling performance over 1Y, 3Y, 5Y, and 10Y periods
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Period
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Macro Bias
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  S&P 500
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Alpha
                </th>
              </tr>
            </thead>
            <tbody>
              {(["1Y", "3Y", "5Y", "10Y"] as const).map((period) => {
                const data = rollingPerformance[period];
                return (
                  <tr
                    key={period}
                    className="border-b border-border/50 transition-colors hover:bg-secondary/30"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {period}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-sm font-semibold text-positive">
                      {formatPercent(data.macroBias)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-sm text-muted-foreground">
                      {formatPercent(data.sp500)}
                    </td>
                    <td
                      className={cn(
                        "px-6 py-4 text-right font-mono text-sm font-semibold",
                        data.alpha >= 0 ? "text-positive" : "text-negative"
                      )}
                    >
                      {formatPercent(data.alpha)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Yearly performance table */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Yearly Performance Breakdown
          </h2>
          <p className="text-sm text-muted-foreground">
            Annual returns comparison between Macro Bias and S&P 500
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Year
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Macro Bias
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  S&P 500
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Alpha
                </th>
              </tr>
            </thead>
            <tbody>
              {yearlyPerformance.map((year) => (
                <tr
                  key={year.year}
                  className="border-b border-border/50 transition-colors hover:bg-secondary/30"
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {year.year}
                  </td>
                  <td
                    className={cn(
                      "px-6 py-4 text-right font-mono text-sm font-semibold",
                      year.macroBias >= 0 ? "text-positive" : "text-negative"
                    )}
                  >
                    {formatPercent(year.macroBias)}
                  </td>
                  <td
                    className={cn(
                      "px-6 py-4 text-right font-mono text-sm",
                      year.sp500 >= 0
                        ? "text-muted-foreground"
                        : "text-negative"
                    )}
                  >
                    {formatPercent(year.sp500)}
                  </td>
                  <td
                    className={cn(
                      "px-6 py-4 text-right font-mono text-sm font-semibold",
                      year.alpha >= 0 ? "text-positive" : "text-negative"
                    )}
                  >
                    {formatPercent(year.alpha)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-secondary/30">
                <td className="px-6 py-4 text-sm font-bold text-foreground">
                  Average
                </td>
                <td className="px-6 py-4 text-right font-mono text-sm font-bold text-positive">
                  {formatPercent(
                    yearlyPerformance.reduce((sum, y) => sum + y.macroBias, 0) /
                      yearlyPerformance.length
                  )}
                </td>
                <td className="px-6 py-4 text-right font-mono text-sm font-bold text-muted-foreground">
                  {formatPercent(
                    yearlyPerformance.reduce((sum, y) => sum + y.sp500, 0) /
                      yearlyPerformance.length
                  )}
                </td>
                <td className="px-6 py-4 text-right font-mono text-sm font-bold text-positive">
                  {formatPercent(
                    yearlyPerformance.reduce((sum, y) => sum + y.alpha, 0) /
                      yearlyPerformance.length
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
