'use client';

import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="pt-20 px-4">
        <div className="max-w-2xl mx-auto py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-blue-500 w-16"></div>
              <span className="px-4 text-blue-400 text-sm font-medium">Contact Us.</span>
              <div className="h-px bg-blue-500 w-16"></div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              What's on your mind?
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              We're here to help! Tell us what you're looking for and we'll get you connected to the right people.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition-colors cursor-pointer">
              <div className="mb-3">
                <span className="text-blue-400 text-sm font-medium">E-Mail Us.</span>
              </div>
              <div className="text-gray-300 text-lg">
                info@simplertechnologies.in
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition-colors cursor-pointer">
              <a href="https://www.linkedin.com/company/simplertechnologies/posts/?feedView=all">
              <div className="mb-3">
                <span className="text-blue-400 text-sm font-medium">Connect on LinkedIn.</span>
              </div>
              <div className="text-gray-300 text-lg">
                 Simplertechnologies
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
