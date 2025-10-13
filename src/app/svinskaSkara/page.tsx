"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const SvinskaSkara = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("restoranMerak")}</h1>
        <h2 className="text-center pt-3 text-xl whitespace-pre-line text-orange-600 uppercase font-bold">
          {t("svinskaSkara")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("svinskoVoSos")}</b>
            <b className="basis-1/12 text-right">290</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("svinskoRebro")}</b>
            <b className="basis-1/5 text-right">1000</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("domasenKolbas")}</b>
            <b className="basis-1/5 text-right">230</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("svinskaVesalica")}</b>
            <b className="basis-1/5 text-right">230</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("svinskoPecenje")}</b>
            <b className="basis-1/5 text-right">1200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("svinskoRebroVoFurna")}</b>
            <b className="basis-1/5 text-right">1200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("svinskiUvijac")}</b>
            <b className="basis-1/5 text-right">300</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("svinskiUvijacDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("svinskaPolnetaVesalica")}</b>
            <b className="basis-1/5 text-right">330</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">
              {t("svinskaPolnetaVesalicaDesc")}
            </small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("selskoSvinsko")}</b>
            <b className="basis-1/5 text-right">400</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("selskoSvinskoDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-4/5">{t("svinskiRaznicAlaMerak")}</b>
            <b className="basis-1/5 text-right">230</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">
              {t("svinskiRaznicAlaMerakDesc")}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvinskaSkara;
