import React, {useState} from 'react';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Fade } from "react-awesome-reveal";
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
const Header = () => {

    const [burgerStatus,setBurgerStatus]=useState(false);
    const cars = useSelector(selectCars)

  return (
    <Container>
        <a href="">
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            {cars && cars.map((car , index) =>(
                    <a key={index} href="">{car}</a>
            ))}

        </Menu>
        <RightMenu>
            <a href="">Shop</a>
            <a href="">Tesla Account</a>
            <CustomMenu onClick={()=> setBurgerStatus(true)}>
                <MenuIcon></MenuIcon>
            </CustomMenu>
        </RightMenu>
        {burgerStatus ?
        <Fade>
            <BurgerNav>
            <CloseWrapper onClick={()=> setBurgerStatus(false)}>
                <CustomClose>
                    <CloseIcon></CloseIcon>
                </CustomClose>
            </CloseWrapper>
            {cars && cars.map((car , index) =>(
                   <li key={index}><a href="">{car}</a></li>
            ))}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">CyberTruck</a></li>
            <li><a href="#">Roadster</a></li>
            </BurgerNav>
        </Fade> : null
        }

    </Container>
  )
}

export default Header

const Container= styled.div`
    padding: 0 20px;
    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`
const BurgerNav = styled.div`
     position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     width: 300px;
     background-color: white;
     z-index: 1000;
     list-style: none;
     padding: 20px;

     li{
        padding: 15px 0 ;

        a{
            font-weight: 600;
        }
     }

     li:not(:last-child){
        border-bottom: 1px solid rgba(0,0,0, 0.2);
     }
`
const CloseWrapper = styled.div`
     display: flex;
     justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
     cursor: pointer;
`
