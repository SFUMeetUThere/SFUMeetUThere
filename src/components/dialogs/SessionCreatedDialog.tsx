import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";

interface SessionCreatedDialogProps {
  open: boolean;
  onClose: () => void;
}

export const SessionCreatedDialog = (props: SessionCreatedDialogProps) => {
  const exampleSessionID = "n8a7s0f3";

  return (
    /* TODO - change dialog background color to match site theme */
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth={true}
      maxWidth={"sm"}
      sx={{
        alignItems: "center",
      }}
    >
      <IconButton
        aria-label={"close"}
        onClick={props.onClose}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle
        align={"center"}
        sx={{ paddingBottom: 2 }}
        color={"secondary"}
      >
        SESSION CREATED
      </DialogTitle>
      <Divider variant="middle" flexItem />
      <DialogContent>
        <Box textAlign={"center"}>
          <DialogContentText color={"secondary"} paddingBottom={1}>
            Share Session ID:
          </DialogContentText>
          <DialogContentText
            color={"secondary"}
            fontSize={"small"}
            paddingBottom={1}
          >
            {exampleSessionID}
          </DialogContentText>
          <Button
            fullWidth={true}
            startIcon={<LinkIcon />}
            variant={"outlined"}
            sx={{ color: "#FFF" }}
            color={"secondary"}
          >
            Copy ID
          </Button>
          <Divider variant="middle" flexItem>
            <DialogContentText
              color={"secondary"}
              fontWeight={"bold"}
              fontSize={"larger"}
              paddingTop={3}
              paddingBottom={2}
            >
              OR
            </DialogContentText>
          </Divider>

          <DialogContentText color={"secondary"} paddingBottom={1}>
            Share Invitation Link:
          </DialogContentText>
          <DialogContentText
            color={"secondary"}
            fontSize={"small"}
            paddingBottom={1}
          >
            {`SFUMeetUThere.ca/${exampleSessionID}`}
          </DialogContentText>
          <Button
            fullWidth={true}
            startIcon={<LinkIcon />}
            variant={"outlined"}
            sx={{ color: "#FFF", marginBottom: 2 }}
            color={"secondary"}
          >
            Copy Link
          </Button>
        </Box>
        <Divider variant="middle" flexItem />
        <Button
          fullWidth={true}
          variant={"contained"}
          sx={{ color: "white", marginTop: 2 }}
          color={"secondary"}
          onClick={props.onClose}
        >
          Done
        </Button>
      </DialogContent>
    </Dialog>
  );
};
