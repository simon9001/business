import { Box } from "@mui/material";
import Header from "Section/Header";
import Footer from "Section/Footer";

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
