import React from "react";
import {useDispatch} from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {userConstants} from '../../constants/userConstants';
const mockData=[
    {
        sender:{
            lat:12.9716,
            lng:77.5946,
            place:'North Bengalore'
        },
        receiver:{
            lat:12.9716,
            lng:77.5946,
            place:'East Bengalore'
        },
        description:'It is a book with some notes'
    }
]
const Profile=()=>{
    const dispatch=useDispatch();
    return (
        <>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header />
            <main>
                {
                    Array(10).fill(mockData[0]).map((item,index)=>{
                        const {sender,receiver,description}=item;
                        const {place:senderPlace}=sender;
                        const {place:receiverPlace}=receiver;
                        return (
                            <div key={index}>
                                <p>{
                                    `From: ${senderPlace} to ${receiverPlace}`
                                }</p>
                                <p>{description}</p>
                                </div>
                        )
                    })
                }
                <Button onClick={()=>{
                    dispatch({
                        type:userConstants.LOGOUT
                    })
                }}>Logout</Button>
            </main>
            <Footer />
        </Container>
        </>
    )
}
export {Profile};