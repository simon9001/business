import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";
import GitHubIcon from '@mui/icons-material/GitHub';

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
    return (
        <Box>
            <Box sx={{ mb: "30px" }}>
                <Typography 
                    variant="h4" 
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
                    <Link href="mailto:info@jengeame.com">

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
                    <Link href="tel:+8801552938771">

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
        </Box>
    );
};
export default FooterOne;