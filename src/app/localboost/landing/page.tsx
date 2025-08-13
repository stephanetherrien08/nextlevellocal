export default function LocalBoostLanding() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">LocalBoost</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Generate on-brand posts for Google and Facebook in seconds. No direct platform sync — clean, copy-ready output you can post anywhere.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card pad">
            <h3 className="text-xl font-semibold">Starter</h3>
            <ul className="mt-3 text-slate-700 list-disc pl-5 space-y-2">
              <li>Google Post generator</li>
              <li>Facebook Page post generator</li>
              <li>Copy to clipboard</li>
            </ul>
            <a href="/localboost" className="mt-6 inline-block btn btn-primary">Try it</a>
          </div>
          <div className="card pad">
            <h3 className="text-xl font-semibold">Premium</h3>
            <ul className="mt-3 text-slate-700 list-disc pl-5 space-y-2">
              <li>Saved presets and history</li>
              <li>Brand voice tuning</li>
              <li>Multi-variant generation</li>
            </ul>
            <button className="mt-6 btn btn-ghost">Request access</button>
          </div>
        </div>
      </div>
    </main>
  );
}

