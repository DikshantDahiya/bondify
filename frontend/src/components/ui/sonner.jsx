import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-black group-[.toaster]:text-white group-[.toaster]:border-slate-800 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-white",
          actionButton:
            "group-[.toast]:bg-white group-[.toast]:text-black",
          cancelButton:
            "group-[.toast]:bg-gray-700 group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
