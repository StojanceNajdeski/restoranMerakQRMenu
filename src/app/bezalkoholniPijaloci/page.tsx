"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const BezalkoholniPijaloci = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl whitespace-pre-line">
          {t("restoranMerak")}
        </h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase whitespace-pre-line">
          {t("bezalkoholniPijaloci")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("kokaKola")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("fanta")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("sveps")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("tonik")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("pepsi")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("strumka")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("ovosenSokPrigam")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("ovosenSok")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("dzus")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("pelisterka1l")}</b>
            <b className="basis-1/12 text-right">100</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("pelisterka025")}</b>
            <b className="basis-1/12 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("pelisterkaNegazirana025")}</b>
            <b className="basis-1/12 text-right">100</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BezalkoholniPijaloci;
