const styles = {
    Container: {
        py: "5em",
        overflow: "hidden"
    },
    Card: {
        textAlign: "center",
        p: "2.5em 2em",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        borderRadius: "15px",
        transition: "all 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0px 15px 40px rgba(255, 79, 62, 0.15)",
        }
    },
    RecommendedCard: {
        textAlign: "center",
        p: "2.5em 2em",
        boxShadow: "0px 15px 40px rgba(255, 79, 62, 0.15)",
        borderRadius: "15px",
        border: "2px solid #FF4F3E",
        transform: "scale(1.05)",
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 900px)": {
            transform: "scale(1)",
            mt: "2em",
            mb: "2em"
        }
    },
    RecommendedBadge: {
        position: "absolute",
        top: "-15px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#FF4F3E",
        color: "#FFF",
        padding: "5px 15px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    Title: {
        fontWeight: 700,
        mb: "10px"
    },
    Description: {
        color: "text.secondary",
        mb: "20px",
        minHeight: "48px"
    },
    PriceContainer: {
        mb: "20px"
    },
    Price: {
        fontWeight: 800,
        color: "primary.main",
        display: "inline-block"
    },
    Duration: {
        color: "text.secondary",
        display: "inline-block",
        ml: "5px"
    },
    FeatureList: {
        mb: "30px",
        flexGrow: 1
    },
    FeatureItem: {
        py: "8px",
        justifyContent: "center"
    },
    Button: {
        padding: "10px 30px",
        borderRadius: "30px",
        textTransform: "capitalize",
        fontWeight: 600,
        boxShadow: "none",
        "&:hover": {
            boxShadow: "0px 5px 15px rgba(255, 79, 62, 0.3)",
        }
    }
};

export default styles;
