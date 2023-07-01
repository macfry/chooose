import { Grid, GridItem } from "@chakra-ui/react";
import TripPanel from "./TripPanel";

const test = {
    title: 'European Quest',
    countriesDesc: '8 countries',
    durationDesc: '21 Days',
    emissionOffset: '810kg',
    rating: 2.35,
    imageUrl: 'https://picsum.photos/600/800',
};

const Trips = () => {
    return (
        <Grid
            gap={4}
            autoFlow="row dense"
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
        >
            <GridItem w='100%' >
                <TripPanel
                    title={test.title}
                    countriesDesc={test.countriesDesc}
                    durationDesc={test.durationDesc}
                    emissionOffset={test.emissionOffset}
                    rating={test.rating}
                    imageUrl={test.imageUrl}
                />
            </GridItem>
        </Grid>
    );
};

export default Trips;