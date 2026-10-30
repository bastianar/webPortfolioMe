import { useState } from "react";
import { sertifikat } from "../data.js";
import ModalSertifikat from "./ModalSertifikat.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const Sertifikat = () => {
  const [showSertifikat, setShowSertifikat] = useState(null);

  const handleShowSertifikat = (p) => {
    setShowSertifikat(p);
  };

  const handleCloseShowSertifikat = () => {
    setShowSertifikat(null);
  };

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-28">
      <SectionHeading eyebrow="Certifikate" title="Sertifikat yang saya miliki" />

      <Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {sertifikat.map((p) => (
            <div key={p.title} className="w-full cursor-pointer">
              <div onClick={() => handleShowSertifikat(p)} className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow duration-300 hover:shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={`Tampilan ${p.title}`}
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    className="aspect-16/10 w-full object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between w-full h-30  p-6 ">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <div className="flex  justify-between">
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.publisher}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {showSertifikat && (<ModalSertifikat key={showSertifikat.title} image={showSertifikat.image} onClose={handleCloseShowSertifikat} />)}
    </section>
  );
};

export default Sertifikat;
