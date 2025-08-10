export default function ProcessPage() {
  const steps = [
    { t: 'Initial Discovery', d: 'Quick call to understand goals and constraints.' },
    { t: 'Solution Planning', d: 'Map the exact system you need—no bloat.' },
    { t: 'Presentation', d: 'Clear proposal with deliverables, timeline, costs.' },
    { t: 'Agreement', d: 'Lock scope, milestones, and kickoff.' },
    { t: 'Project Planning', d: 'Content, integrations, responsibilities finalized.' },
    { t: 'Implementation', d: 'Build, connect LexAI, configure LocalBoost.' },
    { t: 'Project Review', d: 'Live demo, polish, acceptance.' },
    { t: 'Ongoing Support', d: 'Monthly updates, visibility boosts, check-ins.' },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10">Your Project Journey</h1>
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />
        <ul className="grid md:grid-cols-2 gap-12 relative">
          {steps.map((s, i) => (
            <li key={i} className="relative">
              <div className="absolute -left-4 md:left-auto md:-right-4 top-1 w-3 h-3 rounded-full bg-sky-500" />
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-slate-600">{s.d}</p>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-10 text-slate-700">
        We keep your project simple and transparent. You’ll always know what’s happening next and what it costs—no surprise fees.
      </p>
    </main>
  );
}
