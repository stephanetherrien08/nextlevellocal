'use client';
import Script from 'next/script';

export default function LexAIScript() {
  return (
    <Script
      src="https://app.aminos.ai/js/chat_plugin.js"
      strategy="afterInteractive"
      data-bot-id="52788"
    />
  );
}
