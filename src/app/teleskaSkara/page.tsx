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
            <b className="basis-11/12">{t("teleskiMuskul")}</b>
            <b className="basis-1/12 text-right">500</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("teleskiMuskulDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("teleskiRamstekPorcija")}</b>
            <b className="basis-1/12 text-right">1300</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("teleskiBiftek")}</b>
            <b className="basis-1/5 text-right">1600</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("teleskiKremenadli")}</b>
            <b className="basis-1/5 text-right">1500</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("teleskiDziger")}</b>
            <b className="basis-1/5 text-right">220</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <h2 className="text-center pt-3 text-xl whitespace-pre-line text-orange-600 uppercase font-bold">
          {t("teleskoMelenoMeso")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6 text-white">
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("kebap")}</b>
            <b className="basis-1/12 text-right">20</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("kebapVoKajmak")}</b>
            <b className="basis-1/12 text-right">280</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("mesanaMerakPleskavica")}</b>
            <b className="basis-1/12 text-right">290</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("merakPleskavicaDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("sarskaPleskavica")}</b>
            <b className="basis-1/12 text-right">260</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("sarskaPleskavicaDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("ustipec")}</b>
            <b className="basis-1/12 text-right">240</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("ustipecDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("pleskavica")}</b>
            <b className="basis-1/12 text-right">200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("loveckaPleskavica")}</b>
            <b className="basis-1/12 text-right">280</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("loveckaPleskavicaDesc")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeleskaSkara;
