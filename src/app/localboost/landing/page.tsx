export default function LocalBoostLanding() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">LocalBoost</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Generate on-brand posts for Google and Facebook in seconds. No direct platform sync—clean, copy-ready output to post anywhere.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-semibold">Starter</h3>
          <ul className="mt-3 text-slate-700 list-disc pl-5 space-y-2">
            <li>Google Post generator</li>
            <li>Facebook Page post generator</li>
            <li>Copy to clipboard</li>
          </ul>
          <a href="/localboost" className="mt-6 inline-block px-4 py-2 rounded bg-slate-900 text-white hover:bg-slate-800">Try it</a>
        </div>
        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-semibold">Premium</h3>
          <ul className="mt-3 text-slate-700 list-disc pl-5 space-y-2">
            <li>Saved presets & history</li>
            <li>Brand voice tuning</li>
            <li>Multi-variant generation</li>
          </ul>
          <button className="mt-6 px-4 py-2 rounded border border-slate-300 hover:bg-slate-50">Request access</button>
        </div>
      </div>
    </main>
  );
}
