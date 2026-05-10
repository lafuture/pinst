export default function DecorBackground() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          top: -100,
          right: -100,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)',
          bottom: -80,
          left: -80,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </>
  )
}
