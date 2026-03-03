"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { clearSession, getSessionEmail } from "@/lib/auth";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const email = getSessionEmail();

  const handleLogout = () => {
    clearSession();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-[#070f1d] text-slate-100">
      <AdminSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-[#0a1322]/90 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 sm:text-xs sm:tracking-[0.4em]">
                Admin Console
              </p>
              <h1 className="text-base font-semibold text-white sm:text-lg">
                Macro Bias
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-slate-800/60 bg-[#030712] px-3 py-2 text-[11px] text-slate-300 sm:px-4 sm:text-xs">
                Signed in as{" "}
                <span className="font-medium text-white">
                  {email ?? "Loading..."}
                </span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl border border-slate-800/60 bg-[#111827] px-3 py-2 text-[11px] text-slate-200 transition hover:border-slate-700/80 hover:bg-[#0b1527] sm:px-4 sm:text-xs"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
