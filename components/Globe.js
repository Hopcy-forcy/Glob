import React, {useEffect, useRef, useState, useCallback} from 'react';
import Globe from 'react-globe.gl';
import {GeoJsonGeometry} from "three-geojson-geometry";
import * as THREE from "three";
import {useLoader} from "@react-three/fiber";

const GlobeComponent = ({onCountryClick, choosenCountryCode}) => {

    const supportedCountries = {
        "FRA": {
            "countryCode": "FRA",
            "countryName": "France",
            "longitude": 2.213749,
            "latitude": 46.227638
        },
        "USA": {
            "countryCode": "USA",
            "countryName": "United States",
            "longitude": -95.712891,
            "latitude": 37.090240
        },
        "DEU": {
            "countryCode": "DEU",
            "countryName": "Germany",
            "longitude": 10.451526,
            "latitude": 51.165691
        },
        "CHN": {
            "countryCode": "CHN",
            "countryName": "China",
            "longitude": 104.195397,
            "latitude": 35.861660
        },
        "BRA": {
            "countryCode": "BRA",
            "countryName": "Brazil",
            "longitude": -51.925280,
            "latitude": -14.235004
        },
        "AUS": {
            "countryCode": "AUS",
            "countryName": "Australia",
            "longitude": 133.775136,
            "latitude": -25.274398
        },
        "ZAF": {
            "countryCode": "ZAF",
            "countryName": "South Africa",
            "longitude": 22.937506,
            "latitude": -30.559482
        },
        "JPN": {
            "countryCode": "JPN",
            "countryName": "Japan",
            "longitude": 138.252924,
            "latitude": 36.204824
        },
        "NLD": {
            "countryCode": "NLD",
            "countryName": "Netherlands",
            "longitude": 5.291266,
            "latitude": 52.132633
        },
        "CHE": {
            "countryCode": "CHE",
            "countryName": "Switzerland",
            "longitude": 8.227512,
            "latitude": 46.818188
        },
        "IRL": {
            "countryCode": "IRL",
            "countryName": "Ireland",
            "longitude": -6.260309,
            "latitude": 53.412910
        },
        "MEX": {
            "countryCode": "MEX",
            "countryName": "Mexico",
            "longitude": -102.552784,
            "latitude": 23.634501
        },
        "PR1": {
            "countryCode": "PR1",
            "countryName": "Puerto Rico",
            "longitude": -66.590149,
            "latitude": 18.220833
        },
        "ITA": {
            "countryCode": "ITA",
            "countryName": "Italy",
            "longitude": 12.567380,
            "latitude": 41.871940
        },
        "GBR": {
            "countryCode": "GBR",
            "countryName": "United Kingdom",
            "longitude": -3.435973,
            "latitude": 55.378051
        },
        "CZE": {
            "countryCode": "CZE",
            "countryName": "Czech Republic",
            "longitude": 15.472962,
            "latitude": 49.817492
        },
        "AUT": {
            "countryCode": "AUT",
            "countryName": "Austria",
            "longitude": 14.550072,
            "latitude": 47.516231
        },
        "SWE": {
            "countryCode": "SWE",
            "countryName": "Sweden",
            "longitude": 18.643501,
            "latitude": 60.128161
        },
        "ARE": {
            "countryCode": "ARE",
            "countryName": "United Arab Emirates",
            "longitude": 53.847818,
            "latitude": 23.424076
        },
        "THA": {
            "countryCode": "THA",
            "countryName": "Thailand",
            "longitude": 100.992541,
            "latitude": 15.870032
        },
        "CHL": {
            "countryCode": "CHL",
            "countryName": "Chile",
            "longitude": -71.542969,
            "latitude": -35.675147
        }
    };
    const globeRef = useRef();
    const [countries, setCountries] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [hoveredCountry, setHoveredCountry] = useState(null);

    useEffect(() => {
        const MAP_CENTER = { lat: 0, lng: 0, altitude: 3 };
        globeRef.current.pointOfView(MAP_CENTER, 0);
    }, [globeRef]);

    // Charger le fichier GeoJSON des pays
    useEffect(() => {
        globeRef.current.pointOfView({ lat: supportedCountries.FRA.latitude, lng: supportedCountries.FRA.longitude, altitude: 3 });
        fetch('/countries.geojson')
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
            });
    }, []);

    // Charger le fichier GeoJSON des pays
    useEffect(() => {
        if(choosenCountryCode && supportedCountries[choosenCountryCode]){
            const {latitude, longitude} = supportedCountries[choosenCountryCode];
            globeRef.current.pointOfView({ lat: latitude, lng: longitude, altitude: 2}, 2000);
        }
    }, [choosenCountryCode]);

    // Charger le fichier GeoJSON des pays
    useEffect(() => {
        if(selectedCountry){
            const {latitude, longitude} = supportedCountries[selectedCountry.properties.adm0_iso];
            globeRef.current.pointOfView({ lat: latitude, lng: longitude, altitude: 2}, 2000);
        }
    }, [selectedCountry]);

    const isCountryHighlighted = (country) => {
        return supportedCountries[country?.properties.adm0_iso] !== undefined;
    };

    const isCountrySelected = (country) => {
        return selectedCountry?.properties.adm0_iso === country?.properties.adm0_iso;
    };

    const isCountryHovered = (country) => {
        return hoveredCountry?.properties.adm0_iso === country?.properties.adm0_iso;
    };

    const handlePolygonHover = (country) => {
        if(isCountryHighlighted(country)){
            setHoveredCountry(country);
        }else{
            setHoveredCountry(null);
        }
    };

    const handlePolygonClick = (country) => {
        if(isCountryHighlighted(country)){
            setSelectedCountry(country);
            onCountryClick(country.properties.adm0_iso);
        }
    };

    return (
        <Globe
            ref={globeRef}
            globeMaterial={
                new THREE.MeshPhongMaterial({
                    color: new THREE.Color( 'rgb(44, 34, 114)' ),
                    opacity: 0.8,
                    transparent: false,
                })
            }
            globeImageUrl="/earth_texture.jpg"
            backgroundColor="#0b014b"
            atmosphereColor="#c9c0fe"
            polygonsData={countries?.features || []}
            polygonAltitude={0.008}
            polygonCapColor={(polygon) => isCountryHovered(polygon) || isCountrySelected(polygon) ? 'rgba(246, 156, 165, 1)' : (isCountryHighlighted(polygon) ? 'rgba(200, 192, 254, 1)' : 'rgba(86, 75, 160, 1)') }
            polygonSideColor={useCallback(() => '#2c2272')}
            polygonStrokeColor={useCallback(() => 'rgba(11, 1, 75, 0.2)')}
            onPolygonHover={handlePolygonHover}
            onPolygonClick={handlePolygonClick}
        />
    );
};


export default GlobeComponent;
