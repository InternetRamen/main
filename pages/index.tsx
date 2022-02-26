import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
    Box,
} from "@mui/material";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>poolesville_hacks</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <Container
                    sx={{
                        height: "40vh",
                        minHeight: 600,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "15px",
                    }}
                >
                    <Typography component="h1" variant="h3">
                        poolesville_hacks
                    </Typography>
                    <Button color="secondary" variant="contained">
                        Learn More
                    </Button>
                </Container>

                <Box
                    sx={{
                        bgcolor: "primary.dark",
                    }}
                >
                    <Container
                        sx={{
                            flexWrap: "wrap",
                            scrollMarginTop: "5vh",

                            py: { xs: 4, md: 8 },
                        }}
                        id="about"
                    >
                        <Grid container spacing={6}>
                            <Grid item xs={6}>
                                <Typography
                                    component="h2"
                                    variant="h3"
                                    gutterBottom
                                >
                                    About Us
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="body1"
                                    color="primary.contrastText"
                                >
                                    poolesville_hacks is a school-wide hackathon
                                    club that hosts around four hackathons
                                    throughout the year. Started by PHS
                                    students, poolesville_hacks aims to develop
                                    creative and technical skills. Participants
                                    will design, prototype, and present their
                                    projects to a panel of judges and have a
                                    chance to win a competitive prize.
                                    Participating is completely free and is a
                                    great chance to test your technical skills
                                    and win great prizes. Additionally,
                                    workshops will be hosted during the event
                                    that aim to introduce students to skills
                                    used in the professional field.
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Card
                                    sx={{
                                        borderRadius: "20px",
                                        bgcolor: "secondary.dark",
                                        height: 200,
                                        width: "100%",
                                        mx: 2,
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            component="h2"
                                            variant="h5"
                                            color="secondary.contrastText"
                                            sx={{ fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            Next Hackathon
                                        </Typography>
                                        <Typography
                                            component="h2"
                                            variant="body1"
                                            color="secondary.contrastText"
                                        >
                                            TBD
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </main>
        </>
    );
};

export default Home;
