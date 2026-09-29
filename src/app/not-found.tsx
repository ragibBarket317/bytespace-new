import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-semibold">404</h1>
      <p>Page not found.</p>
      <Button href="/" variant="primary">
        Back to home
      </Button>
    </main>
  );
}
