"use client";
import { useTranslations } from "next-intl";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const iconSearch = "/images/monitor.svg"
const iconLangPt = "/images/monitor.svg"
const iconLangEn = "/images/monitor.svg"
const iconLangFr = "/images/monitor.svg"
const iconLangEs = "/images/monitor.svg"
const imgLogoBig = "/images/monitor.svg"
const imgLogoSmall = "/images/monitor.svg"
const iconMore = "/images/monitor.svg"
const iconFavorite = "/images/monitor.svg"
const iconAccount = "/images/monitor.svg"
const photoClient = "/images/monitor.svg"
const iconNotification = "/images/monitor.svg"
const iconSettings = "/images/monitor.svg"

function Header() {
  const home = useTranslations("home")

  return (
    <>
      <header>
        <div className="group-logo-search">
          <img src={imgLogoBig} alt="" />

          <label htmlFor="search">
            <img src={iconSearch} alt="" className="icon-search" />

            <input type="text" id="search" placeholder="Pesquisar produto" />
          </label>
        </div>

        <div className="group-langs-account-favorite">
          <div className="group-langs">
            <div className="selected-lang">

              <img src={iconLangFr} alt="" className="icon-langs" />

              <img src={iconMore} alt="" className="icon-more" />
            </div>

            <div className="options-langs">
              <img src={iconLangEn} alt="" />
              <img src={iconLangEs} alt="" />
              <img src={iconLangPt} alt="" />
            </div>
          </div>

          <div className="client-ghost">

            <div className="group-favorite">
              <img src={iconFavorite} alt="" className="icon-favorite" />

              <div className="bg-qtds-products">
                <span className="label-small product-qtds">12</span>
              </div>
            </div>


            <div className="group-account">
              <img src={iconAccount} alt="" className="icon-account" />

              <div className="group-login">
                <a href="#">Entrar</a>
                <a href="#">Criar conta</a>
              </div>
            </div>

          </div>

          <div className="client disable" data-disable="yes">

            <div className="group-favorite">
              <img src={iconFavorite} alt="" className="icon-favorite" />

              <div className="bg-qtds-products">
                <span className="label-small product-qtds">12</span>
              </div>
            </div>


            <div className="group-account">
              <img src={photoClient} alt="" className="photo-client" />

              <div className="group-account-options">
                <a href="#">Meus pedidos</a>
                <a href="#">Configurações</a>
                <a href="#">Sair</a>
              </div>
            </div>

          </div>

          <div className="adm disable" data-disable="yes">

            <div className="group-notification">
              <img src={iconNotification} alt="" className="icon-notification" />

              <div className="bg-qtds-notification">
                <span className="label-small notification-qtds">12</span>
              </div>
            </div>



            <img src={iconSettings} alt="" className="icon-settings" />

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
