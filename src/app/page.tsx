import Video from '@/components/Video'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-100 md:h-120 xl:h-150 2xl:h-170">
        <Image src="/banner.png" alt="main" fill className="object-cover" />
      </div>
      <div className="max-w-3xl mx-auto text-center px-4 py-10 select-none">
        <h1 className="text-4xl font-extrabold mb-4">Tu n&apos;es pas encore convaincu ?</h1>
        <h2 className="text-2xl font-semibold text-[var(--color-logo-red)] mb-8">
          Tu te demandes à quoi ça sert d’être coaché ?
        </h2>
        <p className="text-lg leading-relaxed">
          Alors regarde cette vidéo : un exemple concret d’un coaching en action (pour une personne
          gold ou platine). Tu verras comment une simple séance peut révéler tes erreurs, changer ta
          vision du jeu, et te faire gagner des games que tu continues à perdre aujourd’hui.
        </p>
      </div>
      <Video />
      <div className="max-w-3xl mx-auto text-center px-4 py-10 select-none">
        <h1 className="text-4xl font-extrabold mb-4">
          Cette vidéo de coaching ne t’a pas convaincu ?
        </h1>
        <p className="text-lg leading-relaxed">
          Tu trouves que l’exemple ne te correspond pas. Alors n’hésite pas a aller sur ma chaîne
          youtube pour voir d’autres vidéos coaching qui te correspondent.
        </p>
      </div>
    </div>
  )
}
