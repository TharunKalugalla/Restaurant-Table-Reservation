import React from "react";
import coverImage from "@/assets/banner.png";
import Logo from "@/assets/rasa_logo.png";
import { MapPin } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import MenuItem from "@/components/MenuItem";
import Reviews from "@/components/Review";

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto bg-white mt-4">
      <div className="rounded-lg flex w-fit mx-auto my-auto">
        <img
          src={coverImage}
          alt="Restaurant floor plan"
          className="w-full object-cover"
        />
      </div>

      {/* Body section */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full mt-8 mx-auto mb-4 p-4 lg:p-0">
        <div className="flex flex-col">
          {/* Logo and Info */}
          <div className="flex-1 mb-4">
            <div className="text-4xl mb-2">
              <img src={Logo} alt="Raasa Restaurant Logo" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2 font-[Inter]">
              Raasa Restaurant
            </h1>
            <p className="text-muted-foreground mb-4 font-[Poppins] text-[14px]">
              Best Indian Cuisine restaurant in London
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-[Poppins] text-[12px]">
              <MapPin className="w-4 h-4" />
              <span>346 Crofton Rd, Orpington BR6 8NN</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-border">
              <button className="pb-3 text-amber-600 border-b-2 border-amber-600 font-medium">
                Photos
              </button>
              <button className="pb-3 text-muted-foreground hover:text-foreground transition">
                Menus
              </button>
              <button className="pb-3 text-muted-foreground hover:text-foreground transition">
                Reviews
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mt-4 p-4 lg:p-0">
            <PhotoGallery />
          </div>
          <div className="mt-8 p-4 lg:p-0">
            <MenuItem />
          </div>
          <div className="mt-8 p-4 lg:p-0">
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
}
