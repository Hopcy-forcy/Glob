import React, {useEffect, useState} from 'react';

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

const CountryInfo = ({ countryCode, handleContryChange }) => {

    const [code, setCode] = useState(countryCode);

    useEffect(() => {
        setCode(countryCode)
    }, [countryCode]);

    useEffect(() => {
        let interval;

        // interval = setInterval(() => {
        //     (async () => {
        //         const c = [
        //             "FRA", "USA", "DEU", "CHN", "BRA", "AUS", "ZAF", "JPN", "NLD", "CHE", "IRL", "MEX", "PR1", "ITA", "GBR", "CZE", "AUT", "SWE", "ARE", "THA", "CHL"
        //         ].random();
        //         setCode(c);
        //         handleContryChange(c);
        //     })();
        // }, 5000);
        // return () => {
        //     if (interval) {
        //         clearInterval(interval);
        //     }
        // };
    }, []);

    const programmesInfos = {
        "FRA": {
            "countryCode": "FRA",
            "countryName": "France",
            "longitude": 2.213749,
            "latitude": 46.227638,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/9f9b49f6-058e-43f9-b496-a34bd023bbdc_Logos-EAT-bleu+1.svg",
            "description": "Since 2013, En avant toute(s) fights for women/men equality and against sexist & anti-LGBTQIA+ violence.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/france"
        },
        "USA": {
            "countryCode": "USA",
            "countryName": "États-Unis",
            "longitude": -95.712891,
            "latitude": 37.09024,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/0fae09bc-fa45-4ea2-b349-58270047dc11_Its_on_us_logo_detail+1.svg",
            "description": "“It’s On Us educates and activates all students, including young men, to combat IPV across 300+ college campuses nationwide.”",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/united-states"
        },
        "DEU": {
            "countryCode": "DEU",
            "countryName": "Allemagne",
            "longitude": 10.451526,
            "latitude": 51.165691,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/a105fd22-8fa1-42ba-9ff6-57defe94d02f_bff_logo_4c-FRIDFWKS105420+1.png",
            "description": "Supporting women and standing firm against violence",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/germany"
        },
        "CHN": {
            "countryCode": "CHN",
            "countryName": "Chine",
            "longitude": 104.195397,
            "latitude": 35.86166,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/11ba5b08-ac08-4118-a214-480a666323d8_LOGO.svg",
            "description": "China Women's Development Foundation (CWDF) is an AAAAA foundation set up by the All-China Women's Federation in December 1988. It is a national public foundation which raises funds from China and other permitted countries and regions.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/china"
        },
        "BRA": {
            "countryCode": "BRA",
            "countryName": "Bresil",
            "longitude": -51.92528,
            "latitude": -14.235004,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/966a6567-ddcc-4c76-bcbf-1f60bcde2129_Logo-AzM-Instituto-Cinza.png",
            "description": "A non-profit NGO that fights for gender equality through information, technology and education.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/brazil"
        },
        "AUS": {
            "countryCode": "AUS",
            "countryName": "Australie",
            "longitude": 133.775136,
            "latitude": -25.274398,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/20aab6db-75a7-4887-a46a-73d6a7f58c3d_FVREE+Full+Logo+CMYK_Horizontal_Primary.jpg",
            "description": "FVREE exists to support victim survivors and disrupt the cycle of family violence.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/australia"
        },
        "ZAF": {
            "countryCode": "ZAF",
            "countryName": "Afrique du Sud",
            "longitude": 22.937506,
            "latitude": -30.559482,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/b1c125b2-fbbe-49b2-b561-2ba75a16bd12_ADAPT+Logo+high+definition.png",
            "description": "ADAPT is committed to changing factors that perpetuate violence against women and girl children.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/south-africa"
        },
        "JPN": {
            "countryCode": "JPN",
            "countryName": "Japon",
            "longitude": 138.252924,
            "latitude": 36.204824,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/73f69b88-2986-4f7d-871c-8b108a827584_Saya-Saya.jpg",
            "description": "Women’s Net Saya-Saya advocates for the rights of women and children who have experienced violence, with a focus on domestic violence. Our goal is to create a violence-free society where both women and men can live in mutual respect.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/japan"
        },
        "NLD": {
            "countryCode": "NLD",
            "countryName": "Pays-Bas",
            "longitude": 5.291266,
            "latitude": 52.132633,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/1b9cd60f-b898-43ca-9437-4cd275546b50_logodef.svg",
            "description": "Since 1974 Blijf Groep helps and gives shelter to women, men and children, who suffer from domestic violence.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/netherlands"
        },
        "CHE": {
            "countryCode": "CHE",
            "countryName": "Suisse",
            "longitude": 8.227512,
            "latitude": 46.818188,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/52eb035f-d53e-497a-9254-ad1bb653782a_DEF+HERZ%21+RGB+4+1.png",
            "description": "Herzsprung is a national prevention program which was founded 2017 by Radix (Swiss Health Organization).",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/switzerland"
        },
        "IRL": {
            "countryCode": "IRL",
            "countryName": "Irlande",
            "longitude": -8.24389,
            "latitude": 53.41291,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/8c9cdf8b-3318-497d-aafc-7b2ad89b092c_WA_Stacked_Black.png",
            "description": "Women’s Aid Ireland was founded 48 years ago to stop domestic violence against women and children.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/ireland"
        },
        "MEX": {
            "countryCode": "MEX",
            "countryName": "Mexique",
            "longitude": -102.552784,
            "latitude": 23.634501,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/82cbb288-9b93-4e03-9b97-9f7375825240_Group+3.png",
            "description": "Fundación Origen specializes in prevention, contention and eradication of violence against women.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/mexico"
        },
        "PR1": {
            "countryCode": "PR1",
            "countryName": "Portugal",
            "longitude": -8.224454,
            "latitude": 39.399872,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/39ea075f-dfb1-4a46-babf-9f4d889eab1c_logo_APAV.svg",
            "description": "APAV is an NGO that educates, protects and supports victims of crime.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/portugal"
        },
        "AUT": {
            "countryCode": "AUT",
            "countryName": "Autriche",
            "longitude": 14.550072,
            "latitude": 47.516231,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/abfab77a-78e0-4437-931d-61e71e4e980b_RZ_AOEF-LOGO_Druckerei.svg",
            "description": "Verein Autonome Österreichische Frauenhäuser is an association of 13 women´s shelters all over Austria providing help and support for those in need.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/austria"
        },
        "SWE": {
            "countryCode": "SWE",
            "countryName": "Suède",
            "longitude": 18.643501,
            "latitude": 60.128161,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/c3505c34-059f-429b-bfc1-7c0587e1f4a3_Unga+relationer+logo+2.png",
            "description": "A national support and knowledge platform to counteract abuse in young people's intimate relationships.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/sweden"
        },
        "ARE": {
            "countryCode": "ARE",
            "countryName": "Émirats Arabes Unis",
            "longitude": 53.847818,
            "latitude": 23.424076,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/c8463ea8-0f34-4aee-b2e6-37a9b10a9e6c_DFWAC+LOGO+iLL.svg",
            "description": "The Dubai Foundation for Women and Children offers immediate protection and support services for women and children in the UAE against domestic violence, child abuse and human trafficking.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/united-arab-emirates"
        },
        "THA": {
            "countryCode": "THA",
            "countryName": "Thaïlande",
            "longitude": 100.992541,
            "latitude": 15.870032,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/24a7972e-972c-459e-b8b7-310d67c6a7d0_WMP-logo.png",
            "description": "Supporting equal rights of women and men, women’s rights in Thailand and men’s role in advancing them.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/thailand"
        },
        "CHL": {
            "countryCode": "CHL",
            "countryName": "Chili",
            "longitude": -71.542969,
            "latitude": -35.675147,
            "logo": "https://images.prismic.io/ysl-abuseisnotlove/f35cbfef-1dac-47e9-a706-4fcc930ea5d2_fundacion.png",
            "description": "Fundación Antonia's purpose is to help eradicate violence in the context of couple relationships.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/chili"
        },
        "GBR": {
            "countryCode": "GBR",
            "countryName": "Royaume-Uni",
            "longitude": -3.435973,
            "latitude": 55.378051,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/69b35c2f-d772-41a7-b359-c218932c3fa6_WA+Logo+-+RGB+-+Black+Strapline+-+No+Web+Address.svg",
            "description": "Women’s Aid was born 46 years ago when a few refugees joined together to coordinate resources and actions to defend women globally.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/united-kingdom"
        },
        "CZE": {
            "countryCode": "CZE",
            "countryName": "République Tchèque",
            "longitude": 15.472962,
            "latitude": 49.817492,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/645309fc-9f7e-447e-a6d1-bf69650ea3c3_logoProfem-NEW_blue.svg",
            "description": "ProFem has been defending the rights of persons at risk of domestic and sexual violence in the Czech Republic since 1993.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/czech-republic"
        },
        "CHN": {
            "countryCode": "CHN",
            "countryName": "Chine",
            "longitude": 104.195397,
            "latitude": 35.86166,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/11ba5b08-ac08-4118-a214-480a666323d8_LOGO.svg",
            "description": "China Women's Development Foundation (CWDF) is an AAAAA foundation set up by the All-China Women's Federation in December 1988.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/china"
        },
        "ITA": {
            "countryCode": "ITA",
            "countryName": "Italie",
            "longitude": 12.56738,
            "latitude": 41.87194,
            "logo": "https://ysl-abuseisnotlove.cdn.prismic.io/ysl-abuseisnotlove/8a99aa32-8a86-4374-8e3f-d61b3494d477_Dire_colori.svg",
            "description": "The first Italian association of non-institutional anti-violence centres managed by women's associations.",
            "libelleCta": "Découvrir le programme",
            "link": "/fr-fr/countries/italy"
        }
    };


    if (!code || !programmesInfos[code]){
        return null
    }

    return (
        <div className="c-Countries-intro-slider-item is-active-up">
            <h3 className="t-h6--bold">
                {programmesInfos[code].countryName}
            </h3>
            <div className="c-Countries-intro-slider-item-logo">
                <div className="c-LazyImage is-loaded">
                    <img src={programmesInfos[code].logo} style={{maxWidth: '100%'}}/>
                </div>
            </div>
            <div className="t-wysiwyg t-text--xs">
                <p>
                    {programmesInfos[code].description}
                </p>
            </div>
            <br/>
            <a className="c-Countries-intro-slider-item-link t-link--secondary t-text--sm">
                <span className="t-link--secondary-inner">
                    <span className="t-link--secondary-inner-content">Découvrir le programme</span>
                </span>
            </a>
        </div>
    );
}

export default CountryInfo;
