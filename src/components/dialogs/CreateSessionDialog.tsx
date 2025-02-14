import {useState} from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    IconButton,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CreateSessionDialogProps {
    open: boolean,
    onClose: any
}

export const CreateSessionDialog = (props: CreateSessionDialogProps) => {
    const [username, setusername] = useState<string | null>(null);
    const [sessionName, setsessionName] = useState<string | null>(null);
    const [meetingLocation, setmeetingLocation] = useState<string | null>(null);
    const meetingLocationChoices = ["Cafe", "Restaurant", "Park", "Library"];

    return (
        /* TODO - change dialog background color to match site theme */
        <Dialog open={props.open} onClose={props.onClose} fullWidth={true} maxWidth={"sm"} sx={{
            alignItems: "center"
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
            <DialogTitle align={"center"} sx={{paddingBottom: 2}} color={"secondary"}>CREATE A SESSION</DialogTitle>
            <Divider variant="middle" flexItem/>
            <DialogContent>
                <DialogContentText color={"secondary"}>
                    Enter a Username
                </DialogContentText>
                <TextField
                    autoFocus={true}
                    required={true}
                    fullWidth={true}
                    variant={"outlined"}
                    color={"secondary"}
                    sx={{paddingBottom: 4}}
                    value={username}
                    onChange={(event) => {
                        setusername(event.target.value)
                    }}
                />
                <DialogContentText color={"secondary"}>
                    Enter a Session Name
                </DialogContentText>
                <TextField
                    required={true}
                    fullWidth={true}
                    variant={"outlined"}
                    color={"secondary"}
                    sx={{paddingBottom: 4}}
                    value={sessionName}
                    onChange={(event) => {
                        setsessionName(event.target.value)
                    }}
                />
                <DialogContentText color={"secondary"}>
                    Where do you want to meet?
                </DialogContentText>
                <Select
                    required={true}
                    fullWidth={true}
                    value={meetingLocation}
                    color={"secondary"}
                    /* marginBottom is used here because paddingBottom creates extra
                       space INSIDE the select container, as opposed to underneath it.*/
                    sx={{marginBottom: 2}}
                    onChange={(event) => {
                        setmeetingLocation(event.target.value)
                    }}
                >
                    {meetingLocationChoices.map((choice) => (
                        <MenuItem value={choice}>{choice}</MenuItem>
                    ))}
                </Select>
                <Divider variant="middle" flexItem/>
                <Button fullWidth={true}
                        variant={"contained"}
                        sx={{color: "white", marginTop: 2}}
                        color={"secondary"}
                >Create Session</Button>
            </DialogContent>
        </Dialog>
    )
};