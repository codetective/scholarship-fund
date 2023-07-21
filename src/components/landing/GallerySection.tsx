import React, { useState } from 'react';

import testImage from '../../assets/images/scholar4.jpeg';
import HStack from '../../atoms/HStack';
import { GrGallery } from 'react-icons/gr';

const images: any[] = [
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
  testImage,
];

function isListOdd(arr: any[]) {
  if (arr.length % 2 !== 0) {
    let r = [...arr];
    r.push(null);
    return r;
  }

  return arr;
}

function getLength(arr: any[]) {
  if (arr.length % 2 !== 0) {
    return (arr.length + 1) / 2;
  }

  return arr.length / 2;
}

function GallerySection() {
  return (
    <div className='pt-20'>
      <HStack spacing='2' className='px-5 py-10'>
        <GrGallery className='text-3xl' />
        <h1 className='font-bold text-[#01100B] text-2xl md:text-3xl'>
          Gallery
        </h1>
      </HStack>
      <div
        className='transition-transform duration-300 grid no-scroll-bar overflow-scroll gap-5'
        style={{
          gridTemplateColumns: `repeat(${getLength(images)}, 1fr)`,
          gridTemplateRows: `repeat(2, 1fr)`,
        }}
      >
        {isListOdd(images).map((image, index) => {
          if (image) {
            return (
              <div className='w-[250px] h-[250px]  p-2' key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className='w-full h-full object-cover rounded-md'
                />
              </div>
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
}

export default GallerySection;
