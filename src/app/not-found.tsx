import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <main
        className="bg-primary relative flex flex-col overflow-hidden text-center text-white"
        style={
          {
            "--u": "max(calc(min(100vw, 1440px) / 1440), 0.2px)",
            minHeight: "max(calc(957 * var(--u)), 100svh)",
            backgroundImage:
              "linear-gradient(to right, rgb(255 255 255 / .12) 2px, transparent 2px), linear-gradient(to bottom, rgb(255 255 255 / .12) 2px, transparent 2px)",
            backgroundSize: "120px 120px",
            backgroundPosition: "0 118px",
          } as React.CSSProperties
        }
      >
        <Header />

        <div
          className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-4 pb-12 xl:justify-start"
          style={{ paddingTop: "max(calc(160 * var(--u)), 104px)" }}
        >
          {/* 404 — gradient fade, h1 এর পিছনে */}
          <p
            aria-hidden
            className="font-heading bg-clip-text font-semibold text-transparent select-none"
            style={{
              width: "calc(920 * var(--u))",
              height: "calc(480 * var(--u))",
              fontSize: "calc(480 * var(--u))",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              // CSS শেষ অক্ষরের পরেও letter-spacing যোগ করে → text ডানে সরে; Figma তে center ঠিক থাকে
              transform: "translateX(-0.01em)",
              backgroundImage:
                "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            404
          </p>

          <div
            className="relative z-10 flex w-full flex-col items-center"
            style={{ marginTop: "calc(-119 * var(--u))" }}
          >
            <h1
              className="font-heading font-semibold text-white max-md:text-balance"
              style={{
                width: "min(100%, max(calc(935 * var(--u)), 340px))",
                fontSize: "max(calc(72 * var(--u)), 32px)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              <span className="sr-only">404. </span>
              The page you are looking for doesn’t exist
            </h1>

            <p
              className="text-base leading-[160%] text-[#E5E6E8] sm:text-[18px]"
              style={{ marginTop: "max(calc(32 * var(--u)), 20px)" }}
            >
              Try to use a correct url or go back to homepage to start again
            </p>

            <Button
              href="/"
              className="h-[46px] px-6 text-[18px] leading-[120%] text-[#242528]"
              style={{ marginTop: "max(calc(32 * var(--u)), 20px)" }}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
