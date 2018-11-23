const CLIENT_ID = "WYCW20RRORIN0GGM4KD2LQ1HITWM321S1M11IA1T041FLXBX";
const CLIENT_SECRET = "4DIWNVTCVOUVCFC1JAQXM2A5RCPHSQWQHZE30VFNVTZ41WJE";
const URL = `https://api.foursquare.com/v2/venues/explore?cat=food&near=Kolkata&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181122`;


export const getLocationDetails = _ => 
    fetch(URL)
        .then(response => response.json())
        .then(result => result.response.groups[0].items);
    
export const initMap = _ => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 22.5726, lng: 88.3639},
            zoom: 12
        });
        window.map = map; // making map window object rather than passing this an prop
    }
    
export const loadScript = _ => {
        let scriptElement = createScript();
        let scriptOfPage = document.getElementsByTagName("script");
        let firstScript = scriptOfPage[0];
        firstScript.parentNode.insertBefore(scriptElement, firstScript);
        window.initMap = initMap; //make initMap function for window object
    }

export const createScript = _ => {
        const mapScript = document.createElement("script");
        const MY_API_KEY = "AIzaSyAJ_RqhTFXA-vRPcB2wbjPkWQO4Mv9F_mk";
        mapScript.src= `https://maps.googleapis.com/maps/api/js?key=${MY_API_KEY}&callback=initMap`;
        mapScript.async = true;
        mapScript.defer = true;
        return mapScript;
    }