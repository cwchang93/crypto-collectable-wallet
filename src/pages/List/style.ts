import styled from 'styled-components';


export const StyledListPage = styled.div`
    margin-top:100px;
    

`;


export const StyledCardWrap = styled.div`
        .infinite-scroll-component  {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap:15px;
            padding: 20px 10px;
            .MuiTypography-h5{
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                white-space: normal;
                overflow: hidden;
            }
        }
        
        @media (min-width:768px) {
        
            .infinite-scroll-component{
                grid-gap:50px;
                padding: 40px 100px;
            }
            
        }

`;