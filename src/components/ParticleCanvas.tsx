import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  r: number
  alpha: number
  vx: number
  vy: number
  color: string
  life: number
  maxLife: number
}

const GOLD_COLORS = [
  'rgba(201,169,110,',
  'rgba(232,213,163,',
  'rgba(122,95,53,',
]

function rand(a: number, b: number): number {
  return a + Math.random() * (b - a)
}

function createPt(W: number, H: number): Particle {
  return {
    x: rand(0, W),
    y: rand(0, H),
    r: rand(0.4, 1.8),
    alpha: rand(0.1, 0.6),
    vx: rand(-0.12, 0.12),
    vy: rand(-0.25, -0.05),
    color: GOLD_COLORS[Math.floor(Math.random() * 3)],
    life: 0,
    maxLife: rand(120, 300),
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0
    let pts: Particle[] = []
    let animId: number

    function resize() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
    }

    function init() {
      resize()
      pts = []
      for (let i = 0; i < 120; i++) {
        const p = createPt(W, H)
        p.life = rand(0, p.maxLife)
        pts.push(p)
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      for (const p of pts) {
        p.life++
        if (p.life > p.maxLife) {
          const fresh = createPt(W, H)
          Object.assign(p, fresh, { x: rand(0, W), y: H + 10, life: 0 })
        }
        const progress = p.life / p.maxLife
        const a = p.alpha * Math.sin(progress * Math.PI)
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = p.color + a + ')'
        ctx!.fill()
        p.x += p.vx
        p.y += p.vy
      }
      animId = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    />
  )
}
