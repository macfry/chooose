import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

interface IRating {
    maxValue: number;
    currentValue: number;
}

const Rating = ({ maxValue, currentValue }: IRating) => {
    return (
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
                {Array(maxValue)
                    .fill('')
                    .map((_, i) => {
                        const currDiff = Number((currentValue - i).toFixed(2));
                        return (
                            <Box
                                as='div'
                                pos='relative'
                                key={i}
                            >
                                <Box
                                    width={currDiff > 0 && currDiff < 1 ? `${(currentValue % 1) * 100}%` : currDiff > 1 ? '100%' : '0%'}
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

            <Box as='span' color='rgba(22,30,43,1)' fontSize='md' fontWeight="bold" mt='4px'>
                {currentValue.toFixed(2)}
            </Box>
        </Box>
    );
};

export default Rating;
