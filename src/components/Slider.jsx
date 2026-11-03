import { useState, useRef } from 'react';

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);
  const properties = [
    {
      id: 1,
      title: '01. Palm Hills Office No.3',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', 
    },
    {
      id: 2,
      title: '02.Hacienda Duplex No.4',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', 
    },
    {
      id: 3,
      title: '03.Sawary Family Villa',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', 
    },
    {
      id: 4,
      title: '04. Upcoming Project',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', 
    },
  ];
  const photosPerDot = 2;
  const dotCount = Math.ceil(properties.length / photosPerDot);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    
    if (sliderRef.current) {
      const container = sliderRef.current;
      const cardWidth = container.children[0].offsetWidth;
      const gap = 24; 
      container.scrollTo({
        left: index * photosPerDot * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' && activeIndex < dotCount - 1) {
      event.preventDefault();
      handleSlideChange(activeIndex + 1);
    }

    if (event.key === 'ArrowLeft' && activeIndex > 0) {
      event.preventDefault();
      handleSlideChange(activeIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto pt-9 px-4 font-serif">
      <div 
        ref={sliderRef}
        tabIndex={0}
        role="region"
        aria-label="Property slider. Use the left and right arrow keys to change slides."
        onKeyDown={handleKeyDown}
        className="flex gap-6 overflow-hidden pb-8"
      >
        {properties.map((property) => (
          <div 
            key={property.id} 
            className="shrink-0 w-[85%] md:w-100"
          >
            {/* Card Image */}
            <div className="aspect-4/3 w-full overflow-hidden rounded-2xl mb-4 shadow-sm">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Card Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 ml-2">
              {property.title}
            </h3>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center items-center gap-2 mt-2">
        {Array.from({ length: dotCount }, (_, index) => (
          <button 
            key={index}
            onClick={() => handleSlideChange(index)}
            aria-label={`Go to slide group ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${
              activeIndex === index 
                ? 'w-8 bg-[#9b2c2c]' 
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
