import React from "react";
import mainImg from "../assets/main.jpg";
import badminImg from "../assets/badmin.jpg";
import perpusImg from "../assets/perpus.jpg";

const Content = () => {
  return (
    <div>
      <section id="section">
        <img src={mainImg} alt="Not Page" className="profile-img" />
                <h2 id="Judul">Data Pribadi</h2>
                <table className="info-table">
                  <tbody>
                    <tr>
                      <td className="label">Nama Lengkap</td>
                      <td>: Kgs M Zahid Al Fatih</td>
                    </tr>
                    <tr>
                      <td className="label">Tempat, Tgl Lahir</td>
                      <td>: Tanjungpandan, 25 Oktober 2007</td>
                    </tr>
                    <tr>
                      <td className="label">Asal</td>
                      <td>: Bangka Belitung</td>
                    </tr>
                    <tr>
                      <td className="label">Prodi</td>
                      <td>: Pendidikan Ilmu Komputer</td>
                    </tr>
                    <tr>
                      <td className="label">Alamat</td>
                      <td>: Jl. Gegerkalong Girang</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <hr/>
        
              <section id="Hobi">
                <h2 id="Judul">Hobi</h2>
        
                <div className="Hobi-Container">
        
                  <div className="hobi-card">
                    <img src={badminImg} alt="Not Page" className="hobi-img" />
                    <p>Saya suka sekali bermain Badminton ketika saya memiliki masalah</p>
                  </div>
        
                  <div className="hobi-card">
                    <img src={perpusImg} alt="Not Page" className="hobi-img" />
                    <p>Saya selalu setiap hari senin ke perpustakaan untuk membuat tugas/membaca buku</p>
                  </div>
                </div>
        </section>
        <hr/>
    </div>
  );
};

export default Content;
