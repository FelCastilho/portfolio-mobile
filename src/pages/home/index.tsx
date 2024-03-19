import '../home/styles.css'

import { FaLink } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";

import iconHero from '../../assets/hero - img.svg';
import { Link } from "react-router-dom";

export default function Home() {
    return (

        <section className="profile">

            <div className="profile-text">

                <p>Olá, eu sou</p>
                <h1>Felipe Castilho</h1>
                <p>Desenvolvedor Mobile</p>

                <div className="container-btn-profile">

                    <Link href="https://drive.google.com/file/d/1akpwdUVIHFw9pO4ZrrQQ-8Bc2S1fFkPT/view?usp=sharing" target="_blank" className="btn-curriculo"> <FaLink size={20} /> Meu Currículo</Link>

                    <Link href="certificados/certificados.html" target="_blank" className="btn-certificados">  <PiCertificate size={20}/> Certificados</Link>

                </div>

            </div>

            <div className="icon-img-desktop">
                <img src={iconHero} alt="icone de tag" />
            </div>

        </section>
    )
}