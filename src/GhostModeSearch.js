import React, { useState } from 'react';

const GhostModeSearch = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    platform: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [results, setResults] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.platform.trim()) {
      newErrors.platform = 'Platform is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setResults(`Search results for ${formData.name} (@${formData.username}) on ${formData.platform}:`);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ghost-50 to-ghost-100 font-inter">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full opacity-60"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-ghost-800 mb-3 relative">
              <span className="inline-block">Hi</span>{" "}
              <span className="inline-block bg-gradient-to-r from-ghost-700 to-ghost-900 bg-clip-text text-transparent">
                welcome to
              </span>
              <span className="block mt-2 text-5xl md:text-7xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 animate-pulse-gentle">
                  GHOST
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-accent-700 to-accent-800">
                  MODE
                </span>
              </span>
            </h1>
            
            {/* Subtitle with enhanced styling */}
            <div className="relative">
              <p className="text-ghost-600 text-lg md:text-xl font-medium tracking-wide">
                Discover your 
                <span className="text-accent-600 font-semibold mx-1">digital footprint</span> 
                across the web
              </p>
              {/* Decorative underline */}
              <div className="mt-2 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
            </div>
            
            {/* Floating icons for visual enhancement */}
            <div className="absolute -right-8 top-4 opacity-20 animate-pulse">
              <svg className="w-8 h-8 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute -left-8 bottom-4 opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
              <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="glass-effect rounded-2xl p-8 mb-8 shadow-xl animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-ghost-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`input-field ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm animate-fade-in">{errors.name}</p>
              )}
            </div>

            {/* Username and Platform Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Username Field */}
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-ghost-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Your username"
                  className={`input-field ${errors.username ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm animate-fade-in">{errors.username}</p>
                )}
              </div>

              {/* Platform Field */}
              <div className="space-y-2">
                <label htmlFor="platform" className="block text-sm font-medium text-ghost-700">
                  Platform
                </label>
                <select
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleInputChange}
                  className={`input-field ${errors.platform ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                >
                  <option value="">Select platform</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="instagram">Instagram</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="facebook">Facebook</option>
                  <option value="github">GitHub</option>
                  <option value="reddit">Reddit</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                </select>
                {errors.platform && (
                  <p className="text-red-500 text-sm animate-fade-in">{errors.platform}</p>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="search-button flex items-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span>Search Ghost Mode</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Results Area */}
        <div className="glass-effect rounded-2xl p-8 shadow-xl animate-slide-up">
          <h2 className="text-2xl font-semibold text-ghost-800 mb-6 text-center">
            Search Results
          </h2>
          
          <div className="min-h-[300px] bg-white/50 rounded-xl p-6 border border-ghost-200">
            {results ? (
              <div className="animate-fade-in">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-gentle"></div>
                  <span className="text-ghost-600 font-medium">Results found</span>
                </div>
                <p className="text-ghost-700 leading-relaxed">{results}</p>
                <div className="mt-6 p-4 bg-ghost-100 rounded-lg">
                  <h3 className="font-semibold text-ghost-800 mb-2">Digital Footprint Summary</h3>
                  <p className="text-ghost-600 text-sm">
                    Here is what the engine knows about your online presence...
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-ghost-700 mb-2">
                  here is what engine know about you
                </h3>
                <p className="text-ghost-500 max-w-md">
                  Enter your information above and click search to discover your digital footprint across various platforms.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-ghost-500 text-sm">
          <p>Powered by Ghost Mode • Privacy-focused digital discovery</p>
        </div>
      </div>
    </div>
  );
};

export default GhostModeSearch;
