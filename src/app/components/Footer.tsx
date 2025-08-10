'use client';

export default function Footer(){
  return (
    <footer className="footer section">
      <div className="container text-sm text-slate-500 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-between">
        <div>© {new Date().getFullYear()} NextLevelLocal</div>
        <div className="flex gap-4">
          <a href="/process">Process</a>
          <a href="/localboost/landing">LocalBoost</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

