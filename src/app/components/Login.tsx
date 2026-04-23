import { useState } from "react";
import { useNavigate } from "react-router";
import Logo from '../../assets/kaiku_logo.png';


export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/clients");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex justify-center mb-4">
            <img 
              src={Logo}
              alt="Kaiku Logo" 
              className="h-12 w-auto"
            />
          </div>
          <h2 className="text-xl text-gray-700 mb-2">PulseIQ</h2>
          <p className="text-gray-600">
            From Signals to Decisions — Instantly
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                placeholder="your.email@company.com"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--kaiku-blue)] text-white py-3 rounded-lg hover:bg-[var(--kaiku-blue-dark)] transition-colors"
            >
              Login
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Powered by Scaletech Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
