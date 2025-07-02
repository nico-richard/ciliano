import Video from '@/components/Video'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="relative w-full h-100">
        <Image src="/main.png" alt="main" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-yellow-600 text-3xl md:text-5xl font-bold text-center px-4 font-rajdhani">
            Progresse sur League of Legends
          </h2>
        </div>
      </div>
      <Video />
    </>
  )
}
