import React from "react";

// Card Component
export function Card({ children, className = "" }) {
  return <div className={`rounded-2xl shadow-md  ${className}`}>{children}</div>;
}

// CardContent Component
export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
