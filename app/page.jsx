"use client"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"


export default function Home() {
  const shortCode = ""
  const [FetchedData, setFetchedData] = useState({
    OriginalUrl: "",
    ShortUrl: ""
  })
  const fetchURL = async () => {
    const response = await fetch(`http://localhost:8080/url/${shortCode}`)

    // Get response body as JSON
    const data = await response.json()
    setFetchedData({ OriginalUrl: data.OriginalUrl, ShortUrl: data.ShortUrl })
    console.log("Response body:", FetchedData)
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  const SubmitHandler = async (data) => {
    const request = await fetch("http://localhost:8080/shorten/",{
      "method": "POST",
      "content-type" : "application/json",
      body: JSON.stringify({URL : data.url})
    })

    const response = await request.json()
    setFetchedData({OriginalUrl: response.OriginalUrl, ShortUrl: response.URL})
    console.log("response", response)
    console.log(FetchedData)
  }
  useEffect(() => {
    fetchURL()
  }, [])

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
    <div className="w-full max-w-3xl">
      {/* Main Card */}
      <div className="bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/50 p-8 md:p-12 transform hover:scale-[1.01] transition-transform duration-300">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mb-4 shadow-lg shadow-purple-500/50">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
            URL Shortener
          </h1>
          <p className="text-gray-400 text-lg">Transform your long URLs into short, shareable links ✨</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-4 mb-8">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="https://your-super-long-url.com/page..." 
              className="w-full pl-12 pr-4 py-4 text-lg bg-gray-700/50 border-2 border-gray-600 text-gray-100 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 focus:outline-none focus:bg-gray-700 transition-all duration-300 placeholder:text-gray-500"
              {...register("url", { 
                required: { value: true, message: "this field is required" }, 
                minLength: { value: 5, message: "the url should be atleast 5 characters long"}
              })} 
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-4 px-8 text-lg font-bold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-2xl hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
          >
            <span className="flex items-center justify-center gap-2">
              Shorten URL
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </form>

        {/* Results - Only show if data exists */}
        {(FetchedData.OriginalUrl || FetchedData.ShortUrl) && (
          <div className="space-y-4 animate-fade-in">
            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <span className="text-gray-400 font-medium">Your Shortened URL</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>

            {/* Original URL */}
            <div className="bg-gradient-to-r from-purple-900/40 to-violet-900/40 rounded-2xl p-6 border border-purple-700/50 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-800/50 rounded-lg flex-shrink-0 border border-purple-600/30">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-purple-300 mb-1">Original URL</p>
                  <p className="text-gray-300 break-all text-sm">{FetchedData.OriginalUrl}</p>
                </div>
              </div>
            </div>

            {/* Short URL */}
            <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-2xl p-6 border-2 border-emerald-600/50 shadow-lg shadow-emerald-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-800/50 rounded-lg flex-shrink-0 border border-emerald-600/30">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-emerald-300 mb-2">Shortened URL</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={FetchedData.ShortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-cyan-400 hover:text-cyan-300 font-mono font-bold text-lg break-all hover:underline transition-colors"
                    >
                      {FetchedData.ShortUrl}
                    </a>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(FetchedData.ShortUrl)
                        alert('Copied to clipboard! 🎉')
                      }}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center">
              <p className="text-emerald-400 font-medium flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Success! Your URL has been shortened
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        <p className="flex items-center justify-center gap-2">
          Made with 
          <span className="text-red-400 animate-pulse">❤️</span> 
          using Next.js & Go
        </p>
      </div>
    </div>
  </div>
)

}
