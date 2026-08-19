const WHATSAPP_NUMBER = "27787514006";
const PREFILLED_MESSAGE = "Hi, I'm interested in Bunny Trading mentorship.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Message Bunny Trading on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.6-1.21A9 9 0 1 0 12 3Z"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 8.8c0-.5.4-.9.9-.9h.7c.3 0 .5.2.6.5l.6 1.7c.1.2 0 .5-.1.6l-.6.7c.4.9 1.1 1.6 2 2l.7-.6c.2-.1.4-.2.6-.1l1.7.6c.3.1.5.3.5.6v.7c0 .5-.4.9-.9.9-3.3 0-6.3-3-6.3-6.3Z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
