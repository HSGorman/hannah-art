import { Label } from "@mui/icons-material";
import { Grid, List, ListItemText, Paper, TextField } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FaqProps { }

export const Faq: React.VFC<FaqProps> = () => {

	return (
		<>
			<Typography variant="h3" sx={{m:2}}>
					Frequently Asked Questions
				</Typography>
			<Paper>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
					>
						<Typography variant="h6">What makes a good reference photo ?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							The most important thing is lighting.
							Darks and lights must be present.
							Try to pick a photo with an obvious light source.
							Choose clear, well focused photos.
							Choose an interesting photo and pay attention to the angle of the subject matter.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
					>
						<Typography variant="h6">How long does it take ?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							It depends on the size and the painting, but will be a minimum of two weeks.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
					>
						<Typography variant="h6">Shipping ?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							It is normally shipped by Royal Mail. Postage depends on the size and starts at £2.50.
							Within the UK, it takes around 3 days.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
					>
						<Typography variant="h6">What paint is used ?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
						Acrylic.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Paper >
		</>
	);
};
