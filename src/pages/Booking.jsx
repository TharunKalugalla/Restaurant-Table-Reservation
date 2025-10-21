import { useState } from "react";
import { Clock, Users, Calendar } from "lucide-react";
import logo from "@/assets/rasa_logo.png";
import bookingImage from "@/assets/booking.png";
import { PhoneInput } from "@/components/ui/phone-input";

export default function Booking() {
  const [verificationCode, setVerificationCode] = useState("");

  return (
    <div className="mx-auto px-4 mt-4">
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            You're almost done!
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Restaurant Info & Verification */}
          <div className="space-y-6">
            {/* Restaurant Header */}
            <div className="flex items-start gap-4">
              <img src={logo} alt="Raasa Restaurant Logo" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">
                  Raasa Restaurant
                </h2>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Oct 30, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>6:00 P.M</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>2 People</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed bg-[F0A800]/13 p-2">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took...
              </p>
            </div>

            {/* Details Section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Details</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took...
              </p>
            </div>

            {/* Verification Form */}
            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <PhoneInput
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  classNamew="w-full"
                />

                <span className="text-amber-500 hover:text-amber-600 font-semibold cursor-pointer">
                  Send
                </span>
              </div>
              <p className="text-xs text-gray-500">
                You will receive a text message to verify your account. Message
                & data rates may apply
              </p>
            </div>
          </div>

          {/* Right Column - Food Image */}
          <div className="flex items-center justify-center">
            <img
              src={bookingImage}
              alt="Raasa Restaurant Dish"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
