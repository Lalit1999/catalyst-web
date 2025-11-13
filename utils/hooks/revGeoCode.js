const revGeoCode = async coords => {
    if(coords.length>0) {
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords[0]},${coords[1]}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status === "OK" && data.results.length > 0) {
                const { address_components, formatted_address } = data.results[0];
                return {addressObj: address_components, addressText: formatted_address, coords } ;
            } else {
                console.error("Geocoding failed:", data.status);
                return null;
            }
        } catch (error) {
            console.error("Error fetching geocoding data:", error);
            return null;
        }
    }
}

export default revGeoCode ;