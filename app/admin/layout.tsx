export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
      {children}
    </div>
  );
}