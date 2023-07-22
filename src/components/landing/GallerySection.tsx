import React, { useState } from 'react';

import image from '../../assets/images/image.webp';
import image2 from '../../assets/images/image2.webp';
import image3 from '../../assets/images/image3.webp';
import image4 from '../../assets/images/image4.webp';
import image5 from '../../assets/images/image5.webp';
import image6 from '../../assets/images/image6.webp';
import image7 from '../../assets/images/image7.webp';
import image8 from '../../assets/images/image8.webp';
import image9 from '../../assets/images/image9.webp';
import image10 from '../../assets/images/image10.webp';
import image11 from '../../assets/images/image11.webp';
import image12 from '../../assets/images/image12.webp';
import image13 from '../../assets/images/image13.webp';
import image14 from '../../assets/images/image14.webp';
import image15 from '../../assets/images/image15.webp';
import image16 from '../../assets/images/image16.webp';
import image17 from '../../assets/images/image17.webp';
import image18 from '../../assets/images/image18.webp';
import image19 from '../../assets/images/image19.webp';
import image20 from '../../assets/images/image20.webp';
import HStack from '../../atoms/HStack';
import { GrGallery } from 'react-icons/gr';

const images: any[] = [
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image9,
  image17,
  image18,
  image19,
  image20,
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
