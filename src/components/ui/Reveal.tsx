'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
  children:  React.ReactNode
  delay?:    number           // seconds, default 0
  y?:        number           // translateY distance, default 28
  className?: string
  style?:    React.CSSProperties
  as?:       keyof JSX.IntrinsicElements
}

/**
 * Drop-in replacement for .reveal + .delay-N pattern from original HTML.
 * Uses Framer Motion's useInView — triggers once on scroll, never re-hides.
 */
export default function Reveal({
  children,
  delay   = 0,
  y       = 28,
  className,
  style,
  as: Tag = 'div',
}: RevealProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const inView  = useInView(ref, { once: true, margin: '-12% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
