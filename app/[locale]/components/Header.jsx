"use client";
import { useTranslations } from "next-intl";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const iconSearch = "/icons/search.svg"
const iconLangPt = "/icons/pt.svg"
const iconLangEn = "/icons/en.svg"
const iconLangFr = "/icons/fr.svg"
const iconLangEs = "/icons/es.svg"
const imgLogoBig = "/images/logo-big.svg"
const imgLogoSmall = "/images/logo-small.svg"
const iconMore = "/icons/more.svg"
const iconFavorite = "/icons/favorite.svg"
const iconAccount = "/icons/account.svg"
const photoClient = "/images/monitor.svg"
const iconNotification = "/icons/notification.svg"
const iconSettings = "/icons/settings.svg"

function Header() {
  const home = useTranslations("home")

  const newLocal = "bg-qtds-products";
  return (
    <>
      <header>
        <div className="group-logo-search">
          <img src={imgLogoBig} alt="" />

          <label htmlFor="search" className="search">
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
              <img src={iconLangEn} alt="" className="icon-langs" />
              <img src={iconLangEs} alt="" className="icon-langs" />
              <img src={iconLangPt} alt="" className="icon-langs" />
            </div>
          </div>

          <div className="client-ghost">

            <div className="group-favorite">
              <img src={iconFavorite} alt="" className="icon-favorite" />

              <div className={newLocal}>
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
