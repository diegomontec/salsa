export default function Maps () {
  return (
    <div className="relative w-full pb-[20%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.982496034093!2d-35.678024124973994!3d-9.596775190489003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701470066a4132d%3A0x63b5e04f7eb76274!2sSalsa%20Home%20Resort!5e0!3m2!1spt-BR!2sbr!4v1736261401451!5m2!1spt-BR!2sbr"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};
