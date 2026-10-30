import { useEffect } from "react";
import { LuX } from "react-icons/lu";

const ModalSertifikat = ({ image, alt = "Sertifikat", onClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button type="button" onClick={onClose} aria-label="Tutup" className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-105">
        <LuX className="size-5" />
      </button>

      <img src={image} alt={alt} onClick={(e) => e.stopPropagation()} className="max-h-[85dvh] w-auto max-w-full rounded-xl object-contain shadow-2xl" />
    </div>
  );
};

export default ModalSertifikat;
