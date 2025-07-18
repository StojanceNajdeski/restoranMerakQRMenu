"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Piva = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("restoranMerak")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("piva")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("skopsko050")}</b>
            <b className="basis-1/12 text-right">100</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("skopsko033")}</b>
            <b className="basis-1/12 text-right">110</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("amstel")}</b>
            <b className="basis-1/12 text-right">150</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("hajneken")}</b>
            <b className="basis-1/12 text-right">170</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("dab033")}</b>
            <b className="basis-1/12 text-right">110</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("dab050")}</b>
            <b className="basis-1/12 text-right">100</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("tuborg")}</b>
            <b className="basis-1/12 text-right">150</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("kraliMarko")}</b>
            <b className="basis-1/12 text-right">90</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piva;
