'use client'

import { slides } from "./slides"

const Slides = () => {
  return (
    <div className="w-screen overflow-x-hidden bg-white text-black flex flex-col">
      {
        slides.map((slide, index) => (
          <div key={index} className="min-h-screen max-w-7xl m-auto p-6 md:py-8">
            <div className="flex items-center justify-between mb-8">
              {slide.icon && (
                <div className="text-blue-600">{slide.icon}</div>
              )}
              <h1 className="text-4xl font-bold text-gray-800 flex-1 text-center">
                {slide.title}
              </h1>
              <div className="w-12"></div>
            </div>
            {slide.subtitle && (
              <h2 className="text-2xl text-gray-600 text-center mb-8">
                {slide.subtitle}
              </h2>
            )}
            <div className="flex-1 overflow-y-auto">
              {slide.content}
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Slides