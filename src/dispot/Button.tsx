interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline: "border border-gray-300 hover:bg-gray-50",
    "outline-light": "border border-white hover:bg-white/10 text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`rounded-lg font-medium transition ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;