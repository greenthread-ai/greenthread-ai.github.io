export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

      {/* Floating blur circles */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-float-1"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 70%)',
          filter: 'blur(80px)',
          opacity: 0.4,
          top: '10%',
          left: '10%',
        }}
      />
      <div
        className="absolute w-[650px] h-[650px] rounded-full animate-float-2"
        style={{
          background: 'radial-gradient(circle, rgba(5, 150, 105, 0.5) 0%, rgba(5, 150, 105, 0) 70%)',
          filter: 'blur(90px)',
          opacity: 0.45,
          bottom: '-25%',
          right: '-25%',
        }}
      />
      <div
        className="absolute w-[550px] h-[550px] rounded-full animate-float-3"
        style={{
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.4) 0%, rgba(52, 211, 153, 0) 70%)',
          filter: 'blur(100px)',
          opacity: 0.4,
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  )
}
