const styles = {
    ScrollContainer: {
        display: "flex",
        overflowX: "auto",
        gap: "30px",
        pb: "20px",
        scrollSnapType: "x mandatory",
        "&::-webkit-scrollbar": {
            height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "primary.main",
            borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "rgba(0,0,0,0.05)",
        }
    },
    WorkItem: {
        flex: "0 0 auto",
        width: {
            md: "450px",
            sm: "350px",
            xxs: "280px"
        },
        scrollSnapAlign: "start",
        position: "relative",
    },
    ImageBox: {
        overflow: "hidden",
        width: "100%",
        height: {
            md: "300px",
            sm: "250px",
            xxs: "200px"
        },
        borderRadius: "15px",
        position: "relative",
        img: {
            transition: "all 1.2s cubic-bezier(0, 0, 0.2, 1)",
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "primary.main",
            opacity: "0.3",
            transition: "all 0.5s cubic-bezier(0, 0, 0.2, 1)",
            transformOrigin: "top left",
            transform: "scaleY(0)",
            visibility: "hidden",
            zIndex: 1
        },
        "& .css-mui-svg": {
            backgroundColor: "primary.main",
            color: "background.default",
            position: "absolute",
            top: "25%",
            left: "50%",
            width: "44px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translate(-50%, -50%) scaleY(0)",
            transition: "all 0.4s cubic-bezier(0, 0, 0.2, 1)",
            opacity: 0,
            visibility: "hidden"
        },
        "&:hover": {
            img: {
                transform: "scale3d(1.1, 1.1, 1.1)"
            },
            "&:before": {
                transform: "scaleY(1)",
                visibility: "visible",
            },
            "& .css-mui-svg": {
                visibility: "visible",
                opacity: 1,
                transform: "translate(-50%, -50%) scaleY(1)",
                top: "50%",
                zIndex: 9
            }
        }
    },
    WorkTitle: {
        mt: "15px",
        fontWeight: 700,
        color: "text.primary",
        fontSize: {
            smd: "1.3rem",
            xxs: "1.1rem"
        },
        transition: "0.3s ease",
        "&:hover": {
            color: "primary.main"
        }
    }
};

export default styles;