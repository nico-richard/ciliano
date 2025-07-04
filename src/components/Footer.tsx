import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-yellow-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-[var(--color-background)] select-none">
          © 2025 Ciliano Coaching. Tous droits réservés.
        </p>
        <div className="flex gap-6 text-[var(--color-background)]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition hover:scale-120"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition hover:scale-120"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition hover:scale-120"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:scale-120"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
