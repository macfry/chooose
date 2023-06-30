import { StarIcon } from "@chakra-ui/icons";
import { Box, Image } from "@chakra-ui/react";

export interface ITripDetails {
    title: string;
    countriesDesc: string;
    durationDesc: string;
    emissionOffset: string;
    rating: number;
    imageUrl: string;
    imageAlt: string;
}


const TripPanel = ({ title, countriesDesc, durationDesc, emissionOffset, rating, imageUrl, imageAlt }: ITripDetails) => {
    return (
        <Box borderRadius={20} background='white' overflow='hidden' p='10'>
            <Image src={imageUrl} alt={imageAlt} />

            <Box>
                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {rating}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TripPanel;
