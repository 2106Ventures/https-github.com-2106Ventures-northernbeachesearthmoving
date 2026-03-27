import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, ChevronRight, HardHat, Shovel, Trees, Hammer, ShieldCheck, Clock, Star, Construction, Truck, Fuel } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-heavy-charcoal bg-site-bg industrial-grid">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-heavy-charcoal text-white border-b-4 border-industrial-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 bg-industrial-yellow rounded-sm flex items-center justify-center text-heavy-charcoal font-display font-black text-2xl transform -skew-x-12">
                NB
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl leading-none tracking-tighter">NORTHERN BEACHES</span>
                <span className="font-mono font-bold text-sm text-industrial-yellow tracking-[0.2em] uppercase">EARTHMOVING</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-industrial-yellow font-bold uppercase tracking-wider transition-colors">Services</a>
              <a href="#equipment" className="text-gray-300 hover:text-industrial-yellow font-bold uppercase tracking-wider transition-colors">Equipment</a>
              <a href="#team" className="text-gray-300 hover:text-industrial-yellow font-bold uppercase tracking-wider transition-colors">Our Team</a>
            </nav>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Direct Line</span>
                <a href="tel:0422929660" className="text-industrial-yellow font-mono font-bold text-lg hover:text-white transition-colors">
                  0422 929 660
                </a>
              </div>
              <a href="#contact" className="bg-industrial-yellow hover:bg-white text-heavy-charcoal px-6 py-3 font-display font-black uppercase tracking-tighter transition-all transform -skew-x-12">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section - Rugged & Industrial */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-heavy-charcoal">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 industrial-grid"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column: Text Content */}
              <div className="max-w-3xl">
                <div className="inline-block bg-industrial-yellow text-heavy-charcoal px-4 py-1 font-black uppercase tracking-widest text-sm mb-6 transform -skew-x-12">
                  Est. 2004 | Northern Beaches
                </div>
                <h1 className="text-6xl lg:text-8xl font-display font-black text-white leading-[0.9] mb-8">
                  HEAVY DUTY <br />
                  <span className="text-industrial-yellow">EXCAVATION</span> <br />
                  EXPERTS
                </h1>
                <p className="text-xl text-gray-300 mb-10 max-w-xl font-medium border-l-4 border-industrial-yellow pl-6">
                  22 years of moving dirt, rock, and mountains. Owner-operated precision for the toughest residential and commercial sites in Sydney.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#services" className="bg-industrial-yellow hover:bg-white text-heavy-charcoal px-10 py-5 font-display font-black text-xl uppercase tracking-tighter transition-all transform -skew-x-12 flex items-center gap-3">
                    Our Services
                    <ArrowRight className="w-6 h-6" />
                  </a>
                  <a href="#equipment" className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-10 py-5 font-display font-black text-xl uppercase tracking-tighter transition-all transform -skew-x-12">
                    The Fleet
                  </a>
                </div>
                
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
                  {[
                    { label: "Experience", val: "22+ YRS", icon: Clock },
                    { label: "Insurance", val: "FULLY", icon: ShieldCheck },
                    { label: "Safety", val: "OHS", icon: HardHat },
                    { label: "Service", val: "LOCAL", icon: MapPin },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <stat.icon className="w-6 h-6 text-industrial-yellow mb-2" />
                      <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{stat.label}</span>
                      <span className="text-lg font-display font-black text-white">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="relative hidden lg:block">
                <div className="absolute -inset-4 border-4 border-industrial-yellow transform -skew-x-6 z-0 opacity-50"></div>
                <div className="relative z-10 overflow-hidden rounded-sm transform -skew-x-6 shadow-2xl border-2 border-white/10">
                  <img 
                    src="https://lh3.googleusercontent.com/p/AF1QipMJbCYMcuTWS647FvxtzavJU5zSYaWMJ1yg5Fgc=w980-h700-n-k-no-nu" 
                    alt="Northern Beaches Earthmoving Fleet" 
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heavy-charcoal/60 to-transparent"></div>
                </div>
                {/* Decorative Badge */}
                <div className="absolute -bottom-6 -left-6 bg-industrial-yellow text-heavy-charcoal p-6 font-display font-black text-2xl transform -skew-x-12 z-20 shadow-xl">
                  MAX POWER <br />
                  <span className="text-sm font-mono tracking-widest uppercase">Precision</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Tread Pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-industrial-yellow opacity-20 flex">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-heavy-charcoal transform skew-x-12"></div>
            ))}
          </div>
        </section>

        {/* Services Section - Industrial Grid */}
        <section id="services" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-industrial-orange font-black text-sm tracking-[0.3em] mb-4">CORE CAPABILITIES</h2>
                <h3 className="text-5xl md:text-6xl font-display font-black text-heavy-charcoal leading-none">
                  WE MOVE THE <span className="text-industrial-yellow">EARTH</span>
                </h3>
              </div>
              <p className="text-gray-500 font-medium max-w-xs border-l-2 border-gray-200 pl-4">
                Specialised machinery for every terrain. From bulk excavation to precision rock sawing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
              {[
                { title: "Rock Sawing", desc: "Precision rock excavation with minimal vibration.", icon: Shovel },
                { title: "Bulk Excavation", desc: "Large scale site clearing and preparation.", icon: Construction },
                { title: "Difficult Access", desc: "Tight access specialists for residential sites.", icon: HardHat },
                { title: "Pool Digging", desc: "Detailed excavation for spas and swimming pools.", icon: Fuel },
                { title: "Retaining Walls", desc: "Structural sandstone and block wall construction.", icon: Hammer },
                { title: "Site Clearing", desc: "Rubbish, fill, and vegetation removal.", icon: Truck },
              ].map((service, i) => (
                <div key={i} className="group p-10 border-r border-b border-gray-200 hover:bg-heavy-charcoal transition-all duration-300">
                  <div className="w-16 h-16 bg-industrial-yellow rounded-sm flex items-center justify-center text-heavy-charcoal mb-8 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-black text-heavy-charcoal group-hover:text-white mb-4 transition-colors">{service.title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-400 mb-8 transition-colors">{service.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-industrial-orange font-black text-xs tracking-widest uppercase group-hover:text-industrial-yellow transition-colors">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section - The Fleet */}
        <section id="equipment" className="py-24 bg-heavy-charcoal text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-industrial-yellow/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweq88SLfRea3FnHiZ2VN0h3SkMdeh_94p_zIsCvtKgy3Dx1RUd6jaD8zstDXTs2c6lu3XD1DNZyODa5EsSJnp8dYbEEUFT66-vujv_YCm21b99El-5qF7ezXwjrPL2-tytZMxiRmiQ=w980-h700-n-k-no-nu" 
                  alt="Modern Excavation Fleet" 
                  className="rounded-sm border-4 border-industrial-yellow shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-industrial-yellow text-heavy-charcoal p-6 font-display font-black text-2xl transform -skew-x-12 z-20">
                  MODERN FLEET
                </div>
              </div>
              <div>
                <h2 className="text-industrial-yellow font-black text-sm tracking-[0.3em] mb-4">THE MACHINERY</h2>
                <h3 className="text-5xl font-display font-black mb-8 leading-tight">
                  BUILT FOR THE <br />
                  <span className="text-industrial-yellow">TOUGHEST</span> JOBS
                </h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Our fleet is meticulously maintained and equipped with the latest attachments. From mini-excavators for tight backyards to heavy-duty loaders for bulk earthmoving.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Skid Steer Loaders",
                    "3.5t - 15t Excavators",
                    "Track Mounted Dumpers",
                    "Rock Saws & Hammers",
                    "Sandstone Block Grabs",
                    "Tight Access Mini-Diggers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-mono text-sm font-bold">
                      <div className="w-2 h-2 bg-industrial-yellow"></div>
                      {item.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Rugged & Personal */}
        <section id="team" className="py-24 bg-site-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-industrial-orange font-black text-sm tracking-[0.3em] mb-4">FAMILY OPERATED</h2>
                <h3 className="text-5xl font-display font-black text-heavy-charcoal mb-8">22 YEARS IN THE <span className="text-industrial-yellow">DIRT</span></h3>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Northern Beaches Earthmoving is a true family business. Owned and operated by Jim Brigden for over two decades, we've built our reputation on one simple principle: <span className="font-bold text-heavy-charcoal">Do the job right the first time.</span>
                  </p>
                  <p>
                    Jim's daughter, Sophie, has joined the team as a full-time operator, bringing a new generation of precision to the business. When you hire us, you're getting the owners on-site, every time.
                  </p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-white p-6 border-b-4 border-industrial-yellow shadow-sm">
                    <h4 className="font-display font-black text-xl text-heavy-charcoal mb-1">JIM BRIGDEN</h4>
                    <p className="text-xs font-mono font-bold text-industrial-orange uppercase tracking-widest mb-4">Owner / Lead Operator</p>
                    <p className="text-sm text-gray-500 italic">"I've been in the industry for 27 years. I treat every site like it's my own property."</p>
                  </div>
                  <div className="bg-white p-6 border-b-4 border-industrial-yellow shadow-sm">
                    <h4 className="font-display font-black text-xl text-heavy-charcoal mb-1">SOPHIE BRIGDEN</h4>
                    <p className="text-xs font-mono font-bold text-industrial-orange uppercase tracking-widest mb-4">Excavator Operator</p>
                    <p className="text-sm text-gray-500 italic">"Operating machinery is in my blood. Precision and safety are my top priorities."</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipOXwttrfoIBCVAgdIkSx-Borf2hQ2I6zYQH_W4Q=w243-h304-n-k-no-nu" 
                  alt="Jim at Work" 
                  className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500 h-80 w-full object-cover border-2 border-gray-200"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipOTEEQYi9VSZCJn2CfwQjLLuXl41Yor6yguq8np=w980-h700-n-k-no-nu" 
                  alt="Sophie at Work" 
                  className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500 h-80 w-full object-cover border-2 border-gray-200 mt-8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Industrial Cards */}
        <section className="py-24 bg-white border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-industrial-orange font-black text-sm tracking-[0.3em] mb-4">CLIENT FEEDBACK</h2>
              <h3 className="text-5xl font-display font-black text-heavy-charcoal">WHAT OUR <span className="text-industrial-yellow">CLIENTS</span> SAY</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Jim and Sophie did an incredible job on our difficult access site. Professional, safe, and efficient. They managed to navigate a very tight space with zero damage to existing structures.",
                  name: "Mark S.",
                  location: "Manly",
                  stars: 5
                },
                {
                  quote: "The rock sawing was precise and saved us weeks of manual labor. Highly recommend Northern Beaches Earthmoving for any complex residential excavation. Truly experts in their field.",
                  name: "Sarah L.",
                  location: "Avalon",
                  stars: 5
                },
                {
                  quote: "Best earthmoving team in Sydney. They treat your property like their own. The sandstone block retaining wall they built is a work of art. Reliable and honest operators.",
                  name: "David R.",
                  location: "Mona Vale",
                  stars: 5
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-site-bg p-8 border-l-8 border-industrial-yellow relative">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-industrial-yellow fill-industrial-yellow" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col">
                    <span className="font-display font-black text-heavy-charcoal uppercase tracking-tighter">{testimonial.name}</span>
                    <span className="text-xs font-mono font-bold text-industrial-orange uppercase tracking-widest">{testimonial.location}</span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-10">
                    <Construction className="w-12 h-12 text-heavy-charcoal" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - High Contrast */}
        <section id="contact" className="py-24 bg-heavy-charcoal text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-yellow/5 skew-x-12 transform translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-industrial-yellow font-black text-sm tracking-[0.3em] mb-4">GET AN ESTIMATE</h2>
                <h3 className="text-5xl font-display font-black mb-8">LET'S GET TO <span className="text-industrial-yellow">WORK</span></h3>
                <p className="text-gray-400 text-lg mb-12">
                  Ready to break ground? Contact Jim directly for a site visit and a detailed quote. No job is too big or too small for our team.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-industrial-yellow text-heavy-charcoal flex items-center justify-center transform -skew-x-12 group-hover:bg-white transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Call Jim Directly</p>
                      <a href="tel:0422929660" className="text-2xl font-display font-black hover:text-industrial-yellow transition-colors">0422 929 660</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-industrial-yellow text-heavy-charcoal flex items-center justify-center transform -skew-x-12 group-hover:bg-white transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Email Our Team</p>
                      <a href="mailto:jim@northernbeachesearthmoving.com.au" className="text-xl font-display font-black hover:text-industrial-yellow transition-colors">jim@northernbeachesearthmoving.com.au</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-10 transform -skew-x-2">
                <div className="transform skew-x-2">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input type="text" placeholder="YOUR NAME" className="w-full bg-gray-100 border-b-2 border-gray-200 p-4 font-bold text-heavy-charcoal outline-none focus:border-industrial-yellow transition-colors" />
                      <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-100 border-b-2 border-gray-200 p-4 font-bold text-heavy-charcoal outline-none focus:border-industrial-yellow transition-colors" />
                    </div>
                    <select className="w-full bg-gray-100 border-b-2 border-gray-200 p-4 font-bold text-heavy-charcoal outline-none focus:border-industrial-yellow transition-colors">
                      <option>SELECT SERVICE</option>
                      <option>ROCK SAWING</option>
                      <option>BULK EXCAVATION</option>
                      <option>POOL DIGGING</option>
                      <option>SITE CLEARING</option>
                    </select>
                    <textarea rows={4} placeholder="PROJECT DETAILS" className="w-full bg-gray-100 border-b-2 border-gray-200 p-4 font-bold text-heavy-charcoal outline-none focus:border-industrial-yellow transition-colors"></textarea>
                    <button className="w-full bg-heavy-charcoal hover:bg-industrial-yellow hover:text-heavy-charcoal text-white font-display font-black text-xl py-5 transition-all uppercase tracking-tighter">
                      Send Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 border-t-8 border-industrial-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-industrial-yellow rounded-sm flex items-center justify-center text-heavy-charcoal font-display font-black text-xl transform -skew-x-12">
                NB
              </div>
              <span className="font-display font-black text-xl text-white tracking-tighter">NORTHERN BEACHES EARTHMOVING</span>
            </div>
            <div className="flex gap-8 font-mono text-[10px] font-bold tracking-widest uppercase">
              <span>Fully Insured</span>
              <span>OHS Compliant</span>
              <span>Workcover Certified</span>
            </div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} NB EARTHMOVING. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
