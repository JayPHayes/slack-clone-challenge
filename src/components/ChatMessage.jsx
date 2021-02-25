import React from 'react'
import styled from "styled-components";


function ChatMessage({chat}) {
    return (
        <div>
            <Container>
                < UserAvatar>
                    <img src={chat.imgUrl} alt={chat.name} />
                    {/* <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" /> */}
                </UserAvatar>
                <MessageContent>
                    <Name>
                        {chat.name}
                        <span>2/23/2021 11:13:55 AM</span>

                    </Name>
                    <Text> {chat.chatText} </Text>

                </MessageContent>
            </Container>
        </div>
    )
}

export default ChatMessage


const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    :hover {
        background: rgba(63,14,64, 0.2);
    }
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;
    border-radius:50%;
    border: 2px solid rgba(63,14,64, 0.5);

    img {
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    
    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgba(97,96, 97, 1);
        font-size: 13px;
    }
`

const Text = styled.span`

`

const xxxxx = styled.div``