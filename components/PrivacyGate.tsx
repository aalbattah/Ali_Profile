import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface PrivacyGateProps {
  onAccessGranted: () => void;
}

const PrivacyGate: React.FC<PrivacyGateProps> = ({ onAccessGranted }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Simple password check - in production, this would be more secure
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default password - can be changed
    if (password === 'access2024' || password === 'Ali2024') {
      localStorage.setItem('portfolio_access', 'granted');
      onAccessGranted();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // Check if already granted
  React.useEffect(() => {
    if (localStorage.getItem('portfolio_access') === 'granted') {
      onAccessGranted();
    }
  }, [onAccessGranted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 mb-4">
              <Lock className="w-8 h-8 text-slate-600 dark:text-slate-300" />
            </div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              Private Profile
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Access Restricted
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Enter access code"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
            >
              Access Portfolio
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
            This is a private executive portfolio. Access is by invitation only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyGate;

