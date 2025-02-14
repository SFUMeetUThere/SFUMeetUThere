import {AppBar, Avatar, FormControlLabel, Grid2, Toolbar, Typography, Box, Button, Divider} from "@mui/material";
import {SunMoonSwitch} from "./SunMoonSwitch.tsx";

export interface SiteSectionSelectionsProps {
    siteSections: { text: string; callback: Function | null }[];
    currentSiteSection: string;
    setdarkMode: Function
}

const SiteSectionSelections = (props: SiteSectionSelectionsProps) => {
    return <Box display={"flex"}>
        {/* This has to be a ternary expression due to sx not accepting props.
            If we're okay with having the text be white/black for both selected
            and unselected sections, this can be reverted. */}
        {props.siteSections.map((section, index) => (
            (props.currentSiteSection === section.text) ? (
                <>
                    <Button
                        sx={{
                            paddingX: 2,
                            fontSize: "medium",
                            color: "white"
                        }}
                        color={"secondary"}
                        key={section.text}
                        variant={"contained"}
                        onClick={() => {
                            section.callback ? section.callback() : null
                        }}
                    >
                        {section.text}
                    </Button>
                    {(index !== props.siteSections.length - 1) ?
                        <Divider orientation="vertical" variant="middle" flexItem
                                 sx={{marginLeft: 1, marginRight: 1}}/> : null}
                </>
            ) : (
                <>
                    <Button
                        sx={{
                            paddingX: 2,
                            fontSize: "medium"
                        }}
                        color={"inherit"}
                        key={section.text}
                        variant={"text"}
                        onClick={() => {
                            section.callback ? section.callback() : null
                        }}
                    >
                        {section.text}
                    </Button>
                    {(index !== (props.siteSections.length - 1) ?
                        <Divider orientation="vertical" variant="middle" flexItem
                                 sx={{marginLeft: 1, marginRight: 1}}/> : null)}
                </>
            )
        ))}
    </Box>;
}

interface HeaderAppBarProps {
    siteSections: { text: string, callback: Function | null }[],
    currentSiteSection: string
    setdarkMode: Function
}

export const HeaderAppBar = (props: HeaderAppBarProps) => {
    return (<>
            <AppBar>
                <Toolbar sx={{justifyContent: "space-between", paddingX: 2}}>
                    <Grid2 container alignItems="center" gap={4}>
                        <Grid2><Avatar/></Grid2>
                        <Grid2>
                            <Typography variant={"h4"} fontWeight={"1000"}
                                        color={"secondary"}>MeetUThere</Typography>
                        </Grid2>
                    </Grid2>
                    {SiteSectionSelections(props)}
                    <Grid2 container alignItems="center" spacing={1}>
                        <Grid2>Light Mode</Grid2>
                        <Grid2>
                            <FormControlLabel
                                control={<SunMoonSwitch sx={{m: 1}} onChange={(event) => {
                                    props.setdarkMode(event.target.checked)
                                }} defaultChecked/>}
                                label="Dark Mode"
                            />
                        </Grid2>
                    </Grid2>
                </Toolbar>
            </AppBar>
        </>
    )
}