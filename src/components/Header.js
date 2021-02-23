import React from 'react'
import styled from "styled-components";

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main >
                <AccessTimeIcon  style={{marginRight:"10px"}}/>
                <SearchContainer>
                    <Search >
                        <input type="input" placeholder="search...."
                            
                        ></input>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon style={{marginLeft:"10px"}}  />

            </Main>
            <UserContainer>
                <Name>Jay P Hayes</Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png"  />
                </UserImage>

            </UserContainer>
        </Container>
    )
}

export default Header


const Container= styled.div`
    display:flex;
    background: #350d36;
    color:white;
    align-items: center;
    position: relative;
    z-index: 10px;
`
    
 const Main= styled.div`
    display:flex;
    margin-right: 16px;
    margin-left: 16px;
    justify-content: center;
    align-items:center;
`

const Search= styled.div`
    box-shadow: inset 0 0 0 1px rbg(104 74 104)
    width: 100%;
    border: solid thin white;
    border-radius: 6px;
    display: flex
    align-items: center;

    

    input {
        margin-left:8px
        margin-right:8px
        background-color: transparent;
        border: none;
        color: white;
        padding-top: 4px;
        padding-bottom: 4px;
        width: 29em;
    }

    input:focus {
        outline: none;
    }
    
`

const SearchContainer= styled.div`
    min-width: 400px
    margin-left: 16px
    margin-right: 16px

`


const UserContainer= styled.div`
    display: flex
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`
const Name= styled.div`
    align-items: center;
    padding-right: 16px

`
const UserImage= styled.div`
    width:28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    img {
        width: 100%
    }
`
