import React from "react";
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import FormatBoldRoundedIcon from '@material-ui/icons/FormatBoldRounded';
import FormatItalicRoundedIcon from '@material-ui/icons/FormatItalicRounded';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CodeIcon from '@material-ui/icons/Code';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
            <input type="text" placeholder="Message #social-media"/>
            <SendButton>
                <Send  />
                {/* <SendIcon  /> */}
            </SendButton>
        </form>
        <ButtonsContainer>
            <ButtonsContainerLeft>
                <ButtonDisplayBorder>
                    <FlashOnOutlinedIcon  />
                </ButtonDisplayBorder>
                
                <ButtonDisplay>
                    <FormatBoldRoundedIcon  />
                </ButtonDisplay>

                <ButtonDisplay>
                    <FormatItalicRoundedIcon  />
                </ButtonDisplay>

               

                <ButtonDisplay>
                    <StrikethroughSIcon  />
                </ButtonDisplay>

                <ButtonDisplay>
                    <CodeIcon  />
                </ButtonDisplay>

                <ButtonDisplay>
                    <LinkOffIcon  />
                </ButtonDisplay>

                <ButtonDisplay>
                    <FormatListNumberedIcon  />
                </ButtonDisplay>                
            </ButtonsContainerLeft>


            <ButtonsContainerRight>
                <ButtonDisplay>
                    <MoreHorizIcon  />
                </ButtonDisplay>
                
                <ButtonDisplay>
                    <SentimentSatisfiedRoundedIcon  />
                </ButtonDisplay>

                <ButtonDisplay>
                    <AlternateEmailIcon  />
                </ButtonDisplay>

                <ButtonDisplay>
                    <SpellcheckIcon  />
                </ButtonDisplay>

                <ButtonDisplay>
                    <AttachFileIcon  />
                </ButtonDisplay>

            </ButtonsContainerRight>
        </ButtonsContainer>

      </InputContainer>
    </Container>
  );
}

export default ChatInput;


const Container =  styled.div`
    // background: orange;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex:1;
            border: none;
            font-size: 13px;
        }

        input:focus {
            outline: none;
        }
        
    }
`

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #148567;
    }
`

const Send = styled(SendIcon)`
    color: white;
`
const ButtonsContainer = styled.div`
    background: #F8F8F8;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid darkgrey;
    padding-top: 7px;
    padding-bottom: 7px;
`
const ButtonsContainerRight = styled.div`
    // background: #F8F8F8;
    display: flex;
`
const ButtonsContainerLeft = styled.div`
    // background: #F8F8F8;
    // background: green;
    display: flex;
`
const ButtonDisplayBorder = styled.div`
    padding: 10px;
    color: darkgrey;
    display: flex;
    align-items: center;
    border-right: solid 1px darkgrey;
`
const ButtonDisplay = styled.div`
    padding: 10px;
    color: darkgrey;
    display: flex;
    align-items: center;

`