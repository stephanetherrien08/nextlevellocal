export default function ProcessPage() {
  const steps = [
    { t: 'Initial Discovery', d: 'Quick call to understand goals and constraints.' },
    { t: 'Solution Planning', d: 'Map the exact system you need — no bloat.' },
    { t: 'Presentation', d: 'Clear proposal with deliverables, timeline, costs.' },
    { t: 'Agreement', d: 'Lock scope, milestones, and kickoff.' },
    { t: 'Project Planning', d: 'Content, integrations, responsibilities finalized.' },
    { t: 'Implementation', d: 'Build, connect LexAI, configure LocalBoost.' },
    { t: 'Project Review', d: 'Live demo, polish, acceptance.' },
    { t: 'Ongoing Support', d: 'Monthly updates, visibility boosts, check-ins.' },
  ];

  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">Your Project Journey</h1>
        <div className="timeline grid md:grid-cols-2 gap-10">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step-dot" />
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-slate-700 max-w-prose">
          Simple and transparent. You always know what is next, who owns it, and when we deliver — with no surprise fees.
        </p>
      </div>
    </main>
  );
}

