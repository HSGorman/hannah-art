import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Faq } from "../Faq";
import { Link } from 'react-router-dom';
import '../../../styles/image.scss';
import { flexbox } from "@mui/system";
import { ContactMeLarge } from "./ContactMeLarge";
import { ContactMeSmall } from "./ContactMeSmall";

export interface ContactMeProps { }

export const ContactMe: React.VFC<ContactMeProps> = () => {
	const sizeOptions = ['A5 Canvas', 'A4 Canvas', 'A3 Canvas', 'A2 Canvas'];
	const canvasOptions = ['Canvas board', 'Stretched Canvas'];

	return (
		<Grid container>
			<Grid item xs={11}>
				<Typography variant="h3">
					Contact Me!
				</Typography>
			</Grid>
			<Grid item xs={12} sx={{ display: { xs: 'none', md: 'flex' } }}>
				<ContactMeLarge sizeOptions={sizeOptions} canvasOptions={canvasOptions} />
			</Grid>
			<Grid item xs={12} sx={{ display: { xs: 'flex', md: 'none' } }}>
				<ContactMeSmall sizeOptions={sizeOptions} canvasOptions={canvasOptions} />
			</Grid>
		</Grid>
	);
};
