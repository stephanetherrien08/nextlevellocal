'use client';
import Script from 'next/script';

export default function LexaiTest() {
  return (
    <main style={{ padding: 40 }}>
      <h1>LexAI Embedded Test</h1>
      <div id="chat_form" />
      <Script
        src="https://app.aminos.ai/js/chat_form_plugin.js"
        strategy="afterInteractive"
        data-bot-id="52788"
      />
    </main>
  );
}
