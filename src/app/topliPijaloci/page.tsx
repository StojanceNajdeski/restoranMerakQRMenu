"use client";
import Link from "next/link";
import React from "react";
import "../../../i18n";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const TopliNapitoci = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("restoranMerak")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase whitespace-pre-line">
          {t("topliPijaloci")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-2 mt-2 text-xl">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("kafe")}</b>
            <b className="basis-1/5 text-right">50</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-2 mt-2 text-xl">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("espreso")}</b>
            <b className="basis-1/5 text-right">50</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-2 mt-2 text-xl">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("makijatoMalo")}</b>
            <b className="basis-1/5 text-right">50</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-2 mt-2 text-xl">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("makijatoGolemo")}</b>
            <b className="basis-1/5 text-right">60</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-2 mt-2 text-xl">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("kapucino")}</b>
            <b className="basis-1/5 text-right">60</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-2 mt-2 text-xl">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("neskafe")}</b>
            <b className="basis-1/5 text-right">100</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-2 mt-2 text-xl">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("caj")}</b>
            <b className="basis-1/5 text-right">50</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopliNapitoci;
