import React from "react";

interface ButtonProps {
  name: string;
  background: string;
  text: string;
  icon?: React.ElementType;
  onClick: () => void;
}

export default function Button({
  name,
  background,
  text,
  icon: Icon,
  onClick: onClick,
}: ButtonProps) {
  return (
    <div className="rainbow-border-wrapper">
      <button
        onClick={onClick}
        className="rainbow-button"
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
