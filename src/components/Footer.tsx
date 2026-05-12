import { Sparkles, MapPin, Phone, Mail, Globe, MessageCircle, Smartphone, ArrowRight, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-border">
      {/* Map & Contact Section */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Map Side */}
          <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-border relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.205423850383!2d83.0021521!3d17.6877465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3971c8196dc145%3A0x300c5362ed17d6c2!2sSujatha%20dental%20clinic!5e0!3m2!1sen!2sin!4v1778579907000!5m2!1sen!2sin"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-6 left-6 glass px-6 py-4 rounded-2xl pointer-events-none group-hover:opacity-0 transition-opacity">
              <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Find Us</div>
              <div className="text-primary font-bold">Anakapalle, Andhra Pradesh</div>
            </div>
          </div>

          {/* Contact Details & Hours */}
          <div className="flex flex-col h-full justify-center">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Visit Aura Dental</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-12">Let's Create Your <br/><span className="text-secondary">Signature Smile</span></h3>
            
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-soft-gray flex items-center justify-center text-secondary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Location</h4>
                    <p className="text-primary-light leading-relaxed">
                      Main Rd, New Colony,<br/>
                      Anakapalle, AP 531001
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-soft-gray flex items-center justify-center text-secondary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Contact</h4>
                    <p className="text-primary-light">
                      (555) 123-4567<br/>
                      concierge@auradental.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-soft-gray flex items-center justify-center text-secondary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Hours</h4>
                    <div className="text-primary-light space-y-1">
                      <div className="flex justify-between gap-4"><span>Mon-Thu:</span> <span className="font-bold">8AM - 6PM</span></div>
                      <div className="flex justify-between gap-4"><span>Friday:</span> <span className="font-bold">8AM - 3PM</span></div>
                      <div className="flex justify-between gap-4 text-secondary/60"><span>Sat-Sun:</span> <span>Closed</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Bottom */}
      <div className="bg-soft-gray py-20 border-t border-gray-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-secondary" />
                <span className="text-3xl font-bold text-primary tracking-tight">
                  Aura<span className="font-light">Dental</span>
                </span>
              </div>
              <p className="text-primary-light leading-relaxed max-w-xs">
                Setting the gold standard in boutique dental care through artistic precision and medical excellence.
              </p>
              <div className="flex gap-4">
                {[Globe, Globe, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-white border border-gray-border flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-primary font-bold text-lg mb-8 uppercase tracking-widest text-xs">Treatments</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-primary-light hover:text-secondary transition-colors font-medium">Cosmetic Dentistry</a></li>
                <li><a href="#" className="text-primary-light hover:text-secondary transition-colors font-medium">Dental Implants</a></li>
                <li><a href="#" className="text-primary-light hover:text-secondary transition-colors font-medium">Smile Design</a></li>
                <li><a href="#" className="text-primary-light hover:text-secondary transition-colors font-medium">Orthodontics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary font-bold text-lg mb-8 uppercase tracking-widest text-xs">Aura Clinic</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-primary-light hover:text-secondary transition-colors font-medium">About Dr. Sterling</a></li>
                <li><a href="#gallery" className="text-primary-light hover:text-secondary transition-colors font-medium">Patient Gallery</a></li>
                <li><a href="#testimonials" className="text-primary-light hover:text-secondary transition-colors font-medium">Reviews</a></li>
                <li><a href="#appointment" className="text-primary-light hover:text-secondary transition-colors font-medium">Book Visit</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-primary font-bold text-lg mb-8 uppercase tracking-widest text-xs">Newsletter</h4>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-border focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-xl hover:bg-secondary transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-primary-light">Join our elite circle for smile tips and exclusive offers.</p>
            </div>

          </div>

          <div className="pt-12 border-t border-gray-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-primary-light">
            <p>&copy; {new Date().getFullYear()} Aura Dental Clinic. All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex gap-8">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
              </div>
              <a 
                href="https://yourwebpartner.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">Designed by</span>
                <span className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">YourWebPartner</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
