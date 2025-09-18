import './index.css'
import Datepicker from './components/Datepicker'

function App() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-animated-gradient">
      <div className="svg-container animate-bounce-slow" role="img" aria-label="Greeting">
        <svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet" className="greeting-svg">
          <defs>
            <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#ffd166" />
              <stop offset="40%" stopColor="#06b6d4" />
              <stop offset="70%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#fb7185" />
            </linearGradient>
          </defs>
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="greeting-text" fill="url(#g1)">
            Hello KBTG
          </text>
        </svg>
      </div>
      <div className="mt-8">
        <Datepicker />
      </div>
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
