import {Box, Button, Typography} from "@mui/material";

export const Footer = () => {
    const clickables = [{text: "Privacy Policy"}, {text: "Terms & Conditions"}, {text: "Cookie Policy"}]
    return (<>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                bottom: 0,
                justifyContent: "space-between",
                paddingX: 2
            }}>
                <Box>
                    <Typography>
                        Copyright 2025. MeetUThere
                    </Typography>
                </Box>
                <Box>
                    {clickables.map((clickable) => (
                        <Button
                            sx={{paddingX: 2}}
                            variant={"text"}
                            color={"secondary"}
                        >
                            {clickable.text}
                        </Button>
                    ))}
                </Box>
            </Box>
        </>
    );
}