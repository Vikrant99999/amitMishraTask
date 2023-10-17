'use client'
import React from 'react';
import GalleryComponent from "@/components/shared/Gallery";

const Gallery: React.FC = () => {
  return (
    <div className='galleryComponent'>
      <h1 className='pageTitle'>Gallery</h1>
      <GalleryComponent/>
    </div>
  );
}

export default Gallery;
