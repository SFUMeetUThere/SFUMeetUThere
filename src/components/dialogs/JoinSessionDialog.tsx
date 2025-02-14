import {useState} from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    IconButton,
    TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface JoinSessionDialogProps {
    open: boolean,
    onClose: any
}

export const JoinSessionDialog = (props: JoinSessionDialogProps) => {
    const [sessionID, setsessionID] = useState<string | null>(null);
    const [address, setaddress] = useState<string | null>(null);

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
            <DialogTitle align={"center"} sx={{paddingBottom: 2}} color={"secondary"}>JOIN A SESSION</DialogTitle>
            <Divider variant="middle" flexItem/>
            <DialogContent>
                <DialogContentText color={"secondary"}>
                    Enter the Session ID
                </DialogContentText>
                <TextField
                    autoFocus={true}
                    required={true}
                    fullWidth={true}
                    variant={"outlined"}
                    color={"secondary"}
                    sx={{paddingBottom: 4}}
                    value={sessionID}
                    onChange={(event) => {
                        setsessionID(event.target.value)
                    }}
                />
                <DialogContentText color={"secondary"}>
                    Enter your address
                </DialogContentText>
                <TextField
                    /* TODO - Look for alternatives, as this might need to be replaced with something else since address validation is difficult. */
                    required={true}
                    fullWidth={true}
                    variant={"outlined"}
                    color={"secondary"}
                    sx={{paddingBottom: 2}}
                    value={address}
                    onChange={(event) => {
                        setaddress(event.target.value)
                    }}
                />
                <Divider variant="middle" flexItem/>
                <Button fullWidth={true}
                        variant={"contained"}
                        sx={{color: "white", marginTop: 2}}
                        color={"secondary"}
                >Join Session</Button>
            </DialogContent>
        </Dialog>)
};