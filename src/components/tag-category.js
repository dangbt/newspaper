import React from "react";

export default function TagCategory({ children, varition, className = "" }) {
  switch (varition) {
    case "success": {
      return (
        <div className={`font-semibold text-green-500 ${className}`}>
          {children}
        </div>
      );
    }
    case "warning": {
      return (
        <div className={`font-semibold text-yellow-500 ${className}`}>
          {children}
        </div>
      );
    }
    case "error": {
      return (
        <div className={`font-semibold text-red-500 ${className}`}>
          {children}
        </div>
      );
    }
    default: {
      return (
        <div className={`text-catalina-blue font-semibold ${className}`}>
          {children}
        </div>
      );
    }
  }
}
