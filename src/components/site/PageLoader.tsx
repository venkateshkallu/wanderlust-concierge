import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide loader after hydration
    const timer = setTimeout(() => setShow(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-flex h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
