import { Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import TripPanel, { ITripDetails } from "./TripPanel";
import { useEffect, useState } from "react";

const Trips = () => {
    const [trips, setTrips] = useState<ITripDetails[]>([]);
    const [error, setError] = useState<unknown | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getTrips = async (controller: AbortController) => {
        try {
            setError(null);
            setLoading(true);

            const data = await (await fetch('data.json', {
                headers: {
    
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                signal: controller.signal,
            })).json();
      
            setTrips(data as ITripDetails[] ?? []);
        } catch (err) {
            if (!controller.signal.aborted) {
                setError(err);
            }
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const controller = new AbortController();

        getTrips(controller);

        return () => {
            controller.abort();
        }
    }, []);

    return (<>
        { loading && <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />}

        { !error && ! loading && <Grid
            gap={4}
            autoFlow="row dense"
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
        >
            { trips.map((trip) => <GridItem w='100%' >
                <TripPanel
                    title={trip.title}
                    countriesDesc={trip.countriesDesc}
                    durationDesc={trip.durationDesc}
                    emissionOffset={trip.emissionOffset}
                    rating={trip.rating}
                    imageUrl={trip.imageUrl}
                />
            </GridItem>)}
        </Grid>}

        { error && <Text fontSize='md' mb='2' align='center'>Sorry there was an error, please try later.</Text>}
    </>);
};

export default Trips;