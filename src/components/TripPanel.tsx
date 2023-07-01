import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Rating from "./Rating";

export interface ITripDetails {
    title: string;
    countriesDesc: string;
    durationDesc: string;
    emissionOffset: string;
    rating: number;
    imageUrl: string;
}


const TripPanel = ({ title, countriesDesc, durationDesc, emissionOffset, rating, imageUrl, }: ITripDetails) => {
    return (
        <Box borderRadius={16} background='white' overflow='hidden' p='2'>
            <Box
                bgImage={imageUrl}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                display='flex'
                flexDir='column'
                alignItems='center'
                justifyContent='flex-end'
                color='white'
                pl="12"
                pr="12"
                borderRadius={12}
                minH='320'
            >

                <Box width='100%' mb='10'>
                    <Stack spacing={6} textAlign='center' mt='auto' gap='0'>
                        <Heading as='h1' size='lg' noOfLines={1} mb='2'>
                            {title}
                        </Heading>

                        <Text fontSize='md' mb='2'>
                            {countriesDesc}, {durationDesc}
                        </Text>
                    </Stack>

                    <Box
                        w='100%' 
                        bgColor='rgba(22,30,43,1)'
                        borderRadius={12}
                        display='flex'
                        flexDir='row'
                        justifyContent='space-between'
                        p='4'
                    >
                        <Text as='span' fontSize='md'>
                            Emmission offset:
                        </Text>

                        <Text as='span' fontSize='md'>
                            {emissionOffset}
                        </Text>
                    </Box>
                </Box>

                <Box 
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    bgColor='white'
                    borderTopRadius={12}
                    color='rgba(22,30,43,1)'
                    pt='4'
                    pb='4'
                    pl='8'
                    pr='8'
                    width='100%'
                >
                    <Box 
                        as='span' 
                        fontWeight="bold"
                        mr='auto'
                    >
                        Trip rating
                    </Box>

                    <Rating maxValue={5} currentValue={rating} />
                </Box>
            </Box>
        </Box>
    );
};

export default TripPanel;
