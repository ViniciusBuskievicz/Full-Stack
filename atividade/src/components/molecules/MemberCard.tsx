"use client";
import React from "react";

type Props = {
  name: string;
  role: string;
  description?: string;
  avatarGradientFrom?: string;
  avatarGradientTo?: string;
  onViewProfile?: () => void;
};

export function MemberCard({
  name,
  role,
  description,
  avatarGradientFrom = "from-gray-500",
  avatarGradientTo = "to-gray-700",
  onViewProfile,
}: Props) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 bg-gradient-to-tr ${avatarGradientFrom} ${avatarGradientTo} rounded-full`} />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <button
        onClick={onViewProfile}
        className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-md text-sm font-medium"
      >
        Ver Perfil
      </button>
    </div>
  );
}
