import Footer from '@/components/Footer'
import Header from '@/components/Header'
import getPrompt from '@/services/getPromp'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home () {
  const [destination, setDestination] = useState('')
  const [days, setDays] = useState('')
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Add logic to fetch data from API get itinerary    
    setLoading(true)
    const data = await getPrompt(destination, days)
    setLoading(false)
    setPrompt(data.generations[0].text)
  }

  return (
    <>
      <Head>
        <title>Easyway</title>
        <meta name="description" content="IA App that generate an itinerary for your next trip." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className=''>
        <div>
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-2xl mx-auto">
              {/* <Image className='mx-auto mb-10' src="https://emojicdn.elk.sh/✈️" alt="Logo" width={50} height={50} /> */}
              <div className='flex flex-col items-start'>
                <h2 className="text-6xl font-bold tracking-tight text-white">
                  Easyway
                </h2>
                <p className="max-w-xl mt-2 text-gray-300 text-md">
                  🪄 Only 2 steps to create your next trip itinerary. Just enter your destination and the days of your trip and we will generate an itinerary for you.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-start justify-center gap-2 p-5 mt-10 bg-black border rounded-3xl gap-x-6">
                  <input
                    type="text"
                    value={destination}
                    placeholder="Destination"
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-2 text-white bg-[#31302c] placeholder:text-white placeholder:text-opacity-50 rounded-xl"
                    required
                  />
                  <span className="text-xs text-white text-opacity-50">Write the city of your trip</span>
                  <input
                    type="number"
                    value={days}
                    placeholder="Days"
                    onChange={(e) => setDays(e.target.value)}
                    className="w-full px-4 py-2 text-white bg-[#31302c] placeholder:text-white placeholder:text-opacity-50 rounded-xl"
                    min={1}
                    max={10}
                    required
                  />
                  <span className="text-xs text-white text-opacity-50">Max: 10 days</span>
                  {loading ? (
                    <div
                      type="submit"
                      className="flex items-center justify-center w-full px-4 py-2 font-medium text-[#31302c ] bg-[#dee998] rounded-xl"
                      {...loading && `disabled`}
                    >
                      Generating

                      <svg
                        className="w-5 h-5 ml-2 -mr-1 text-black animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx={12}
                          cy={12}
                          r={10}
                          stroke="currentColor"
                          strokeWidth={4}
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <button
                      className="flex items-center justify-center w-full px-4 py-2 font-medium text-[#31302c ] bg-[#dee998] rounded-xl"
                    >
                      Generate
                    </button>
                  )}
                </div>
              </form>
              {prompt && (
                <div className="flex flex-col items-center justify-center p-5 mt-10 bg-black border rounded-3xl gap-x-6">
                  <h2 className="text-4xl font-bold tracking-tight text-white">
                    Itinerary
                  </h2>
                  <div className='max-w-xl mx-auto mt-6 font-light prose text-white text-md'>
                    {prompt}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
