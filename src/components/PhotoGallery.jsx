import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoGallery() {
  const BASE_IMAGE_URL = "/src/assets/foods_images/";

  const allPhotos = [
    { id: 1, name: "1.png" },
    { id: 2, name: "2.png" },
    { id: 3, name: "3.png" },
    { id: 4, name: "4.png" },
    { id: 5, name: "5.png" },
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

  const openMore = () => {
    setIndex(5);
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
        <div className="grid grid-cols-3 gap-4">
          {displayPhotos.map((photo, i) => (
            <div
              key={photo.id}
              className={`${
                i === 0 ? "row-span-2" : ""
              } bg-muted rounded-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer relative`}
              onClick={() => openAt(i)}
            >
              <img
                src={
                  photo.name ? BASE_IMAGE_URL + photo.name : "/placeholder.svg"
                }
                alt={`Restaurant photo ${photo.id}`}
                className="w-full h-full object-cover"
              />
              {photo.id === 5 && (
                <div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    openMore();
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
            className="absolute top-6 right-6 text-white opacity-90 hover:opacity-100 transition p-2 rounded"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          {/*------------------------------------------------------- Right Arrow ---------------------------------------------*/}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
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
                    ? "/placeholder.svg"
                    : photos[index].name
                    ? BASE_IMAGE_URL + photos[index].name
                    : "/placeholder.svg"
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