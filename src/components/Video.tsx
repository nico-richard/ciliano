export default function Video() {
  return (
    <div className="w-full px-4 py-8 flex justify-center bg-background">
      <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // ← remplace par ton lien
          title="Présentation du coaching"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
