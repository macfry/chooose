import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

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
                pl="12"
                pr="12"
                borderRadius={12}
            >
                <Box 
                    display='flex' 
                    mt='2' 
                    alignItems='center'
                    justifyContent='space-between'
                    w='100%' 
                    bgColor='white'
                    borderTopRadius={12}
                    pt='4'
                    pb='4'
                    pl='8'
                    pr='8'
                >
                    <Box 
                        as='span' 
                        fontWeight="bold"
                        mr='auto'
                    >
                        Trip rating
                    </Box>

                    <Box 
                        as='div'
                        display='flex'
                        alignItems='center'
                        flexDir='row'
                        flexWrap='nowrap'
                    >
                        <Box
                            as='div'
                            display='flex'
                            alignItems='center'
                            flexDir='row'
                            flexWrap='nowrap'
                        >
                             {Array(5)
                                .fill('')
                                .map((_, i) => { 
                                    const currDiff = Number((rating - i).toFixed(2));
                                    return (
                                    <Box
                                        as='div'
                                        pos='relative'
                                        key={i}
                                    >
                                        <Box
                                            width={ currDiff > 0 && currDiff < 1 ? `${(rating % 1) * 100}%` : currDiff > 1 ? '100%' : '0%'}
                                            overflow='hidden'
                                            position='absolute'
                                        >
                                            <StarIcon
                                                color={'rgba(255,196,0,1)'}
                                            />
                                        </Box>

                                        <Box>
                                            <StarIcon
                                                color={'rgba(22,30,43,1)'}
                                            />
                                        </Box>
                                    </Box>
                                    )
                                }
                                )}
                        </Box>
                   
                        <Box as='span' color='black' fontSize='md' fontWeight="bold" mt='4px'>
                            {rating}
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    );
};

export default TripPanel;
