import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Near = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Correct the environment variable name
	});

	if (!isLoaded) {
		return <div> loading</div>;
	}

	return (
		<div>
			<h1>Searching for near hospitals</h1>
			<GoogleMap
				zoom={10}
				center={{ lat: 44, lng: -80 }}
				mapContainerClassName='map-container'
			>
				<Marker position={{ lat: 44, lng: -80 }} />
			</GoogleMap>
		</div>
	);
};

export default Near;


