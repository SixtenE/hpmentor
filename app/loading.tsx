/**
 * Loading component shown during page transitions and data fetching
 * Server Component - pure UI with no client-side state
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex flex-col items-center">
        {/* Animated loading spinner */}
        <div className="mb-4 size-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        <p className="text-lg font-medium text-white/80">Laddar...</p>
      </div>
    </div>
  );
}

