import "leaflet/dist/leaflet.css"; // This isn't imported automatically by react-leaflet and has to be done manually.
import './App.css'
import {
    Box,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import {useMemo, useState} from "react";
import {HeaderAppBar} from "./components/HeaderAppBar.tsx";
import {LeafletMap} from "./components/LeafletMap.tsx";
import {JoinSessionDialog} from "./components/dialogs/JoinSessionDialog.tsx";
import {CreateSessionDialog} from "./components/dialogs/CreateSessionDialog.tsx";
import {SessionCreatedDialog} from "./components/dialogs/SessionCreatedDialog.tsx";
import {FoundLocationsDialog} from "./components/dialogs/FoundLocationsDialog.tsx";
import {Footer} from "./components/Footer.tsx";

const App = () => {
    // Theming (Light/Dark Mode)
    const [darkMode, setdarkMode] = useState<true | false>(true);
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? "dark" : "light",
                    primary: {
                        main: darkMode ? "#000" : "#fff",
                        contrastText: darkMode ? "#fff" : "#000",
                    },
                    secondary: {
                        light: "#6AA76A",
                        main: "#459145",
                        dark: "#306530",
                        contrastText: "#fff",
                    },
                },
                components: {
                    MuiOutlinedInput: {
                        styleOverrides: {
                            root: {
                                "& fieldset": {
                                    borderColor: "secondary.main",
                                    borderWidth: "2px",
                                },
                                "&:hover fieldset": {
                                    borderColor: "secondary.light",
                                    borderWidth: "2px",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "secondary.dark",
                                    borderWidth: "2px",
                                },
                            },
                        },
                    },
                    MuiCssBaseline: {
                        styleOverrides: {
                            body: {
                                transition: "background-color 1s ease, color 1.5s ease",
                            },
                            "#root": {
                                transition: "background-color 1s ease, color 1.5s ease",
                            },
                        },
                    },
                    MuiAppBar: {
                        styleOverrides: {
                            root: {
                                transition: "background-color 1s ease, color 1.5s ease",
                            },
                        },
                    },
                    MuiAvatar: {
                        styleOverrides: {
                            root: {
                                /* Color is purposefully set to 1s to match the background timing.
                                   We probably won't need this once we have an actual icon.*/
                                transition: "background-color 1s ease, color 1s ease",
                            },
                        },
                    },
                },
            }),
        [darkMode]
    );

    // Site Sections/Dialogs
    const [currentSiteSection, setcurrentSiteSection] = useState("Home");
    const changeSiteSection = (newSiteSection: string) => {
        if (newSiteSection != currentSiteSection) {
            setcurrentSiteSection(newSiteSection);
        }
    }

    const [isJoinSessionOpen, setisJoinSessionOpen] = useState(false);
    const handleOpenJoinSessionDialog = () => {
        setisJoinSessionOpen(true);
        changeSiteSection("Join Session");
    }
    const handleCloseJoinSessionDialog = () => {
        setisJoinSessionOpen(false);
        changeSiteSection("Home");
    }

    const [isCreateSessionOpen, setisCreateSessionOpen] = useState(false);
    const handleOpenCreateSessionDialog = () => {
        setisCreateSessionOpen(true);
        changeSiteSection("Create Session");
    }
    const handleCloseCreateSessionDialog = () => {
        setisCreateSessionOpen(false);
        changeSiteSection("Home");
    }

    const [isSessionCreatedOpen, setisSessionCreatedOpen] = useState(false);
    const handleOpenSessionCreatedDialog = () => {
        setisSessionCreatedOpen(true);
        changeSiteSection("Session Created");
    }
    const handleCloseSessionCreatedDialog = () => {
        setisSessionCreatedOpen(false);
        changeSiteSection("Home");
    }

    const [isFoundLocationsOpen, setisFoundLocationsOpen] = useState(false);
    const handleOpenFoundLocationsDialog = () => {
        setisFoundLocationsOpen(true);
        changeSiteSection("Found Locations");
    }
    const handleCloseFoundLocationsDialog = () => {
        setisFoundLocationsOpen(false);
        changeSiteSection("Home");
    }

    const siteSections = [
        {
            text: "Home",
            callback: null
        }, {
            text: "Join Session",
            callback: handleOpenJoinSessionDialog
        },
        {
            text: "Create Session",
            callback: handleOpenCreateSessionDialog
        },
        {
            text: "Session Created",
            callback: handleOpenSessionCreatedDialog
        },
        {
            text: "Found Locations",
            callback: handleOpenFoundLocationsDialog
        }];

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw"
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <HeaderAppBar
                        siteSections={siteSections}
                        currentSiteSection={currentSiteSection}
                        setdarkMode={setdarkMode}
                    />
                    <LeafletMap/>
                    <JoinSessionDialog open={isJoinSessionOpen} onClose={() => {
                        handleCloseJoinSessionDialog()
                    }}/>
                    <CreateSessionDialog open={isCreateSessionOpen} onClose={() => {
                        handleCloseCreateSessionDialog()
                    }}/>
                    <SessionCreatedDialog open={isSessionCreatedOpen} onClose={() => {
                        handleCloseSessionCreatedDialog()
                    }}/>
                    <FoundLocationsDialog open={isFoundLocationsOpen} onClose={() => {
                        handleCloseFoundLocationsDialog()
                    }}/>
                    <Footer/>
                </CssBaseline>
            </ThemeProvider>
        </Box>
    )
}

export default App