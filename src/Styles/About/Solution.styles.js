const styles = {
    Card: {
        textAlign: "center",
        p: "2.5em 1.5em",
        borderRadius: "20px",
        background: "#fff",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
        height: "100%",
        "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0px 15px 40px rgba(255, 79, 62, 0.12)",
        }
    },
    Title: {
        mt: "20px",
        mb: "8px",
        fontWeight: 800,
    },
    Description: {
        fontSize: "15px",
        color: "text.secondary"
    },
    Image: {
        width: "70px",
        height: "70px",
        mb: "10px"
    }
};

export default styles;