import React from "react";
import styled from "styled-components";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Login() {
  return (
    <Container>
      <Header>
        
        <HeaderTitle>
            <HeaderText> # clever  </HeaderText>
            <StarOutlineIcon  />
        </HeaderTitle>


        <HeaderDetails>
            <HeaderDetailText> Detail </HeaderDetailText>
            <InfoOutlinedIcon  />
        </HeaderDetails>
      </Header>

      <ContainerLabel>
        <span>Company-width announcements and work-based matters</span>
      </ContainerLabel>

        <BottomText>
            <input type="text" placeholder="Message # clever" />
        </BottomText>

    </Container>
  );
}

export default Login;

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;

    background: #2b002c;
    color:white;
`;


const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    height:20px;

`;

const HeaderText = styled.div`
`;

const HeaderDetailText = styled.div`
    margin-right: 10px;
`;

const HeaderTitle = styled.div`
  font-weight: bold; 
  font-size: 18px;
  align-itmes: center;
  display: flex;
  
`;

const HeaderDetails = styled.div`
    display: flex;
`;
const ContainerLabel = styled.div``;

const BottomText = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 25px;
    input {
        width: 82vw;
    }
`;

const XXxxx = styled.div``;
