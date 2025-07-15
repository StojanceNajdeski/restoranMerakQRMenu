"use client";
import Link from "next/link";
import "../../i18n";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MenuComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl justify-center items-center flex flex-col">
      <div className="flex w-10 h-15 gap-3 justify-center items-center">
        <Image
          src="/english.png"
          alt="englishLanguageLogo"
          className="mt-4"
          width={35}
          height={45}
          onClick={() => i18n.changeLanguage("en")}
        />
        <Image
          src="/flag-north-macedonia_1f1f2-1f1f0.png"
          alt="macedoniaLanguageLogo"
          className="mt-4"
          width={35}
          height={45}
          onClick={() => i18n.changeLanguage("mk")}
        />
        <Image
          src="/albania.png"
          alt="albaniaLanguageLogo"
          className="mt-4"
          width={35}
          height={45}
          onClick={() => i18n.changeLanguage("al")}
        />
      </div>
      <div className="flex text-2xl justify-center items-center pt-2">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <h1 className="text-center pb-4 pt-2 text-4xl font-bold whitespace-pre-line">
        {t("restoranMerak")}
      </h1>
      <div className="w-[90%] mx-auto">
        <div className="flex gap-3">
          <button className="bg-red-500 basis-2/4 notoSansFont text-white text-2xl p-2 w-60 mb-5 rounded-2xl">
            <Link href="/topliPijaloci">{t("topliPijaloci")}</Link>
          </button>
          <button className="bg-red-500 basis-2/4 notoSansFont text-white text-2xl p-2 w-60 mb-5 rounded-2xl">
            <Link href="/bezalkoholniPijaloci">
              {t("bezalkoholniPijaloci")}
            </Link>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 basis-2/4  notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/apetisani">{t("apetisani")}</Link>
          </button>
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/vina">{t("vina")}</Link>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/rakii">{t("rakii")}</Link>
          </button>
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="furnarinki">{t("furnarinki")}</Link>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="meze">{t("meze")}</Link>
          </button>
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="sirenje">{t("sirenje")}</Link>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/salati">{t("salati")}</Link>
          </button>
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/pasta">{t("pasta")}</Link>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/pici">{t("pici")}</Link>
          </button>
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/rolsendvici">{t("rolSendvici")}</Link>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/burgeri">{t("burgeri")}</Link>
          </button>
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/sendvici">{t("sendvici")}</Link>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/daski">{t("daski")}</Link>
          </button>
          <button className="bg-red-500 basis-2/4 notoSansFont text-white p-3 text-2xl w-60 mb-5 rounded-2xl">
            <Link href="/pastrmajlija">{t("pastrmajlija")}</Link>
          </button>
        </div>
        <button className="bg-red-500 notoSansFont text-white p-3 text-2xl w-full mb-5 rounded-2xl">
          <Link href="/deserti">{t("deserti")}</Link>
        </button>
      </div>
    </div>
  );
};

export default MenuComponent;
