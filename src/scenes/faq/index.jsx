import { Box ,useTheme ,Typography} from "@mui/material";
import Header from "../../component/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Question Page"/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nisi nesciunt in recusandae. Nostrum maiores totam, aliquam,
                        vel animi, excepturi libero quas suscipit minima maxime rerum 
                        doloribus optio iste obcaecati repudiandae?
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your important question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nisi nesciunt in recusandae. Nostrum maiores totam, aliquam,
                        vel animi, excepturi libero quas suscipit minima maxime rerum 
                        doloribus optio iste obcaecati repudiandae?
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Fav important question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nisi nesciunt in recusandae. Nostrum maiores totam, aliquam,
                        vel animi, excepturi libero quas suscipit minima maxime rerum 
                        doloribus optio iste obcaecati repudiandae?
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Random important question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nisi nesciunt in recusandae. Nostrum maiores totam, aliquam,
                        vel animi, excepturi libero quas suscipit minima maxime rerum 
                        doloribus optio iste obcaecati repudiandae?
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    The final  important question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nisi nesciunt in recusandae. Nostrum maiores totam, aliquam,
                        vel animi, excepturi libero quas suscipit minima maxime rerum 
                        doloribus optio iste obcaecati repudiandae?
                    </Typography>
                </AccordionDetails>

            </Accordion>
        </Box>
    )

}
export default FAQ;