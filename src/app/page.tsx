import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            SimplerTechnologies ERP Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
           Our cloud-based ERP system empowers businesses with real-time tracking, AI-driven analytics, and seamless automation to enhance operational efficiency and customer experience. With powerful modules for inventory control, CRM, pricing strategies, and compliance, SimplerTechnologies helps brands scale effortlessly while staying ahead of market trends.
          </p>
          
          <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
            <Link
              href="/signup"
              className="bg-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-violet-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="border-2 border-violet-600 text-violet-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-violet-600 hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 shadow-lg text-center hover:border-violet-500 transition-colors">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Retail and E-Commerce Industries</h3>
              <p className="text-gray-300 text-sm sm:text-base">Retail and e-commerce are among the fastest-growing and most competitive industries globally. </p>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 shadow-lg text-center hover:border-violet-500 transition-colors">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Healthcare and Clinics</h3>
              <p className="text-gray-300 text-sm sm:text-base">Transforming Healthcare and Clinics with ERP Solutions: Revolutionizing Healthcare with ERP.</p>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 shadow-lg text-center hover:border-violet-500 transition-colors md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Hotels and Hospitality Industry</h3>
              <p className="text-gray-300 text-sm sm:text-base">The hospitality industry is one of the most dynamic and customer-centric sectors in the world</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
