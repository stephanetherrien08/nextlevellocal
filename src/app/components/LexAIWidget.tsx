'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

const MODE = process.env.NEXT_PUBLIC_LEXAI_MODE ?? 'inline'; // 'inline' | 'floating'
const BOT_ID = '52788';

export default function LexAIWidget() {
  // closed by default; remember user choice
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lexai_open') : null;
    setOpen(saved ? saved === '1' : false);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lexai_open', open ? '1' : '0');
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (MODE === 'floating') {
    // Aminos floating widget (use when allowed)
    return (
      <>
        <Script
          src="https://app.aminos.ai/js/chat_plugin.js"
          strategy="afterInteractive"
          data-bot-id={BOT_ID}
        />
      </>
    );
  }

  // Inline form (always keep #chat_form in DOM so the script can initialize)
  return (
    <>
      {/* Launcher bubble */}
      <button
        id="lexai_launcher"
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat container */}
      <div id="lexai_container" data-open={open ? '1' : '0'} role="dialog" aria-label="LexAI chat">
        <div id="lexai_header">
          <span>LexAI</span>
          <button
            id="lexai_close"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
        <div id="lexai_body">
          <div id="chat_form" />
        </div>
      </div>

      <Script
        src="https://app.aminos.ai/js/chat_form_plugin.js"
        strategy="afterInteractive"
        data-bot-id={BOT_ID}
      />
    </>
  );
}
