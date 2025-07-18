"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const TeleskaSkara = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("restoranMerak")}</h1>
        <h2 className="text-center pt-3 text-xl whitespace-pre-line text-orange-600 uppercase font-bold">
          {t("teleskaSkara")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("teleskiRamstekPorcija")}</b>
            <b className="basis-1/12 text-right">900</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("teleskiRamstekPorcijaPecurki")}</b>
            <b className="basis-1/5 text-right">900</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("teleskiMuskul")}</b>
            <b className="basis-1/12 text-right">350</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("teleskiMuskulDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("teleskiDziger")}</b>
            <b className="basis-1/5 text-right">150</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("juneskiRebra")}</b>
            <b className="basis-1/5 text-right">800</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("teleskaKremenadla")}</b>
            <b className="basis-1/5 text-right">800</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeleskaSkara;
