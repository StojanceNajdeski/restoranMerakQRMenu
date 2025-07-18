"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const MesanaSkara = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("restoranMerak")}</h1>
        <h2 className="text-center whitespace-pre-line pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("mesanaSkara")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6 text-white">
        <div className="pb-5 text-xl">
          <div className="flex">
            <p className="basis-11/12">{t("kebap")}</p>
            <b className="basis-1/12 text-right">18</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <p className="basis-11/12">{t("pleskavica")}</p>
            <b className="basis-1/12 text-right">130/180</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <p className="basis-11/12">{t("ustipec")}</p>
            <b className="basis-1/12 text-right">200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("ustipecDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <p className="basis-11/12">{t("sarskaPleskavica")}</p>
            <b className="basis-1/12 text-right">150/230</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("sarskaPleskavicaDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <p className="basis-11/12">{t("loveckaPleskavica")}</p>
            <b className="basis-1/12 text-right">150/230</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("loveckaPleskavicaDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <p className="basis-11/12">{t("mesanaMerakPleskavica")}</p>
            <b className="basis-1/12 text-right">160/250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("merakPleskavicaDesc")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesanaSkara;
