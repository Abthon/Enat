"use client"

import { useState } from "react"
import Image from "next/image"
import { UsersRound } from "lucide-react";

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  author: string;
}

interface MemberSectionProps {
  members?: Member[];
}

const defaultMembers: Member[] = [
  {
    id: 1,
    name: "Joe Pizzella",
    role: "Founder | Vision & Experience",
    image: "/images/person1.jpg",
    quote: "God helps those who help themselves. Energy and persistence conquer all things. Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    id: 1,
    name: "Joe Pizzella",
    role: "Founder | Vision & Experience",
    image: "/images/person2.jpg",
    quote: "God helps those who help themselves. Energy and persistence conquer all things. Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    id: 1,
    name: "Joe Pizzella",
    role: "Founder | Vision & Experience",
    image: "/images/person3.jpg",
    quote: "God helps those who help themselves. Energy and persistence conquer all things. Well done is better than well said.",
    author: "Benjamin Franklin"
  }
];

export default function MemberSection({ members = defaultMembers }: MemberSectionProps) {

  return (
    <section className="pt-25 pb-70 to-pink-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-6">
          <UsersRound width={30} height={30}/>
          <h3 className="text-[#3C3C3C] font-semibold font-montserrat">Who We Are</h3>
        </div>
        <h2 className="text-4xl md:text-4xl text-[#3C3C3C] font-bold font-montserrat mb-4">
          Meet the founders
        </h2>
      </div>

      {/* Members Grid */}
      <div className="flex justify-center items-center px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: Member }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-90 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative z-10">
        {/* Profile Image */}
        <div className="relative h-96 overflow-hidden rounded-b-2xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Basic Info */}
        <div className="pl-4 pt-4 pb-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-montserrat">{member.name}</h3>
          <p className="text-neutral-500 text-sm font-medium text-black font-montserrat">
            {member.role}
          </p>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 bg-gradient-to-br from-slate-800 via-purple-900 to-pink-500 text-white p-6 rounded-2xl transition-all duration-500 ease-out z-0 flex items-end ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{
          height: "370px",
          top: "0px", // Start at same position as main card
          transform: isHovered
            ? "translate3d(0px, 240px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" // Pull out below main card
            : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", // Hidden behind main card
          transformStyle: "preserve-3d",
        }}
      >
        <div className="text-center space-y-2 w-full">
          <p className="text-sm leading-relaxed mb-4 font-montserrat">{member.quote}</p>
          <p className="text-gray-300 text-xs font-montserrat">— {member.author}</p>
        </div>
      </div>
    </div>
  )
}
