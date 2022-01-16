import React from 'react';
import useHttp from '../../hooks/use-http';
import { StyledListPage, StyledCardWrap } from './style';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';


const List = () => {

    const { isLoading, error, sendRequest } = useHttp();
    const [offSet, setOffSet] = React.useState<number>(0);
    const [assetData, setAssetData] = React.useState<any>(null);

    const handleApplyData = (data: any) => {
        setAssetData((prevData: any) => {
            if (prevData) {
                return [...prevData, ...data.assets];
            } else {
                return data.assets;
            }
        });
    }

    React.useEffect(() => {
        sendRequest({
            url: `${process.env.REACT_APP_REQUEST_URL}s/?format=json&owner=${process.env.REACT_APP_OWNER}&offset=${offSet}&limit=20`,
        }, handleApplyData);
        setOffSet(offSet + 1);
    }, [])

    const handleLoadMore = () => {
        sendRequest({
            url: `${process.env.REACT_APP_REQUEST_URL}s/?format=json&owner=${process.env.REACT_APP_OWNER}&offset=${offSet}&limit=20`,
        }, handleApplyData);

        setOffSet(offSet + 1);
    }



    return (
        <StyledListPage>
            <StyledCardWrap >
                {isLoading && <CircularProgress />}
                {assetData &&
                    <InfiniteScroll dataLength={assetData?.length} next={handleLoadMore} hasMore={true} loader={<CircularProgress />} >
                        {
                            assetData?.map((ele: any, idx: number) => {
                                return (
                                    <Card key={`${ele.id}_${idx}`} sx={{ height: 230 }}>
                                        <NavLink to={`/products/${ele['asset_contract']['address']}/${ele['token_id']}`}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={ele.image_original_url}
                                                alt={ele.name}
                                            />
                                        </NavLink>
                                        <CardContent>
                                            <NavLink to={`/products/${ele['asset_contract']['address']}/${ele['token_id']}`}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {ele.name}
                                                </Typography>
                                            </NavLink>

                                        </CardContent>
                                    </Card>
                                )
                            })
                        }

                    </InfiniteScroll>
                }
            </StyledCardWrap>
        </StyledListPage>
    )

}


export default List;


