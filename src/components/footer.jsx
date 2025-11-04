import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Grid3x3,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#390905] text-background">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        {/* Footer Content */}



        {/* Newsletter and Social */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-x-4 items-center">
              <span>Sign up for Sephora Emails</span>
              <div className="flex items-center gap-2">
                <input
                  type=""
                  placeholder="Email"
                  className="px-4 py-2 bg-background/10 text-background placeholder-background/50 rounded text-sm"
                />
                <button className="px-4 py-1.5 bg-background text-foreground rounded text-sm font-medium hover:opacity-90 transition">
                  →
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-[#1877F2] hover:opacity-80 transition cursor-pointer" /> 
              <Twitter className="w-5 h-5 text-[#1DA1F2] hover:opacity-80 transition cursor-pointer" /> 
              <Instagram className="w-5 h-5 text-[#E1306C] hover:opacity-80 transition cursor-pointer" /> 
              <Youtube className="w-5 h-5 text-[#FF0000] hover:opacity-80 transition cursor-pointer" /> 
              <Linkedin className="w-5 h-5 text-[#0A66C2] hover:opacity-80 transition cursor-pointer" /> 
              <Mail className="w-5 h-5 text-[#EA4335] hover:opacity-80 transition cursor-pointer" /> 
              <Grid3x3 className="w-5 h-5 text-[#5F6368] hover:opacity-80 transition cursor-pointer" /> 
            </div>

          </div>

          <div className="text-xs text-[#ffff] text-center flex flex-col gap-y-2">
            <p>
              Copyright © 2025 RAASA, ALL RIGHTS RESERVED
            </p>
            <p>+44 016 8966 6990 | raasalocksbottom@gmail.com | 366 Crofton Rd,Orpington BR6 8NN</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
