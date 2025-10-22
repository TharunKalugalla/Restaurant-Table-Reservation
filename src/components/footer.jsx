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
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        {/* Footer Content */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">About Sephora</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  About Sephora
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Sephora Stands Social Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Supply Chain Transparency
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Sephora Global Sites
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">My Sephora</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Beauty Insider
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Rewards Bazaar
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Loves
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Playl by Sephora - Subscribe Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Flash Unlimited Shipping
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Help & FAQs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Online Ordering
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Billing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  International Shipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ways to Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Just Arrived
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Beauty Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Store Locations, Events & Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Book a Reservation
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Sephora inside JCPenney
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-x-4 items-center">
              <span>Sign up for Sephora Emails</span>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 bg-background/10 text-background placeholder-background/50 rounded text-sm"
                />
                <button className="px-4 py-1.5 bg-background text-foreground rounded text-sm font-medium hover:opacity-90 transition">
                  →
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 hover:opacity-80 transition cursor-pointer" />
              <Twitter className="w-5 h-5 hover:opacity-80 transition cursor-pointer" />
              <Instagram className="w-5 h-5 hover:opacity-80 transition cursor-pointer" />
              <Youtube className="w-5 h-5 hover:opacity-80 transition cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:opacity-80 transition cursor-pointer" />
              <Mail className="w-5 h-5 hover:opacity-80 transition cursor-pointer" />
              <Grid3x3 className="w-5 h-5 hover:opacity-80 transition cursor-pointer" />
            </div>
          </div>

          <div className="text-xs text-background/60 text-center flex flex-col gap-y-2">
            <p>
              Copyright © 2018 Sephora USA, Inc. All rights reserved. Terms of
              Use | Privacy Policy
            </p>
            <p>1-877-SEPHORA (1-877-737-4672) | TTY (1-888-866-5445)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
