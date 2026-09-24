import React from "react";

const Footer = () => {
  const kontak = [
    { id: 1, nama: "Instagram", url: "https://www.instagram.com/zhidfatih_/" },
    { id: 2, nama: "Whatsapp", url: "https://wa.me/+6287866175496" },
  ];

  return (
    <footer id="Kontak">
      <h2 id="Judul">Kontak & Sosial Media</h2>
      <div className="kontak">
        {kontak.map((item) => (
          <a key={item.id} href={item.url}>
            <i>{item.nama}</i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
