"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Salati = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("restoranMerak")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("salati")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataDomati")}</b>
            <b className="basis-1/12 text-right">150</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataKrastavici")}</b>
            <b className="basis-1/12 text-right">150</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataZelka")}</b>
            <b className="basis-1/12 text-right">150</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataMarula")}</b>
            <b className="basis-1/12 text-right">150</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataMesana")}</b>
            <b className="basis-1/12 text-right">150/250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex w-100">
            <small className="basis-3/4">{t("salataMesanaDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataMimoza")}</b>
            <b className="basis-1/12 text-right">200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex w-100">
            <small className="basis-3/4">{t("salataMimozaDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataShopska")}</b>
            <b className="basis-1/12 text-right">150/300</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex w-100">
            <small className="basis-3/4">{t("salataShopskaDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataGrcka")}</b>
            <b className="basis-1/12 text-right">150/300</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex w-100">
            <small className="basis-3/4">{t("salataGrckaDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataEli")}</b>
            <b className="basis-1/12 text-right">250/400</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex w-100">
            <small className="basis-3/4">{t("salataEliDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("salataMerak")}</b>
            <b className="basis-1/12 text-right">150/250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex w-100">
            <small className="basis-3/4">{t("salataMerakDesc")}</small>
          </div>
        </div>
        <div className="pb-5 text-xl">
          <div className="flex">
            <b className="basis-11/12">{t("daskaMerak")}</b>
            <b className="basis-1/12 text-right">400</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex w-100">
            <small className="basis-3/4">{t("daskaMerakDesc")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salati;
