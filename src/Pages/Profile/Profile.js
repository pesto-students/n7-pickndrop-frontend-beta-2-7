import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
    return (
        <>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header />
            <div style={{
                display:'flex',
                flexDirection:'row'
            }}>
                <List>
                {[
                    'Orders List',
                    'Addresses',
                    'Manage Payments',
                    'Support',
                    'About'
                ].map((text, index) => (
                    <ListItem key={index} button>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <main style={{
                                minWidth:'60%'
                            }}>
                {
                    Array(10).fill(mockData[0]).map((item,index)=>{
                        const {sender,receiver,description}=item;
                        const {place:senderPlace}=sender;
                        const {place:receiverPlace}=receiver;
                        return (
                            <div style={{
                                margin:15,
                                padding:15
                            }} key={index}>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center'
                                }}>
                                    <span>Medicines</span>
                                    <span>Paid: Rs.525</span>
                                </div>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'stretch'
                                }}>
                                    <div>
                                        <LocationOnIcon />
                                        <span>{senderPlace}</span>
                                    </div>
                                    <div>
                                        <LocationOnIcon />
                                        <span>{receiverPlace}</span>
                                    </div>
                                    </div>
                                    <div>
                                        <span>{description}</span>
                                        </div>
                                </div>
                        )
                    })
                }
                </main>
                </div>
                <Footer />
            </Container>
        </>
    )
}
export {Profile};