import { Container, Grid, Box, Typography, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Components
import SectionHeading from "Utilis/SectionHeading";

// Data
import PricingData from "Data/Pricing/Pricing.data";

// Styles
import styles from "Styles/Pricing/Pricing.styles";

const Pricing = () => {
    return (
        <Container maxWidth={false} disableGutters as="section" sx={styles.Container} id="pricing">
            <SectionHeading
                value1="Choose Your"
                value2="Pricing Plan"
                border={false}
            />
            <Container maxWidth="lg" sx={{ mt: "4em" }}>
                <Grid container spacing={4} alignItems="stretch">
                    {PricingData.map((plan, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Box sx={plan.recommended ? styles.RecommendedCard : styles.Card}>
                                {plan.recommended && (
                                    <Box sx={styles.RecommendedBadge}>
                                        Recommended
                                    </Box>
                                )}
                                <Typography variant="h4" component="h3" sx={styles.Title}>
                                    {plan.title}
                                </Typography>
                                <Typography variant="body1" component="p" sx={styles.Description}>
                                    {plan.description}
                                </Typography>
                                <Box sx={styles.PriceContainer}>
                                    <Typography variant="h3" component="span" sx={styles.Price}>
                                        {plan.price}
                                    </Typography>
                                    <Typography variant="subtitle1" component="span" sx={styles.Duration}>
                                        {plan.duration}
                                    </Typography>
                                </Box>
                                <List sx={styles.FeatureList}>
                                    {plan.features.map((feature, j) => (
                                        <ListItem key={j} sx={styles.FeatureItem} disablePadding>
                                            <ListItemIcon sx={{ minWidth: "30px", color: "primary.main" }}>
                                                <CheckCircleIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={feature} primaryTypographyProps={{ align: "left" }} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Button 
                                    variant={plan.recommended ? "contained" : "outlined"} 
                                    color="primary" 
                                    sx={styles.Button}
                                >
                                    Choose Plan
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default Pricing;
