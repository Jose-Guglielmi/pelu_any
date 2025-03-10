import { AlignJustify } from "lucide-react";
import { AnimatedSidebar } from "./AnimatedSidebar";
import { useState } from "react";

export const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = [
    { text: "Servicios", link: "#servicios" },
    { text: "Tips", link: "#tips" },
    { text: "Tratamientos", link: "#tratamientos" },
    { text: "Horarios", link: "#horarios" },
    { text: "Contacto", link: "#contacto" },
  ];
  return (
    <>
      <div className="sticky flex justify-between z-100 items-center pl-2 pr-2 top-0 h-18 bg-white/10 backdrop-blur-md shadow-lg rounded-b-2xl ">
        <div className="flex items-center">
          <div className="bg-[url('/IMG/Logo.jpg')] bg-cover bg-center w-[50px] h-[50px] mt-2 ml-2 rounded-full"></div>
          <h1 className="text-2xl pl-2 text-[#722F37]">Any Pelu💋</h1>
        </div>
        <AlignJustify
          className="border-1 border-[#722F37] p-2 rounded-lg"
          size={40}
          color="#722F37"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
      <AnimatedSidebar
        title="Any Peluquería"
        menuOptions={menuItems}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        buttonText="Reservar cita"
        buttonAction={() => alert("Reserva iniciada")}
      ></AnimatedSidebar>
    </>
  );
};
