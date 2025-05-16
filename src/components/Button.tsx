import React from "react";

interface ButtonProps {
  name: string;
  background: string;
  text: string;
  icon?: React.ElementType;
  onClick: () => void;
  className : string
}

export default function Button({
  name,
  background,
  text,
  icon: Icon,
  onClick: onClick,
  className : className
}: ButtonProps) {
  return (
    <div className="rainbow-border-wrapper">
      <button
        onClick={onClick}
        className={`rainbow-button ${className}`}
        style={{
          backgroundColor: background,
          color: text,
          borderColor: text,
        }}
      >
        {name}
        {Icon && <Icon />}
      </button>
    </div>
  );
}
