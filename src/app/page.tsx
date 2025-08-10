export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Local visibility, <span className="text-sky-600">done right</span>.
          </h1>
          <p className="mt-4 text-slate-600">
            We build lean, transparent AI systems—no surprise fees. Chat with LexAI or try LocalBoost to
            generate posts your customers will actually see.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/localboost/landing" className="px-4 py-2 rounded bg-slate-900 text-white hover:bg-slate-800">Explore LocalBoost</a>
            <a href="#contact" className="px-4 py-2 rounded border border-slate-300 hover:bg-slate-50">Talk to us</a>
          </div>
        </div>
        <div className="rounded-xl border p-6">
          <p className="text-sm text-slate-500">Psst—LexAI is bottom-right ↘</p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
            <li>No pageview overages</li>
            <li>Vercel + Supabase (transparent pricing)</li>
            <li>Inline or floating chat (Aminos)</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="mt-20">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-slate-600 mt-2">Drop your email and we’ll get back within a business day.</p>
        <form className="mt-6 grid gap-3 max-w-lg">
          <input className="border rounded px-3 py-2" placeholder="Your name" />
          <input className="border rounded px-3 py-2" placeholder="Email" type="email" />
          <textarea className="border rounded px-3 py-2" placeholder="Tell us about your project" rows={4} />
          <button className="px-4 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 w-fit">Send</button>
        </form>
      </section>
    </main>
  );
}
