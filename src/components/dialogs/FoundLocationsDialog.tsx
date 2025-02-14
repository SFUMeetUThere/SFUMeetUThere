import {Box, Button, Dialog, DialogContent, DialogTitle, Divider, Grid2, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import LaunchIcon from '@mui/icons-material/Launch';
export interface FoundLocationsDialogProps {
    open: boolean,
    onClose: any
}

export const FoundLocationsDialog = (props: FoundLocationsDialogProps) => {
    const exampleLocations = [
        {
            name: "The Revolver",
            address: "325 Cambie Street, Vancouver, BC | V6B 2N4",
            distanceFromUser: "11km"
        },
        {
            name: "Nemesis Coffee",
            address: "302 West Hastings Street, Vancouver, BC | V6B 1K6",
            distanceFromUser: "14km"
        },
        {
            name: "Small Victory Bakery",
            address: "1088 Homer Street, Vancouver, BC | V6B 2W9",
            distanceFromUser: "18km"
        },
        {
            name: "Timbertrain Coffee Roasters",
            address: "311 West Cordova Street, Vancouver, BC | V6B 1E5",
            distanceFromUser: "20km"
        },
        {
            name: "Café Medina",
            address: "780 Richards Street, Vancouver, BC | V6B 3A4",
            distanceFromUser: "24km"
        }
    ];

    return (
        /* TODO - change dialog background color to match site theme */
        <Dialog open={props.open} onClose={props.onClose} fullWidth={true} maxWidth={"sm"} sx={{
            alignItems: "center",
            "& .MuiDialog-paper": {
                height: "100%",
                minWidth: "33.3%",
                position: "fixed",
                right: 0,
            },
        }}>
            <IconButton
                aria-label={"close"}
                onClick={props.onClose}
                sx={{
                    position: 'absolute',
                    right: 12,
                    top: 12,
                }}
            >
                <CloseIcon/>
            </IconButton>
            <DialogTitle align={"center"} color={"secondary"}>FOUND LOCATIONS</DialogTitle>
            <Divider variant="middle" flexItem/>
            <DialogContent>
                <Box display={"flex"} sx={{
                    justifyContent: "space-evenly",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column"
                }}>
                    {exampleLocations.map((location, index) => (
                        <>
                            <Grid2 container gap={2} display={"flex"} flexDirection={"row"} width={"100%"}>
                                <Grid2 display={"flex"} alignItems={"center"}>
                                    <Typography variant={"h3"} paddingRight={"0.5rem"}>{index + 1}</Typography>
                                </Grid2>
                                <Grid2 sx={{
                                    border: "0.25rem solid #459145",
                                    borderRadius: "1rem",
                                    flex: 1,
                                    padding: "1rem"
                                }}>
                                    <Grid2 container display="flex" flexDirection={"row"} gap={1.5}>
                                        <Grid2>
                                            <Typography paddingBottom={0.5}>
                                                Name:
                                            </Typography>
                                            <Typography>
                                                Address:
                                            </Typography>
                                        </Grid2>
                                        <Grid2>
                                            <Typography paddingBottom={0.5}> {location.name} </Typography>
                                            <Typography> {location.address}</Typography>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                                <Grid2 display={"flex"} alignItems={"center"}>
                                    <Typography variant={"h6"}>{location.distanceFromUser}</Typography>
                                </Grid2>
                            </Grid2>
                            <Box display={"flex"}>
                                <Button
                                    fullWidth={true}
                                    startIcon={<AssistantDirectionIcon/>}
                                    variant={"contained"}
                                    sx={{color: "white"}}
                                    color={"secondary"}
                                >Navigate</Button>
                                <Divider orientation="vertical" variant="middle" flexItem
                                         sx={{marginLeft: 1, marginRight: 1}}/>
                                <Button
                                    fullWidth={true}
                                    startIcon={<LaunchIcon/>}
                                    variant={"contained"}
                                    sx={{color: "white"}}
                                    color={"secondary"}
                                >Open in Google/Apple Maps</Button>
                            </Box>
                            {(index !== exampleLocations.length - 1 ? <Divider variant="middle" flexItem/> : null)}
                        </>
                    ))}
                </Box>
            </DialogContent>
        </Dialog>)
};