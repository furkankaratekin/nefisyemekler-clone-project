import React from 'react'
import { Link } from 'react-router-dom';

const WhatToCook = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/tarhana">
              <div className="relative group">
                <img
                  alt="mercimek"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://i.pinimg.com/736x/c9/ca/41/c9ca4141982f32e5661457b06ef42379.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Tarhana Çorbası
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/sarma">
              <div className="relative group">
                <img
                  alt="domates"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://cdn.idntimes.com/content-images/community/2018/10/5ad1a56f0f2543171c9ab74c-5014ca12344a864e567deee14c3ddbe8_600x400.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Zeytinyağlı Yaprak Sarma
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/pilav">
              <div className="relative group">
                <img
                  alt="ezogelin"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="http://www.akkaryemek.com/images/icerik/1690129809.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Mısırlı Pilav
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/salata">
              <div className="relative group">
                <img
                  alt="iskembe"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://www.cumhuriyet.com.tr/Archive/2023/6/21/154721798-akdeniz-salata.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Sezar Salata
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToCook