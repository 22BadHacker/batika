'use client'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { VscArrowUp } from "react-icons/vsc";
import Palms from '@/public/work/Palms.jpg'
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

// Import your additional images here
import Image2 from '@/public/work/sakob.jpg' // Add your second image
import Image3 from '@/public/work/serenity.jpg' // Add your third image
import Image4 from '@/public/work/maree.webp' // Add your third image
// Add more images as needed

export default function Home() {
  const images = [Palms, Image2, Image3, Image4]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    // Only auto-rotate when not in fullscreen mode
    if (!isFullScreen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [images.length, isFullScreen]);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setSelectedImage(null);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img === selectedImage);
      const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(images[nextIndex]);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img === selectedImage);
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
   <div className="w-full relative max-w-412.5 mx-auto pt-10 px-7 text-right pb-9 flex-col gap-2 h-svh flex justify-end items-end">
    <div className="absolute w-[350px]  saturate-[1.3] p-1 bg-[#eee] object-cover h-[400px] left-7 bottom-9 overflow-hidden cursor-pointer group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full relative"
          onClick={() => handleImageClick(currentImageIndex)}
        >
          <Image 
            className='size-full rounded saturate-[1.3] object-cover transition-transform duration-300 group-hover:scale-105' 
            src={images[currentImageIndex]} 
            alt={`Batika work ${currentImageIndex + 1}`} 
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
              Click to expand
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Decorative corner elements */}
      <div className="bg-[#eee]  w-10 h-3 absolute top-0 right-0"></div>
      <div className="bg-[#eee] w-10 h-3  absolute bottom-0 left-0"></div>

      {/* Image indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
    
    <h1 className="text-[27px] pb-2 font-semibold leading-[1.1] max-w-110">
      Notre site est en cours de réalisation, merci pour votre patience.
    </h1>
    <h5 className='text-gray'>
      Pour plus d’informations, contactez-nous à{' '}
      <Link 
        className='border-b-[.5px] inline-flex border-b-gray font-semibold hover:text-orange flex italic items-center gap-1 border-dashed' 
        href='mailto:contact@batika.ma'
      >
        contact@batika.ma <VscArrowUp className='rotate-45 inline-flex'/>
      </Link>
    </h5>

    {/* Fullscreen image overlay */}
    <AnimatePresence>
      {isFullScreen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={handleCloseFullScreen}
        >
          {/* Close button */}
          <button
            onClick={handleCloseFullScreen}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <IoClose size={32} />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white/80 hover:text-white z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-2xl"
          >
            ←
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white/80 hover:text-white z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-2xl"
          >
            →
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white/80 bg-black/50 px-3 py-1 rounded-full text-sm">
            {images.findIndex(img => img === selectedImage) + 1} / {images.length}
          </div>

          {/* Fullscreen image */}
          <motion.div
            key={selectedImage.src}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Fullscreen view"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
   </div>
  );
}