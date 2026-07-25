'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

type Props = {
  title: string
  description: string
  index: number
  id?: string
  image?: string
  image_urls?: string[]
  live_url?: string
  technologies?: string
}

export default function PortfolioCard({
  title,
  description,
  index,
  id,
  image,
  image_urls,
  live_url,
  technologies,
}: Props) {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = image_urls?.length ? image_urls : image ? [image] : []

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (images.length) setCurrentImageIndex((p) => (p + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (images.length) setCurrentImageIndex((p) => (p - 1 + images.length) % images.length)
  }

  const techList = technologies
    ? technologies.split(',').map(t => t.trim()).filter(Boolean).slice(0, 3)
    : []

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.06,
      }}
      whileHover={{ y: -4, borderColor: "var(--accent)" }}
      className="group relative rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl flex flex-col min-h-[270px] transition-colors duration-300"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 25px var(--accent-soft)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <div 
        className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] mb-3 relative group/gallery aspect-[16/10]"
        onClick={() => { if (id) router.push(`/portfolio/${id}`) }}
        style={{ cursor: id ? 'pointer' : 'default' }}
      >
        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-end p-4 pointer-events-none">
          <span className="text-white font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover/gallery:translate-y-0 transition-transform duration-300">
            View project <ArrowRight size={14} />
          </span>
        </div>
        {images.length > 0 ? (
          <>
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={images[currentImageIndex]}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center opacity-100 md:opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 z-20"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center opacity-100 md:opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 z-20"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === currentImageIndex ? 'bg-white scale-125' : 'bg-white/40'
                      }`} 
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-white/[0.03]" />
        )}
      </div>

      <h3 className="text-[17px] font-semibold mb-2 leading-tight">
        {title}
      </h3>

      <p className="text-[13px] text-white/60 leading-relaxed line-clamp-2 min-h-[38px] mb-3">
        {description}
      </p>

      {techList.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {techList.map((tech, i) => (
            <span 
              key={i}
              className="text-[10px] font-mono px-2 py-1 rounded-md border border-white/10 bg-white/5 text-white/70"
            >
              {tech}
            </span>
          ))}
          {technologies && technologies.split(',').length > 3 && (
            <span className="text-[10px] font-mono px-2 py-1 text-white/50">
              +{technologies.split(',').length - 3}
            </span>
          )}
        </div>
      )}

      <div className="mt-auto pt-2 flex items-center justify-between">
        {live_url && live_url !== '' ? (
          <a
            href={live_url}
            target="_blank"
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-[12px] font-medium"
          >
            Live Demo
            <ArrowUpRight size={13} />
          </a>
        ) : (
          <div />
        )}

        <div className="flex gap-2">
          {id && (
            <button
              onClick={() => router.push(`/portfolio/${id}`)}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center gap-2 text-[12px] font-medium"
            >
              Details
              <ArrowRight size={13} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}