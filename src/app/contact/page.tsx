import { CiButton } from '@/components/ui/CiButton'

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="ci-page-header">Contacte-moi</h1>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded px-3 py-2"
            placeholder="Ton nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded px-3 py-2"
            placeholder="ton@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border rounded px-3 py-2"
            rows={5}
            placeholder="Ton message..."
          />
        </div>

        <CiButton>Envoyer</CiButton>
      </form>
    </main>
  )
}
