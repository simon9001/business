import { Box, ButtonBase } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Nav.styles";

const Nav = () => {
    const router = useRouter();
    return (
        <Box sx={styles.Navs}>
            {Navs &&
                Navs.map((nav, i) => (
                    <Link key={i} href={nav.path} passHref style={{ textDecoration: "none" }}>
                        <ButtonBase 
                            sx={{
                                ...styles.Buttons,
                                color: router.pathname === nav.path ? "primary.main" : "text.primary",
                                fontWeight: router.pathname === nav.path ? 700 : 400
                            }}
                        >
                            {nav.name}
                        </ButtonBase>
                    </Link>
                ))
            }
        </Box>
    );
};
export default Nav;