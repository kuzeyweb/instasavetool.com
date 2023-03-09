import Select from 'react-select';
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';
import Head from "next/head";
import Link from 'next/link';
import Script from 'next/script';
import {useRouter} from 'next/router'

const options = [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Turkish' },
    { value: 'de', label: 'Deutsch' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'it', label: 'Italiano' },
];

export default function Contact() {

    const { t } = useTranslation("common");
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    });
    const [token, setToken] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();


    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (token === undefined) {
            setErrorMessage(t("contact.errors.captcha"));
        } else if (formData.message === undefined || formData.message.length < 20) {
            setErrorMessage(t("contact.errors.message"));
        } else if (formData.email === undefined || formData.email.length < 4) {
            setErrorMessage(t("contact.errors.mail"));
        }
        else {
            try {
                const config = {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }
                await axios.post(`/api/contact`, { ...formData, token }, config);
                setSuccessMessage(t("contact.errors.success"));
            } catch (err) {
                setErrorMessage(t("contact.errors.error"));
            }
        }
    };

    const captchaOnChange = (value) => {
        setToken(value);
    };

    return (
        <>
            <Head>
                <title>Download Instagram Photos, Videos & Reels - Insta Save Tool </title>
                <meta name="description" content="Download Videos, Photos, Reels from Instagram. Instagram Save is easy and safe, you can download content from Instagram in high resolution." />
                <link rel="icon" href="/favicon.ico" />
                <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                <meta name="revisit-after" content="1 days" />
                <meta property="og:title" content="Insta Save Tool" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Download Videos, Photos, Reels from Instagram." />
                <meta property="og:image" content="https://www.instasavetool.com/favicon.ico" />
                <meta property="og:url" content="https://www.instasavetool.com/" />
                <meta property="og:site_name" content="Insta Save Tool" />
                <link rel="canonical" href="https://www.instasavetool.com/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Download Instagram Photos, Videos & Reels - Insta Save Tool" />
                <meta property="og:description" content="Download Videos, Photos, Reels from Instagram. Instagram Save is easy and safe, you can download content from Instagram in high resolution." />
                <meta property="og:url" content="https://www.instasavetool.com/" />
                <meta property="og:site_name" content="Save Insta" />
                <meta property="article:modified_time" content="2023-02-25T09:45:51+00:00" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="5 minutes" />
                <link rel="alternate" href="https://www.instasavetool.app/?hl=en" hrefLang="en" />
                <link rel="alternate" href="https://www.instasavetool.app/?hl=fr" hrefLang="fr" />
                <link rel="alternate" href="https://www.instasavetool.app/?hl=tr" hrefLang="tr" />
                <link rel="alternate" href="https://www.instasavetool.app/?hl=it" hrefLang="it" />
                <link rel="alternate" href="https://www.instasavetool.app/?hl=de" hrefLang="de" />
                <link rel="alternate" href="https://www.instasavetool.app/?hl=es" hrefLang="es" />
            </Head>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9019652857517247"
                crossorigin="anonymous"></Script>
            <header className="style-6">
                <div className="content">
                    {/* ====== start navbar ====== */}
                    <nav className="navbar navbar-expand-lg navbar-light style-6">
                        <div className="container-fluid">
                            <Link href={`/`}>
                                <img width={300} src="https://www.kuzeysoftware.com/logo-default.png" alt="" />
                            </Link>
                            <div className="nav-side">
                                <div className="d-flex align-items-center">
                                    <Select
                                        id="selectbox"
                                        instanceId="selectbox"
                                        className="rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold"
                                        onChange={(language) => {  router.push(router.pathname, router.asPath, { locale: language.value })}}
                                        placeholder="Language"
                                        options={options}
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* ====== end navbar ====== */}
                    <section className="contact section-padding pt-50 style-6">
                        <div className="container">
                            <h1 className='text-center mb-5'>{t("contact.title")}</h1>
                            <div className="content">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <form onSubmit={onFormSubmit} className="form">
                                            <p className="text-center text-danger fs-12px mb-30">{errorMessage && errorMessage}</p>
                                            <p className="text-center text-success fs-12px mb-30">{successMessage && successMessage}</p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-20">
                                                        <input onChange={(e) => setFormData(current => ({ ...current, name: e.target.value }))} type="text" name="name" className="form-control" placeholder={t("contact.name_placeholder")} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-20">
                                                        <input onChange={(e) => setFormData(current => ({ ...current, email: e.target.value }))} type="text" name="email" className="form-control" placeholder={t("contact.email_placeholder")} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-20">
                                                        <input onChange={(e) => setFormData(current => ({ ...current, number: e.target.value }))} type="text" name="phone" className="form-control" placeholder={t("contact.phone_placeholder")} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-20">
                                                        <input onChange={(e) => setFormData(current => ({ ...current, subject: e.target.value }))} type="text" name="subject" className="form-control" placeholder={t("contact.subject_placeholder")} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <textarea onChange={(e) => setFormData(current => ({ ...current, message: e.target.value }))} rows={10} name="message" className="form-control" placeholder={t("contact.message_placeholder")} defaultValue={""} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-center">
                                                    <div className="form-check d-inline-flex mt-30 mb-30">
                                                        <ReCAPTCHA sitekey='6Lc-UJEjAAAAAJXudsGbxftQlig5rq9FfwPsoFG1' onChange={captchaOnChange} /> <br />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-center">
                                                    <input type="submit" className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}
