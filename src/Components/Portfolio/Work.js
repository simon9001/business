import { Grid, Box, Typography } from "@mui/material";
import Link from "next/link";

//Icons
import { PlusIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Portfolio/Work.styles";

const Work = ({ works }) => {
    return (
        <Box sx={styles.ScrollContainer}>
            {works &&
                works.map((work, i) => (
                    <Box key={i} sx={styles.WorkItem}>
                        <Link href={work.url} target="_blank" style={{ textDecoration: "none" }}>
                            <Box sx={styles.ImageBox}>
                                <Box component="img" src={work.image} />
                                <Box className="css-mui-svg">
                                    <PlusIcon />
                                </Box>
                            </Box>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={styles.WorkTitle}
                            >
                                {work.name}
                            </Typography>
                        </Link>
                    </Box>
                ))
            }
        </Box>
    );
};
export default Work;