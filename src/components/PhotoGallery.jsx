import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from '@/assets/foodimages2/img1.jpg';
import Img2 from '@/assets/foodimages2/img2.jpg';
import Img3 from '@/assets/foodimages2/img3.jpg';
import Img4 from '@/assets/foodimages2/img4.jpg';
import Img5 from '@/assets/foodimages2/img5.jpg';
import Img6 from '@/assets/foodimages2/img6.jpg';
import Img7 from '@/assets/foodimages2/img7.jpg';
import Img8 from '@/assets/foodimages2/img8.jpg';

export default function PhotoGallery() {
  // const BASE_IMAGE_URL = "/src/assets/foods_images/";

  const allPhotos = [
    { id: 1, name: Img1 },
    { id: 2, name: Img2 },
    { id: 3, name: Img3 },
    { id: 4, name: Img4 },
    { id: 5, name: Img5 },
    { id: 6, name: Img6 },
    { id: 7, name: Img7 },
    { id: 8, name: Img8 },
  ];

  const displayPhotos = allPhotos.slice(0, 5);

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState(allPhotos);
  const [imgErrorMap, setImgErrorMap] = useState({});

  const openAt = (i) => {
    setIndex(i);
    setPhotos(allPhotos);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const prev = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, [photos.length]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prev, next]);

  const handleImgError = (id) => {
    setImgErrorMap((m) => ({ ...m, [id]: true }));
  };

  return (
    <>
      {/* -------------------------------------------------------------------------------------------------------------------
      ------------------------------------------------------ Photo Grid ----------------------------------------------------- 
      -----------------------------------------------------------------------------------------------------------------------*/}
      <div id="photo">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
          Photos
        </h2>
        <div className="grid grid-cols-3 h-70 gap-2">
          {displayPhotos.map((photo, i) => (
            <div
              key={photo.id}
              className={`${
                i === 0 ? "row-span-2" : ""
              } bg-muted rounded-sm overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer relative`}
              onClick={() => openAt(i)}
            >
              <img
                src={
                  photo.name ? photo.name : "/placeholder.svg"
                }
                alt={`Restaurant photo ${photo.id}`}
                className="w-full h-full object-cover"
              />
              {photo.id === 5 && (
                <div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    openAt(i);
                  }}
                >
                  <span className="text-white text-xl font-semibold">
                    +5 More
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* -----------------------------------------------------------------------------------------------------------------
      --------------------------------------------------- Fullscreen Viewer ----------------------------------------------- 
      ---------------------------------------------------------------------------------------------------------------------*/}
      {isOpen && (
        <div
          className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/*---------------------------------------------- Close Button --------------------------------------------------*/}
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-6 right-6 text-white opacity-90 hover:opacity-100 transition p-2 rounded z-50"
          >
            <X className="h-8 w-8" />
          </button>

          {/*----------------------------------------------- Left Arrow ----------------------------------------------------*/}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 hover:bg-white/20 flex items-center justify-center z-50"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          {/*------------------------------------------------------- Right Arrow ---------------------------------------------*/}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 hover:bg-white/20 flex items-center justify-center z-50"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/*---------------------------------------------------------- Image -------------------------------------------------*/}
          <div
            className="relative max-w-[92vw] max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {photos[index] ? (
              <img
                src={
                  imgErrorMap[photos[index].id]
                    ? "/placeholder.png"
                    : photos[index].name
                    ?  photos[index].name
                    : "/placeholder.png"
                }
                alt={`Preview ${photos[index].id}`}
                onError={() => handleImgError(photos[index].id)}
                className="max-w-[92vw] max-h-[92vh] object-contain rounded-md shadow-2xl"
                draggable={false}
              />
            ) : (
              <div className="text-white">No image</div>
            )}

            {/*------------------------------------------------------ Counter -------------------------------------------------*/}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm bg-white rounded-full px-2 py-1 text-black">
              {index + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}