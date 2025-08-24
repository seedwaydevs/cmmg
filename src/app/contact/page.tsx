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
  MapPin,
  ChevronRight,
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
    <div className="min-h-screen bg-neutral-50 py-20 px-4">
      <div className="w-[90%] mx-auto">
        {/* Header Section */}
        <div className="text-center mt-5 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-neutral-100 rounded-full text-sm font-medium text-neutral-600 mb-6">
            <Mail className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your creative vision to life? Connect with our team
            to discuss your project requirements and explore our professional
            services.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-row bg-white border border-neutral-200 rounded-xl p-2 shadow-sm">
            <button
              onClick={() => setActiveTab("booking")}
              className={`px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 ${
                activeTab === "booking"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Studio Booking
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 ${
                activeTab === "contact"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              General Enquiry
            </button>
          </div>
        </div>

        {/* Forms Container */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg overflow-hidden">
          {/* Booking Form */}
          {activeTab === "booking" && (
            <div className="p-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                  Studio Booking Request
                </h2>
                <p className="text-neutral-600">
                  Complete the form below to reserve your studio session
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-8">
                {/* Service Selection */}
                <div>
                  <label className="block text-neutral-900 font-semibold mb-4 text-lg">
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
                            className={`p-6 rounded-xl border-2 transition-all duration-200 text-center ${
                              bookingData.service === service.value
                                ? "border-neutral-900 bg-neutral-50"
                                : "border-neutral-200 hover:border-neutral-300 bg-neutral-50/50"
                            }`}
                          >
                            <IconComponent className="w-8 h-8 text-neutral-700 mb-3 mx-auto" />
                            <p className="text-neutral-900 font-medium">
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
                    <label className="block text-neutral-900 font-semibold mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, name: e.target.value })
                      }
                      className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-900 font-semibold mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          email: e.target.value,
                        })
                      }
                      className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-900 font-semibold mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, phone: e.target.value })
                    }
                    className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-900 font-semibold mb-3">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, date: e.target.value })
                      }
                      className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-900 font-semibold mb-3">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      required
                      value={bookingData.time}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, time: e.target.value })
                      }
                      className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* ID Copy Upload */}
                <div>
                  <label className="block text-neutral-900 font-semibold mb-3">
                    ID Copy Upload
                  </label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center hover:border-neutral-400 transition-colors bg-neutral-50/50">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="id-upload"
                    />
                    <label htmlFor="id-upload" className="cursor-pointer block">
                      <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                      <p className="text-neutral-900 font-medium text-lg mb-1">
                        {bookingData.idCopy
                          ? bookingData.idCopy
                          : "Upload ID Copy"}
                      </p>
                      <p className="text-neutral-500 text-sm">
                        Supports: JPG, PNG, PDF (Maximum 5MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-neutral-900 font-semibold mb-3">
                    Project Details
                  </label>
                  <textarea
                    value={bookingData.message}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        message: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors resize-none"
                    placeholder="Please provide details about your project, timeline, and any specific requirements..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-neutral-900 text-white font-semibold text-lg rounded-xl hover:bg-neutral-800 transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    Submit Booking Request
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Contact Form */}
          {activeTab === "contact" && (
            <div className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                  General Enquiry
                </h2>
                <p className="text-neutral-600">
                  Get in touch with our team for any questions or information
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-8">
                {/* Enquiry Type */}
                <div>
                  <label className="block text-neutral-900 font-semibold mb-4 text-lg">
                    Enquiry Type
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
                            className={`p-6 rounded-xl border-2 transition-all duration-200 text-center ${
                              contactData.enquiryType === type.value
                                ? "border-neutral-900 bg-neutral-50"
                                : "border-neutral-200 hover:border-neutral-300 bg-neutral-50/50"
                            }`}
                          >
                            <IconComponent className="w-8 h-8 text-neutral-700 mb-3 mx-auto" />
                            <p className="text-neutral-900 font-medium">
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
                    <label className="block text-neutral-900 font-semibold mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={(e) =>
                        setContactData({ ...contactData, name: e.target.value })
                      }
                      className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-900 font-semibold mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactData.email}
                      onChange={(e) =>
                        setContactData({
                          ...contactData,
                          email: e.target.value,
                        })
                      }
                      className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-900 font-semibold mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactData.phone}
                    onChange={(e) =>
                      setContactData({ ...contactData, phone: e.target.value })
                    }
                    className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-neutral-900 font-semibold mb-3">
                    Message
                  </label>
                  <textarea
                    required
                    value={contactData.message}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        message: e.target.value,
                      })
                    }
                    rows={6}
                    className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors resize-none"
                    placeholder="Please describe your enquiry in detail, including any specific requirements or questions you may have..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-neutral-900 text-white font-semibold text-lg rounded-xl hover:bg-neutral-800 transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-16">
          <div className="bg-neutral-100 rounded-2xl p-8 border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Phone</h4>
                <p className="text-neutral-600">+27 XX XXX XXXX</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Email</h4>
                <p className="text-neutral-600">info@cmmg.co.za</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  Location
                </h4>
                <p className="text-neutral-600">
                  1 2nd Rd, Halfway House Estate, Midrand, 1685
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
