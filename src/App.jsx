import './index.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <main className="text-center px-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-orange-400 animate-text-shadow drop-shadow-lg">
          Hello KBTG
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-300">Welcome — this page uses Tailwind for styling and animation.</p>
        <div className="mt-8 flex justify-center">
          <a href="#" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500 transform hover:-translate-y-1 transition">Get started</a>
        </div>
      </main>
      <style>{`
        @keyframes text-shadow {
          0% { filter: drop-shadow(0 0 0 rgba(0,0,0,0.0)); }
          50% { filter: drop-shadow(0 10px 18px rgba(99,102,241,0.18)); }
          100% { filter: drop-shadow(0 0 0 rgba(0,0,0,0.0)); }
        }
        .animate-text-shadow {
          animation: text-shadow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App
