'use client';

export function CompleteProfile() {
  const items = [
    { label: 'General Information', value: '5/6', done: false },
    { label: 'Work Experience', value: '1/3', done: false },
    { label: 'Profile Photo', value: '1/1', done: true },
    { label: 'Cover Photo', value: '1/1', done: true },
  ];

  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-4">
      <h3 className="text-lg font-semibold text-neutral-800 mb-3">Complete Your Profile</h3>
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24">
          <svg viewBox="0 0 36 36" className="h-24 w-24">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none" stroke="#eee" strokeWidth="3" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="73,100" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-neutral-800">73%</span>
        </div>
        <div className="flex-1 space-y-2">
          {items.map((it, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${it.done ? 'bg-green-500' : 'bg-neutral-300'}`} />
                <span className="text-sm text-neutral-700">{it.label}</span>
              </div>
              <span className="text-xs text-neutral-500">{it.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}