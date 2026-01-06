import React, { useEffect, useRef } from 'react'

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
  drift: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

interface SnowEffectProps {
  count?: number
  maxRadius?: number
  minRadius?: number
  maxSpeed?: number
  minSpeed?: number
  windX?: number
  windY?: number
}

const SnowEffect: React.FC<SnowEffectProps> = ({
  count = 100,
  maxRadius = 0.8,
  minRadius = 0.1,
  maxSpeed = 3,
  minSpeed = 0.5,
  windX = -1,
  windY = 0,
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
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
    })

    const initSnowflakes = () => {
      snowflakesRef.current = Array.from({ length: count }, createSnowflake)
    }

    const updateSnowflake = (snowflake: Snowflake) => {
      // Smaller snowflakes are more affected by wind
      const windEffect =
        0.5 + ((maxRadius - snowflake.radius) / maxRadius) * 0.5

      snowflake.y += snowflake.speed + windY * windEffect * 2
      snowflake.x += snowflake.drift + windX * windEffect
      snowflake.rotation += snowflake.rotationSpeed + windX * 0.03

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
      const { x, y, radius, opacity, rotation } = snowflake

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.lineWidth = radius * 0.3
      ctx.lineCap = 'round'

      // Draw 6 main branches
      for (let i = 0; i < 6; i++) {
        ctx.rotate(Math.PI / 3)

        // Main branch
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -radius * 2)
        ctx.stroke()

        // Side branches
        for (let j = 1; j <= 2; j++) {
          const branchY = -radius * j * 0.7
          const branchLength = radius * 0.5

          ctx.beginPath()
          ctx.moveTo(0, branchY)
          ctx.lineTo(-branchLength, branchY - branchLength * 0.5)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(0, branchY)
          ctx.lineTo(branchLength, branchY - branchLength * 0.5)
          ctx.stroke()
        }
      }

      ctx.restore()
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
  }, [count, maxRadius, minRadius, maxSpeed, minSpeed, windX, windY])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default SnowEffect
