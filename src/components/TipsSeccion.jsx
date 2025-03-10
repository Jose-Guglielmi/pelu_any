import { Heart } from "lucide-react";

export const TipsSeccion = () => {
  const tips = [
    {
      title: "Hidratación diaria",
      description:
        "Mantén tu cabello hidratado usando acondicionador después de cada lavado.",
    },
    {
      title: "Protección térmica",
      description:
        "Usa siempre protector térmico antes de utilizar herramientas de calor.",
    },
    {
      title: "Cortes regulares",
      description:
        "Recorta las puntas cada 2-3 meses para evitar las puntas abiertas.",
    },
    {
      title: "Lavado adecuado",
      description:
        "Lava tu cabello con agua tibia y finaliza con agua fría para sellar la cutícula.",
    },
    {
      title: "Alimentación balanceada",
      description:
        "Una dieta rica en proteínas y vitaminas fortalece tu cabello desde adentro.",
    },
    {
      title: "Masaje capilar",
      description:
        "Masajea tu cuero cabelludo regularmente para estimular el crecimiento.",
    },
  ];
  return (
    <div className="flex items-center flex-col pt-5" id="tips">
      <h1 className="text-4xl font-bold text-[#722F37]">Tips de Belleza</h1>
      <p className="text-lg text-center text-[#722F37] mt-3">
        Consejos profesionales para mantener tu cabello saludable
      </p>
      {tips.map((tip) => (
        <div className="rounded-lg p-5 flex flex-col items-center border border-[#D4AF37] m-2">
          <div className="flex flex-row items-center mb-3">
            <Heart color="#D4AF37" size={20} />
            <h1 className="text-[#722F37] text-2xl font-bold pl-2">
              {tip.title}
            </h1>
          </div>
          <p className="text-center text-[#722F37]">{tip.description}</p>
        </div>
      ))}
    </div>
  );
};
