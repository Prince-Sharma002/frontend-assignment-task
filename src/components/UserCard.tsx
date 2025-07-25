interface UserCardProps {
  name: string;
  email: string;
}

export default function UserCard({ name, email }: UserCardProps) {
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-violet-500 transition-all duration-200">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {getInitials(name)}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-white truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-300 truncate">
            {email}
          </p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center text-xs text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          Active
        </div>
        
        <button className="text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}
