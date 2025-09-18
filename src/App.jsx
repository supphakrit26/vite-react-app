import './index.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-animated-gradient">
      <h1 aria-label="Greeting" role="heading" className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight fancy-text animate-bounce-slow max-w-95vw">
        Hello KBTG
      </h1>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App
