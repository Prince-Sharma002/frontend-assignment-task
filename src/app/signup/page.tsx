'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateFullName = (name: string): string => {
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
      return 'Full name is required';
    }
    if (trimmedName.length < 2) {
      return 'Full name must be at least 2 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
      return 'Full name should only contain letters and spaces';
    }
    return '';
  };

  const validateEmail = (email: string): string => {
    const trimmedEmail = email.trim();
    if (trimmedEmail.length === 0) {
      return 'Email address is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password: string): string => {
    if (password.length === 0) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'Password must contain at least one number';
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = '';

    switch (name) {
      case 'fullName':
        error = validateFullName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'password':
        error = validatePassword(value);
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const fullNameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      fullName: fullNameError,
      email: emailError,
      password: passwordError
    });

    // If no errors, submit form
    if (!fullNameError && !emailError && !passwordError) {
      setIsSubmitted(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ fullName: '', email: '', password: '' });
        setIsSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            Create Account
          </h2>

          {isSubmitted && (
            <div className="bg-green-500/20 border border-green-400 text-green-400 px-4 py-3 rounded-lg mb-6 text-center">
              Account created successfully! Welcome aboard!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 transition-colors ${
                  errors.fullName
                    ? 'border-red-500 focus:ring-red-400 focus:ring-opacity-50'
                    : formData.fullName && !errors.fullName
                    ? 'border-green-500 focus:ring-green-400 focus:ring-opacity-50'
                    : 'border-slate-600 focus:ring-violet-400 focus:ring-opacity-50'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 transition-colors ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-400 focus:ring-opacity-50'
                    : formData.email && !errors.email
                    ? 'border-green-500 focus:ring-green-400 focus:ring-opacity-50'
                    : 'border-slate-600 focus:ring-violet-400 focus:ring-opacity-50'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 transition-colors ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-400 focus:ring-opacity-50'
                    : formData.password && !errors.password
                    ? 'border-green-500 focus:ring-green-400 focus:ring-opacity-50'
                    : 'border-slate-600 focus:ring-violet-400 focus:ring-opacity-50'
                }`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
