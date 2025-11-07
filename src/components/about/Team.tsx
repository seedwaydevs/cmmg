import React from "react";
import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abraham Sibiya",
      position: "Founder & CEO",
      image: "/asib.jpg", // Replace with actual path
    },
    {
      id: 2,
      name: "Sifiso Mtshali",
      position: "Creative Director",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // Replace with actual path
    },
    {
      id: 3,
      name: "Palesa Ramosa",
      position: "Social Media Coordinator",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGupWs9fvHdsA/profile-displayphoto-shrink_800_800/B4DZTHLRzjGkAc-/0/1738508411526?e=1764201600&v=beta&t=fi1fh_wBi7RlaxrmAqFU6TMP4wNU5N8S4I4g-9hkHYY", // Replace with actual path
    },
    {
      id: 4,
      name: "Lemogang Ncube",
      position: "Information Technology Intern",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFqpxx9f-CcIQ/profile-displayphoto-shrink_800_800/B4DZeBrA2HGkAg-/0/1750227227403?e=1764201600&v=beta&t=GwNwGrrZZ_F0ajZxHXEGbzfJP4nct4adqFKPdOOOcbU", // Replace with actual path
    },
    {
      id: 5,
      name: "Akithi Nzuza",
      position: "Digital Media Intern",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGDUtdyRMs50Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713787809066?e=1764201600&v=beta&t=X-Kzr-qtgt8tEDXwAU2uE1rg8_51C7Awjcdj6omfspY", // Replace with actual path
    },
    {
      id: 6,
      name: "Rorisang Putu",
      position: "Information Technology Intern",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGX3E1US54ygw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720921174508?e=1764201600&v=beta&t=EciQ5yqDd4c2M3Eqdkesx4fbEQ-Npao7tjzpDFhMq0I", // Replace with actual path
    },
  ];

  return (
    <div className="relative w-full py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Glassmorphic Card Background */}
            <div className="absolute inset-0 backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all duration-300"></div>

            <div className="relative p-6 h-full flex flex-col">
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-300 z-10"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Accent Corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                ></div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                {/* Number Badge */}
                <div className="flex items-center mb-3">
                  <span className="text-orange-500 text-sm font-black tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="ml-3 w-8 h-px bg-orange-500/50"></div>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                  {member.name}
                </h3>

                <p className="text-gray-300 font-medium uppercase text-sm tracking-wide">
                  {member.position}
                </p>

                {/* Hover Indicator */}
                <div className="pt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-blue-400 text-xs uppercase tracking-wider font-semibold">
                    View Profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
