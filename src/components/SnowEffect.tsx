import React, { useEffect, useRef } from 'react'

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
  drift: number
  opacity: number
}

interface SnowEffectProps {
  count?: number
  maxRadius?: number
  minRadius?: number
  maxSpeed?: number
  minSpeed?: number
}

const SnowEffect: React.FC<SnowEffectProps> = ({
  count = 80,
  maxRadius = 4,
  minRadius = 1,
  maxSpeed = 1.5,
  minSpeed = 0.3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const snowflakesRef = useRef<Snowflake[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createSnowflake = (): Snowflake => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      radius: Math.random() * (maxRadius - minRadius) + minRadius,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      drift: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.6 + 0.4,
    })

    const initSnowflakes = () => {
      snowflakesRef.current = Array.from({ length: count }, createSnowflake)
    }

    const updateSnowflake = (snowflake: Snowflake) => {
      snowflake.y += snowflake.speed
      snowflake.x += snowflake.drift

      if (snowflake.y > canvas.height) {
        snowflake.y = -10
        snowflake.x = Math.random() * canvas.width
      }

      if (snowflake.x > canvas.width + 10) {
        snowflake.x = -10
      } else if (snowflake.x < -10) {
        snowflake.x = canvas.width + 10
      }
    }

    const drawSnowflake = (snowflake: Snowflake) => {
      ctx.beginPath()
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakesRef.current.forEach((snowflake) => {
        updateSnowflake(snowflake)
        drawSnowflake(snowflake)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initSnowflakes()
    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [count, maxRadius, minRadius, maxSpeed, minSpeed])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default SnowEffect
