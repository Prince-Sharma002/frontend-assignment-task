import Navbar from '@/components/Navbar';
import UserCard from '@/components/UserCard';

export default function Users() {
  const users = [
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com"
    },
    {
      name: "Priya Sharma",
      email: "priya.sharma@company.org"
    },
    {
      name: "Michael Chen",
      email: "m.chen@startup.io"
    },
    {
      name: "Arjun Patel",
      email: "arjun.p@techcorp.net"
    },
    {
      name: "Emily Rodriguez",
      email: "emily.r@agency.com"
    },
    {
      name: "Raj Malhotra",
      email: "raj.m@freelance.dev"
    },
    {
      name: "Jessica Williams",
      email: "j.williams@company.com"
    },
    {
      name: "Ananya Desai",
      email: "ananya.d@startup.io"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-12 sm:py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Team
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Meet the amazing people who make our company great. Each member brings unique skills and passion to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <UserCard 
                key={index}
                name={user.name}
                email={user.email}
              />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Want to join us?
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              We're always looking for talented individuals to join our growing team.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-violet-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
