/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	Autocomplete,
} from "@react-google-maps/api";
import {
	Box,
	Button,
	ButtonGroup,
	HStack,
	IconButton,
	Input,
	Text,
} from "@chakra-ui/react";

const Near = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyDC0W8_vvoftSTz6ndg3C8bXDeDFLN7LyU",
		libraries: ["places"],
	});

	const center = { lat: 48.8584, lng: 2.2945 };

	const [map, setMap] = useState(/** @type google.maps.Map */ (null));
	const [directionsResponse, setDirectionsResponse] = useState(null);
	const [distance, setDistance] = useState("");
	const [duration, setDuration] = useState("");
	const originRef = useRef();
	const destiantionRef = useRef();

	async function calculateRoute() {
		if (originRef.current.value === "" || destiantionRef.current.value === "") {
			return;
		}
		// eslint-disable-next-line no-undef
		const directionsService = new google.maps.DirectionsService();
		const results = await directionsService.route({
			origin: originRef.current.value,
			destination: destiantionRef.current.value,
			// eslint-disable-next-line no-undef
			travelMode: google.maps.TravelMode.DRIVING,
		});
		setDirectionsResponse(results);
		setDistance(results.routes[0].legs[0].distance.text);
		setDuration(results.routes[0].legs[0].duration.text);
	}

	function clearRoute() {
		setDirectionsResponse(null);
		setDistance("");
		setDuration("");
		originRef.current.value = "";
		destiantionRef.current.value = "";
	}

	if (!isLoaded) {
		return (
			<div className="spin">
				<div className='loading-spinner'></div>
				<h3> loading </h3>
			</div>
		);
	}

	return (
		<div className='near'>
			<h1>Searching for near hospitals</h1>
			<GoogleMap
				zoom={10}
				center={{ lat: 44, lng: -80 }}
				mapContainerClassName='map-container'
			>
				<Marker position={{ lat: 44, lng: -80 }} />
			</GoogleMap>
			<Box
				className='box'
				p={4}
				borderRadius='lg'
				m={4}
				bgColor='white'
				shadow='base'
				minW='container.md'
				zIndex='1'
			>
				<HStack spacing={2} justifyContent='space-between'>
					<Box flexGrow={1}>
						<Autocomplete>
							<Input type='text' placeholder='Origin' ref={originRef} />
						</Autocomplete>
					</Box>
					<Box flexGrow={1}>
						<Autocomplete>
							<Input
								type='text'
								placeholder='Destination'
								ref={destiantionRef}
							/>
						</Autocomplete>
					</Box>

					<ButtonGroup>
						<Button colorScheme='pink' type='submit' onClick={calculateRoute}>
							Calculate Route
						</Button>
						<IconButton
							className='icon-button'
							aria-label='center back'
							icon={<FaTimes />}
							onClick={clearRoute}
						/>
					</ButtonGroup>
				</HStack>
				<HStack spacing={4} mt={4} justifyContent='space-between'>
					<Text style={{ fontSize: "20px", margin: "0", marginTop: "10px" }}>
						Distance: {distance}{" "}
					</Text>
					<Text style={{ fontSize: "20px", margin: "0", marginTop: "10px" }}>
						Duration: {duration}{" "}
					</Text>
					<IconButton
						className='icon-button'
						aria-label='center back'
						icon={<FaLocationArrow />}
						isRound
						onClick={() => {
							map.panTo(center);
							map.setZoom(15);
						}}
					/>
				</HStack>
			</Box>
		</div>
	);
};

export default Near;
