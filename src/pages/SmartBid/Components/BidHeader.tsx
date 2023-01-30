import React from 'react';
import {Box, Flex, Image, Button} from "@chakra-ui/react";
import backImage from '../../../assets/smartbid/cardbid2.svg';
import { ArrowBackIcon} from "@chakra-ui/icons";
import {useHistory} from 'react-router-dom';

const BidHeader = () => {
    const history = useHistory();

    return (
        <>
            <Box
                position="relative"
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundColor={'#FFF3F1'}
                width={'100%'}
            >
                <Box height="300px" width={'100%'}>
                    <Flex alignItems={'center'} justifyContent={'center'} height={'100%'}>
                        <Image src={backImage}/>
                    </Flex>
                </Box>
                <Button position={'absolute'} background={'#ffffff'}
                        variant={'brand'} bottom={'25px'} left={'80px'} color={'#ce0014'}
                        _hover={{color: '#ce0014'}}
                        onClick={() => history.push('/smartbid')}
                        zIndex={100} leftIcon={<ArrowBackIcon _hover={{color: '#ce0014'}} color={'#ce0014'}/>}>Back</Button>
            </Box>
        </>
    )
};

export default BidHeader;