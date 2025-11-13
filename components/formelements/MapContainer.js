// "use client"
// import { useState, useRef } from 'react' ;
// import { useLoadScript, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
// import Button from 'react-bootstrap/Button' ;

// import styles from './form.module.css' ;

// const libraries = ['places'];

// //eslint-disable-next-line
// const defaultHandler = val => console.log(val)

// const MapContainer = ({ onLocationSelect = defaultHandler, defCoords }) => {
// 	const [markerPosition, setMarkerPosition] = useState(defCoords?.length===2?{ lat: defCoords[0], lng: defCoords[1] }:{ lat: 28.7041, lng: 77.1025 });
// 	const autocomplete = useRef(null) ;

// 	const { isLoaded, loadError } = useLoadScript({ 
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//         libraries,
//     });

//     const handleMapClick = (e) => {
// 		const lat = e.latLng.lat();
// 		const lng = e.latLng.lng();

// 		setMarkerPosition({ lat, lng });
// 		// onLocationSelect([lat, lng]);
// 	};

// 	const handlePlaceSelect = () => {
// 		const place = autocomplete.current.getPlace(); // Use the ref to get the Autocomplete component's place

// 		if (place.geometry) {
// 			const lat = place.geometry.location.lat();
// 			const lng = place.geometry.location.lng();
// 			setMarkerPosition({ lat, lng });
// 			// onLocationSelect([lat, lng]);
// 		} else {
// 			console.error('Place details not found');
// 		}
// 	};

//     if (loadError) {
//         return <div>Error loading Map</div>;
//     }

//     if (!isLoaded) {
//         return <div>Loading Map...</div>;
//     }

// 	return (
// 		<div className={styles.mapContainer}>
// 			<Autocomplete onLoad={autocompleteInstance=>{ autocomplete.current = autocompleteInstance }} onPlaceChanged={handlePlaceSelect} options={{componentRestrictions: { country: 'in' }}}>
// 			<input type="text" placeholder="Search Nearby Place..." style={{ boxSizing: `border-box`, border: `1px solid var(--medGray)`, padding: `10px 10px`, borderRadius: `8px`, fontSize: `16px`, outline: `none`, textOverflow: `ellipsis` }} />
// 			</Autocomplete>
// 			<GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={markerPosition} zoom={13} onClick={handleMapClick} options={{ fullscreenControl: false, mapTypeControl: false, streetViewControl: false }}>
// 				{markerPosition && <Marker position={markerPosition} />}
// 			</GoogleMap>
// 			<Button className={styles.blueBtn} onClick={()=>{
// 				const { lat, lng } = markerPosition ;
// 				onLocationSelect([lat, lng]) ;
// 			}}>Select Location</Button>
// 		</div>
// 	) ;
// }

// export default MapContainer ;