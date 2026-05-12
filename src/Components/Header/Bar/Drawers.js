import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

//Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";

//Logo
import Logo from "Assets/header/logo.png";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
    return (
        <Box>
            <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box sx={{ flex: 1, mt: "5px" }}>
                    <Typography 
                        variant="h5" 
                        component="span" 
                        sx={{ 
                            fontWeight: 900, 
                            color: "primary.main", 
                            letterSpacing: "-1px"
                        }}
                    >
                        Jengea<Box component="span" sx={{ color: "text.primary" }}>Me</Box>
                    </Typography>
                </Box>
                <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
                    <CloseRoundedIcon />
                </ButtonBase>
            </Stack>
            <Typography variant="body1" component="p" sx={styles.Description}>
                We are JengeaMe, a group of people passionate about solving problems with the power of code. We have more than 4+ professional experience in different domains and clients. Our problem-solving skills help us to create a great product for you. We are always available to help your dream projects come true.
            </Typography>
            <Box sx={styles.Navs}>
                {Navs &&
                    Navs.map((nav, i) => (
                        <Link key={i} href={nav.path} passHref style={{ textDecoration: "none" }}>
                            <ButtonBase 
                                onClick={toggleDrawer(false)}
                                sx={{
                                    ...styles.Buttons,
                                    color: "text.primary"
                                }}
                            >
                                {nav.name}
                            </ButtonBase>
                        </Link>
                    ))
                }
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <MapIcon />
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                        171/5, Borhanpur Lane, 6 Hazaribagh Road, Dhaka 1211
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <EmailIcon />
                </Box>
                <Box>
                    <Link href="mailto:info@jengeame.com" passHref>
                        <Typography variant="body1" component="p">
                            info@jengeame.com
                        </Typography>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PhoneIcon />
                </Box>
                <Box>
                    <Link href="tel:+8801552938771" passHref>
                        <Typography variant="body1" component="p">
                            +880 1552-938771
                        </Typography>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Social}>
                <Link href="https://github.com/jengeame" target="_blank">
                    <ButtonBase>
                        <GitHubIcon />
                    </ButtonBase>
                </Link>
                <Link href="https://www.facebook.com/jengeame" target="_blank">
                    <ButtonBase>
                        <FacebookIcon />
                    </ButtonBase>
                </Link>
                <Link href="https://twitter.com/jengeame" target="_blank">
                    <ButtonBase>
                        <TwitterIcon />
                    </ButtonBase>
                </Link>
                <Link href="https://behance.com/jengeame" target="_blank">
                    <ButtonBase>
                        <BehaceIcon />
                    </ButtonBase>
                </Link>
            </Stack>
        </Box >
    );
};
export default Drawers;