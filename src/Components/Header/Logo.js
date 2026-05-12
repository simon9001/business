import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Logo = () => {
    return (
        <Box sx={{ mt: "2px", a: { cursor: "pointer", textDecoration: "none" } }}>
            <Link href="/">
                <Typography 
                    variant="h4" 
                    component="span" 
                    sx={{ 
                        fontWeight: 900, 
                        color: "primary.main", 
                        letterSpacing: "-1px",
                        fontSize: { xxs: "1.5rem", sm: "1.8rem" }
                    }}
                >
                    Jengea<Box component="span" sx={{ color: "text.primary" }}>Me</Box>
                </Typography>
            </Link>
        </Box>
    );
};
export default Logo;