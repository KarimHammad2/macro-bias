"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { getEmail, getInitials, logout } from "@/lib/auth";
import { macroData } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

function RegimeBadge({ regime }: { regime: string }) {
  const colors = {
    "RISK-ON": "bg-positive/20 text-positive border-positive/30",
    NEUTRAL: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "RISK-OFF": "bg-negative/20 text-negative border-negative/30",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
        colors[regime as keyof typeof colors] || colors.NEUTRAL
      }`}
    >
      {regime}
    </span>
  );
}

export function AppHeader() {
  const router = useRouter();
  const email = getEmail() || "user@example.com";
  const initials = getInitials(email);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 lg:hidden">
        <div className="relative h-[42px] w-[54px] shrink-0">
          <Image
            src="/logo.png"
            alt=""
            width={54}
            height={42}
            className="object-contain"
            aria-hidden="true"
          />
        </div>
        <span className="text-sm font-semibold tracking-wide text-foreground">
          MACRO BIAS
        </span>
      </div>

      <div className="hidden items-center gap-4 lg:flex">
        <span className="text-xs text-muted-foreground">Current Regime:</span>
        <RegimeBadge regime={macroData.currentRegime} />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium text-foreground">
            {initials}
          </div>
          <span className="hidden text-sm text-muted-foreground md:block">
            {email}
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="text-muted-foreground hover:text-foreground"
        >
          Log out
        </Button>
      </div>
    </header>
  );
}
