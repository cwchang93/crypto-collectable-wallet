import React from 'react';
import { StyledProductDetail, StyledBtnWrap } from './style';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import Header from '../../components/Header/Header'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useHistory } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const ProductDetail = () => {

    const params = useParams();
    const history = useHistory();
    const { sendRequest } = useHttp();

    const [productData, setProductData] = React.useState<any>(null);
    const handleApplyData = (data: any) => {
        setProductData(data);
    }

    React.useEffect(() => {
        sendRequest({
            url: `${process.env.REACT_APP_REQUEST_URL}/${params.contractAddress}/${params.tokenId}`,
        }, handleApplyData);
    }, [])


    return (


        <StyledProductDetail>
            {productData ? (
                <>
                    <Header name={productData['collection']['name']} onClickBack={history.goBack} />
                    <Card key={`${productData.id}`}  >

                        <CardMedia
                            component="img"
                            height="100%"
                            image={productData.image_original_url}
                            alt={productData.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                {productData.name}
                            </Typography>
                            <Typography paragraph>
                                {productData.description}
                            </Typography>
                        </CardContent>


                    </Card>
                    <StyledBtnWrap>
                        <Button variant="contained" onClick={() => window.location.href = productData.permalink}>
                            Permalink
                        </Button>

                    </StyledBtnWrap>
                </>
            ) : <CircularProgress />
            }

        </StyledProductDetail >
    )

}


export default ProductDetail;


