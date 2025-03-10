import { Card } from "./cards";
import { useState } from "react";
import { Modal } from "./Modal";
import { TipsSeccion } from "./TipsSeccion";

export const Main1 = () => {
  const [onOpen, setOnOpen] = useState(false);
  const [onSelectImg, setOnSelectedImg] = useState({});

  const corteSlides = [
    {
      image: "/IMG/Cortes/Corte desmechado y en capas.jpg",
      info: "Corte desmechado y en capas💖",
    },
  ];
  return (
    <main>
      <Modal
        onClose={() => setOnOpen(false)}
        isOpen={onOpen}
        title={onSelectImg.info}
      >
        <img src={onSelectImg.image} alt={onSelectImg.info} />
      </Modal>
      <div className="bg-gradient-to-b from-[#F5C0C0]/20 to-transparent pb-8 p-5 ">
        <h1 className="text-4xl text-[#722F37] font-bold">
          Belleza y cuidado para tu cabello
        </h1>
        <h2 className="text-[#722F37] text-muted-foreground md:text-xl mt-5 ">
          Descubre mis servicios y tratamientos exclusivos para lucir un cabello
          radiante.
        </h2>
        <h2 className="text-[#722F37] text-muted-foreground md:text-xl mt-2">
          Tu pelo es el mejor accesorio 💖
        </h2>
        <div className="flex gap-2">
          <button
            className={`py-2 mt-10 w-35 bg-[#722F37]  text-white rounded hover: transition-colors`}
          >
            Reserver cita
          </button>
        </div>
      </div>
      <div
        className="flex justify-center items-center flex-col bg-gray-100 rounded-t-lg pb-5"
        id="servicios"
      >
        <h2 className="text-4xl text-[#722F37] font-bold mt-6">
          Nuestros servicios
        </h2>

        <Card
          title="Corte"
          subtitle="Cortes personalizados para todos los estilos"
          slides={corteSlides}
          onClick={setOnOpen}
          onSelect={setOnSelectedImg}
        />
      </div>
      <TipsSeccion />
    </main>
  );
};
