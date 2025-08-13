export default function Page() {
  return (
    <main>
      <section className="hero section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Local visibility, <span>done right</span>.
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              Lean, transparent AI systems — no surprise fees. Chat with LexAI or try LocalBoost to
              generate posts your customers actually see.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/localboost/landing" className="btn btn-primary">Explore LocalBoost</a>
              <a href="#contact" className="btn btn-ghost">Talk to us</a>
            </div>
            <div className="mt-6 text-sm text-slate-500">Psst — LexAI lives bottom-right.</div>
          </div>
          <div className="card pad">
            <h3 className="font-semibold">Why clients pick us</h3>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
              <li>No page-view overages</li>
              <li>Vercel + Supabase = transparent pricing</li>
              <li>Aminos chat (inline or floating)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-slate-600 mt-2">Drop your email and we will reply within a business day.</p>
          <form className="mt-6 grid gap-3 max-w-lg">
            <input placeholder="Your name" />
            <input placeholder="Email" type="email" />
            <textarea placeholder="Tell us about your project" rows={4} />
            <button className="btn btn-brand w-fit">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}

