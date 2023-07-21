import React, { useState } from 'react';

import image from '../../../public/gallery.svg';
import image2 from '../../../public/gallery2.svg';
import image3 from '../../../public/gallery3.svg';
import image4 from '../../../public/gallery4.svg';
import image5 from '../../../public/gallery5.svg';
import image6 from '../../../public/gallery6.svg';
import image7 from '../../../public/gallery7.svg';
import image8 from '../../../public/gallery8.svg';
import image9 from '../../../public/gallery9.svg';
import image10 from '../../../public/gallery10.svg';
import image11 from '../../../public/gallery11.svg';
import image12 from '../../../public/gallery12.svg';
import testImage1 from '../../assets/images/image.webp';
import testImage2 from '../../assets/images/image2.webp';
import testImage3 from '../../assets/images/image3.webp';
import testImage4 from '../../assets/images/image4.webp';
import testImage5 from '../../assets/images/image5.webp';
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
  image9,
  image10,
  image11,
  image12,
  testImage1,
  testImage2,
  testImage3,
  testImage4,
  testImage5,
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
