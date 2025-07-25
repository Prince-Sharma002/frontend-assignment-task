import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Simplertechnologies: Pioneering ERP and Management Software Solutions for Modern Businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                Simplertechnologies was established with a singular goal: to simplify the complexities of business management through cutting-edge ERP and management software solutions. We recognize that every business is unique, with its own set of challenges and requirements. Therefore, we focus on creating solutions that are not only powerful but also adaptable, ensuring they cater to the diverse needs of industries across the spectrum.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Since our founding, we've been committed to delivering exceptional 
                products that not only meet but exceed our users' expectations.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  We constantly push the boundaries of what's possible, embracing 
                  new technologies and methodologies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 sm:p-12 shadow-lg mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Technological Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
Mobile-Friendly Interfaces</h3>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Enhanced Cybersecurity</h3>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Cloud-Based Scalability</h3>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Join the Simplertechnologies Revolution</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Simplertechnologies is more than just a software company—we're a partner in your success. Our ERP and management software solutions empower businesses to achieve their full potential by streamlining operations, enhancing productivity, and driving innovation. Explore how Simplertechnologies can transform your business. Contact us today and take the first step toward a smarter, more efficient future.
            </p>
            <a
              href="/signup"
              className="inline-block bg-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-violet-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Us...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
