import { useRef, useState, useEffect } from 'react'

interface Props {
  previewSrc: string
  fullSrc: string
  posterSrc: string
}

export default function VideoPlayer({ previewSrc, fullSrc, posterSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFull, setIsFull] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const [duration, setDuration] = useState('')
  const hideTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTime = () => setProgress((v.currentTime / v.duration) * 100 || 0)
    const onMeta = () => {
      const m = Math.floor(v.duration / 60)
      const s = Math.floor(v.duration % 60)
      setDuration(`${m}:${s.toString().padStart(2, '0')}`)
    }
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('loadedmetadata', onMeta)
    return () => { v.removeEventListener('timeupdate', onTime); v.removeEventListener('loadedmetadata', onMeta) }
  }, [isFull])

  function handleClick() {
    const v = videoRef.current
    if (!v) return
    if (!isFull) {
      setIsFull(true)
      v.src = fullSrc
      v.muted = false
      setIsMuted(false)
      v.play()
      setIsPlaying(true)
      return
    }
    if (v.paused) { v.play(); setIsPlaying(true) }
    else { v.pause(); setIsPlaying(false) }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current
    const bar = progressRef.current
    if (!v || !bar) return
    const rect = bar.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    v.currentTime = pct * v.duration
  }

  function handleFullscreen() {
    videoRef.current?.requestFullscreen?.()
  }

  function handleMouseMove() {
    setShowControls(true)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setShowControls(false), 3000)
  }

  return (
    <div
      style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', background: '#0D1526', cursor: 'pointer' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={previewSrc}
        poster={posterSrc}
        muted
        autoPlay
        loop={!isFull}
        playsInline
        onClick={handleClick}
        style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
      />

      {/* Play overlay when not in full mode */}
      {!isFull && (
        <div
          onClick={handleClick}
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.3)',
          }}
        >
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0,102,255,0.5)',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><polygon points="8,5 20,12 8,19"/></svg>
          </div>
          {duration && (
            <span style={{ marginTop: 12, color: 'rgba(255,255,255,0.6)', fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
              {duration}
            </span>
          )}
        </div>
      )}

      {/* Controls bar when playing full */}
      {isFull && (showControls || !isPlaying) && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '16px 16px 12px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {/* Progress bar */}
          <div
            ref={progressRef}
            onClick={handleSeek}
            style={{ height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2, cursor: 'pointer' }}
          >
            <div style={{
              height: '100%', width: `${progress}%`, borderRadius: 2,
              background: 'linear-gradient(90deg, #3B82F6, #0066FF)',
              transition: 'width 0.1s linear',
            }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Play/Pause */}
            <button onClick={handleClick} style={{ color: '#fff', padding: 4 }}>
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 20,12 8,19"/></svg>
              )}
            </button>
            {/* Mute */}
            <button onClick={toggleMute} style={{ color: '#fff', padding: 4 }}>
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
              )}
            </button>
            <div style={{ flex: 1 }} />
            {/* Fullscreen */}
            <button onClick={handleFullscreen} style={{ color: '#fff', padding: 4 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
