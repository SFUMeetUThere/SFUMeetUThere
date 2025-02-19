import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
export interface FoundLocationsDialogProps {
  open: boolean;
  onClose: () => void;
}

export const FoundLocationsDialog = (props: FoundLocationsDialogProps) => {
  const exampleLocations = [
    {
      name: "The Revolver",
      address: "325 Cambie Street, Vancouver, BC | V6B 2N4",
      distanceFromUser: "11km",
    },
    {
      name: "Nemesis Coffee",
      address: "302 West Hastings Street, Vancouver, BC | V6B 1K6",
      distanceFromUser: "14km",
    },
    {
      name: "Small Victory Bakery",
      address: "1088 Homer Street, Vancouver, BC | V6B 2W9",
      distanceFromUser: "18km",
    },
    {
      name: "Timbertrain Coffee Roasters",
      address: "311 West Cordova Street, Vancouver, BC | V6B 1E5",
      distanceFromUser: "20km",
    },
    {
      name: "Café Medina",
      address: "780 Richards Street, Vancouver, BC | V6B 3A4",
      distanceFromUser: "24km",
    },
  ];

  return (
    /* TODO - change dialog background color to match site theme */
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth={true}
      maxWidth={"sm"}
      sx={{
        alignItems: "center",
        "& .MuiDialog-paper": {
          height: "100%",
          minWidth: "33.3%",
          position: "fixed",
          right: 0,
        },
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
      <DialogTitle align={"center"} color={"secondary"}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          FOUND LOCATIONS
        </Typography>
      </DialogTitle>
      <Divider variant="middle" flexItem />
      <DialogContent>
        <Box
          display={"flex"}
          sx={{
            justifyContent: "space-evenly",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {exampleLocations.map((location, index) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid2
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                  <Typography variant={"h5"} paddingRight={"0.5rem"}>
                    {location.distanceFromUser}
                  </Typography>
                  <Button
                    variant={"text"}
                    sx={{
                      color: "white",
                      borderRadius: "2rem",
                    }}
                  >
                    <AssistantDirectionIcon />
                  </Button>
                </Grid2>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Grid2
                      sx={{
                        border: "0.25rem solid #459145",
                        borderRadius: "1rem",
                        flex: 1,
                        padding: "1rem",
                      }}
                    >
                      <Grid2
                        container
                        display="flex"
                        flexDirection={"row"}
                        gap={1.5}
                      >
                        <Grid2
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1,
                          }}
                        >
                          <Typography paddingBottom={0.5}>Name:</Typography>
                          <Typography paddingBottom={0.5}>
                            {location.name}
                          </Typography>
                        </Grid2>
                        <Grid2
                          sx={{ display: "flex", flexDirection: "row", gap: 1 }}
                        >
                          <Typography>Address:</Typography>
                          <Typography sx={{ textWrap: "wrap" }}>
                            {location.address}
                          </Typography>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Box>
                </Box>
              </Box>

              {index !== exampleLocations.length - 1 ? (
                <Divider variant="middle" flexItem />
              ) : null}
            </>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
