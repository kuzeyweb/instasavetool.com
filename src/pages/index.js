import axios from "axios";
import Select from 'react-select';
import { useState } from "react";
import { CircularProgress, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SearchResults } from "../components/SearchResults"
import { Instructions } from "../components/Instructions"
import { Features } from "../components/Features"
import useTranslation from 'next-translate/useTranslation';
import { isUrl } from "../../utils/Utils";
import Head from "next/head";
import Link from 'next/link';
import Script from 'next/script';

const options = [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Turkish' },
    { value: 'de', label: 'Deutsch' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'it', label: 'Italiano' },
];

export default function Homepage(){
    const { t } = useTranslation("common");

    const [errorMessage, setErrorMessage] = useState();
    const [url, setURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    const getData = async () => {
        setLoading(true);
        if (!url) {
            setErrorMessage(t("errors.url_null"));
        } else if (!url.includes('instagram.com') || !isUrl(url)) {
            setErrorMessage(t("errors.invalid_url"))
        } else {
            try {
                const res = await axios.post(`${process.env.NEXT_APP_API_URL}/api/action/download`, { url: url });
                res.data.payload && setData(res.data.payload);
                setErrorMessage();
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setErrorMessage(err.response.data.message);
            }
        }
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
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9019652857517247"
                    crossOrigin="anonymous"></script>
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
                            <Link href="/">
                                <img width={300} src="https://www.kuzeysoftware.com/logo-default.png" alt="" />
                            </Link>
                            <div className="nav-side">
                                <div className="d-flex align-items-center">
                                    <Select
                                        id="selectbox"
                                        instanceId="selectbox"
                                        className="rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold"
                                        onChange={(language) => window.location.href = `/${language.value}`}
                                        placeholder="Language"
                                        options={options}
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* ====== end navbar ====== */}
                    <main className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="info">
                                    <h1 dangerouslySetInnerHTML={{ __html: t("main.header_title") }}></h1>
                                    <div className="text">
                                        {t("main.header_desc")}
                                    </div>
                                    <form className="form" method="post">
                                        <div className="form-group">
                                            <i className="fas fa-globe me-2" />
                                            <input id="search" value={url} onChange={(e) => setURL(e.target.value)} type="text" name="website" placeholder={t("main.input_placeholder")} />
                                            {url &&
                                                <CloseIcon id="remove" style={{ cursor: 'pointer' }} onClick={() => setURL('')} />
                                            }
                                        </div>
                                        <button id="submitButton" type="submit" className="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold" style={{ fontSize: '14px' }} onClick={(e) => { e.preventDefault(); !loading && getData(); }}>
                                            {loading ? <CircularProgress color='secondary' size={20} className="mx-4" /> : t("main.download_now")}
                                        </button>
                                    </form>
                                </div>
                                {errorMessage ?
                                    <Alert style={{ margin: '10px auto', width: '80%', borderRadius: '50px' }} severity="error" size="sm" onClose={() => setErrorMessage()}>{errorMessage}</Alert>
                                    : null}
                            </div>
                        </div>
                    </main>
                </div>

                <SearchResults data={data} />
            </header>
            <Instructions />
            <Features />
        </>
    )
}