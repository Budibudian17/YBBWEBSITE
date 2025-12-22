export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-pink-200 border-t-pink-600" />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink-700">Loading...</p>
      </div>
    </div>
  );
}
