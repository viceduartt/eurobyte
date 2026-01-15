"use client";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Header from "./components/Header";

const imgPcHero = ""

const imgPc = "/images/pc.svg"
const imgMonitor = "/images/monitor.svg"
const imgHardware = "/images/hardware.svg"
const imgLaptop = "/images/laptop.svg"
const imgPeripheral = "/images/peripherals.svg"
const imgEmphasis = "/images/emphasis.svg"
const imgCategory = "/icons/category.svg"




function Home() {
  const home = useTranslations("home")

  return (
    <>
      <Header></Header>

      <main className="home">

        <div className="group-hero-category">

          <div className="hero">
            <div className="copy">
              <div className="group-text">
                <h1>A junção entre <span className="color-blue">Hardware & Software</span></h1>
                <p>Tenha acesso aos melhores componentes sem doer no bolso</p>
              </div>

              <button className="view-emphasis">Destaques</button>
            </div>

            <div className="container-img">
              <img src={imgEmphasis} alt="" />
            </div>
          </div>

          <div className="category">
            <div className="groupheading">
              <img src={imgCategory} alt="" />

              <h2>Categorias</h2>
            </div>

            <div className="group-cards">
              <div className="group-heading-card">
                <h3>Computadores</h3>

                <div className="card">
                  <img src={imgPc} alt="" />
                </div>
              </div>

              <div className="group-heading-card">
                <h3>Notebooks</h3>

                <div className="card">
                  <img src={imgLaptop} alt="" />
                </div>
              </div>

              <div className="group-heading-card">
                <h3>Hardware</h3>

                <div className="card">
                  <img src={imgHardware} alt="" />
                </div>
              </div>


              <div className="group-heading-card">
                <h3>Periféricos</h3>

                <div className="card">
                  <img src={imgPeripheral} alt="" />
                </div>
              </div>

              <div className="group-heading-card">
                <h3>Monitores</h3>

                <div className="card">
                  <img src={imgMonitor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
