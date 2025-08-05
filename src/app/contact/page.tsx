"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Upload,
  Mail,
  Phone,
  User,
  MessageSquare,
  Camera,
  Music,
  Video,
  Headphones,
} from "lucide-react";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("booking");
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
    idCopy: null,
  });
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const bookingServices = [
    { value: "music-studio", label: "Music Studio Recording", icon: Music },
    { value: "sound-production", label: "Sound Production", icon: Headphones },
    { value: "green-screen", label: "Green Screen Studio", icon: Camera },
  ];

  const enquiryTypes = [
    { value: "general", label: "General Enquiry", icon: MessageSquare },
    { value: "video-production", label: "Video Production", icon: Video },
    {
      value: "event-sound",
      label: "Event Sound & Entertainment",
      icon: Headphones,
    },
  ];

  const handleBookingSubmit = (e: any) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    alert("Booking request submitted successfully!");
  };

  const handleContactSubmit = (e: any) => {
    e.preventDefault();
    console.log("Contact submitted:", contactData);
    alert("Message sent successfully!");
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    setBookingData({ ...bookingData, idCopy: file });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-700 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="py-36">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-black to-orange-800 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your creative vision to life? Choose how you'd like
              to connect with us.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-8 gap-4">
            <button
              onClick={() => setActiveTab("booking")}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                activeTab === "booking"
                  ? "bg-orange-600 text-white shadow-2xl scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
            >
              Studio Booking
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                activeTab === "contact"
                  ? "bg-orange-600 text-white shadow-2xl scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
            >
              General Contact
            </button>
          </div>
        </div>

        {/* Forms Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          {/* Booking Form */}
          {activeTab === "booking" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Studio Booking
                </h2>
                <p className="text-gray-300">
                  Reserve your creative space and time
                </p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Select Service
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {bookingServices.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <label key={service.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          value={service.value}
                          onChange={(e) =>
                            setBookingData({
                              ...bookingData,
                              service: e.target.value,
                            })
                          }
                          className="sr-only"
                        />
                        <div
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            bookingData.service === service.value
                              ? "border-orange-600 bg-orange-500/20 scale-105"
                              : "border-white/20 bg-white/5 hover:border-white/40"
                          }`}
                        >
                          <IconComponent className="w-8 h-8 text-orange-400 mb-2 mx-auto" />
                          <p className="text-white text-center font-medium">
                            {service.label}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, name: e.target.value })
                    }
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, email: e.target.value })
                    }
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={bookingData.phone}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, phone: e.target.value })
                  }
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="+27 XX XXX XXXX"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, date: e.target.value })
                    }
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    required
                    value={bookingData.time}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, time: e.target.value })
                    }
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* ID Copy Upload */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <Upload className="w-4 h-4 inline mr-2" />
                  ID Copy Upload
                </label>
                <div className="border-2 border-dashed border-white/30 rounded-xl p-6 text-center hover:border-orange-600 transition-colors">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="id-upload"
                  />
                  <label htmlFor="id-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-white font-medium">
                      {bookingData.idCopy
                        ? bookingData.idCopy
                        : "Click to upload ID copy"}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Supports: JPG, PNG, PDF (Max 5MB)
                    </p>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Additional Details
                </label>
                <textarea
                  value={bookingData.message}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-none"
                  placeholder="Tell us more about your project or any special requirements..."
                />
              </div>

              <button
                type="button"
                onClick={handleBookingSubmit}
                className="w-full py-4 bg-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Booking Request
              </button>
            </div>
          )}

          {/* Contact Form */}
          {activeTab === "contact" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Get In Touch
                </h2>
                <p className="text-gray-300">
                  Have questions or need more information?
                </p>
              </div>

              {/* Enquiry Type */}
              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  What can we help you with?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {enquiryTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <label key={type.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="enquiryType"
                          value={type.value}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              enquiryType: e.target.value,
                            })
                          }
                          className="sr-only"
                        />
                        <div
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            contactData.enquiryType === type.value
                              ? "border-purple-400 bg-purple-500/20 scale-105"
                              : "border-white/20 bg-white/5 hover:border-white/40"
                          }`}
                        >
                          <IconComponent className="w-8 h-8 text-purple-400 mb-2 mx-auto" />
                          <p className="text-white text-center font-medium">
                            {type.label}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) =>
                      setContactData({ ...contactData, name: e.target.value })
                    }
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) =>
                      setContactData({ ...contactData, email: e.target.value })
                    }
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={contactData.phone}
                  onChange={(e) =>
                    setContactData({ ...contactData, phone: e.target.value })
                  }
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="+27 XX XXX XXXX"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Your Message
                </label>
                <textarea
                  required
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-none"
                  placeholder="Tell us about your project, ask questions, or share any details that would help us assist you better..."
                />
              </div>

              <button
                type="button"
                onClick={handleContactSubmit}
                className="w-full py-4 bg-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Other Ways to Reach Us
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-600" />
                <span>+27 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-600" />
                <span>hello@yourstudio.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
