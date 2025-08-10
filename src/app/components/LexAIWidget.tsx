'use client';
import Script from 'next/script';

const MODE = process.env.NEXT_PUBLIC_LEXAI_MODE ?? 'inline'; // 'inline' | 'floating'
const BOT_ID = '52788';

export default function LexAIWidget() {
  if (MODE === 'floating') {
    return (
      <Script
        src="https://app.aminos.ai/js/chat_plugin.js"
        strategy="afterInteractive"
        data-bot-id={BOT_ID}
      />
    );
  }
  return (
    <>
      <div id="lexai_container"><div id="chat_form" /></div>
      <Script
        src="https://app.aminos.ai/js/chat_form_plugin.js"
        strategy="afterInteractive"
        data-bot-id={BOT_ID}
      />
    </>
  );
}
