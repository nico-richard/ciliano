import React from 'react'
import Image from 'next/image'

interface CiImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  imageClassName?: string
}

const CiImage = (props: CiImageProps) => {
  return (
    <div className={props.className}>
      <Image className={props.imageClassName} src={props.src} alt={props.alt} fill />
    </div>
  )
}

export default CiImage
