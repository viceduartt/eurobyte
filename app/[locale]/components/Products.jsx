"use client";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Header from "./components/Header";




function Products() {
  const home = useTranslations("home")

  return (
    <>
      <div className="page-products">
        <div className="side-menu">
          <div className="group-heading">
            <img src={iconCategory} alt="" />

            <h2>Categoria</h2>
          </div>

          <nav className="group-heading-menu">
            <ul className="list-option">
              <li className="option hardware">Destaques</li>
              <li className="option hardware">Computador</li>
              <li className="option hardware">Monitores</li>
              <li className="option software">Serviços de informatica</li>
              <li className="option software">Software</li>
            </ul>
          </nav>
        </div>

        
      </div>
    </>
  );
}

export default Products;
