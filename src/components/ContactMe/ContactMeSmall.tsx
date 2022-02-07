import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../../../styles/image.scss';
import { flexbox } from "@mui/system";
import { useState } from "react";

export interface ContactMeSmallProps {
	sizeOptions: string[],
	canvasOptions: string[]
}

export const ContactMeSmall: React.VFC<ContactMeSmallProps> = ({sizeOptions, canvasOptions}: ContactMeSmallProps) => {
	const [sizes] = useState(sizeOptions);
	const [canvasTypes] = useState(canvasOptions);
	
	return (
		<Grid container>
			<Grid item xs={3} sx={{ mx: 11, m: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<img src='./small-Car.jpeg' className="rotate-scale-up" />
			</Grid>
			<Grid container >
				<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }}>
					<TextField fullWidth label="Name" />
				</Grid>
				<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }}>
					<TextField fullWidth label="EMail"
					/>
				</Grid>
				<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }}>
					<TextField fullWidth
						select
						label="Canvas Type"
						value={'Canvas Board'}
					>
						{canvasTypes.map((option) => (
							<MenuItem
								key={option}
								value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }}>
					<TextField fullWidth
						select
						label="Canvas Size"
						value={'A5'}
					>
						{sizes.map((option) => (
							<MenuItem
								key={option}
								value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Typography sx={{ ml: 2, mr: 2 }}>I will paint most things, however, I need a good reference photo to create a good painting.</Typography>
				<Grid item xs={12} sx={{ m: 2 }}>
					<Link to="/Faq">See what makes a good reference photograph.</Link>
				</Grid>
			</Grid>

			<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }}>
				<TextField fullWidth
					label="Additional information"
				/>
			</Grid>
			<Grid item xs={12} sx={{ ml: 3, mr: 3, mt: 2, mb: 1 }} >
				<Button variant="contained" fullWidth >Send</Button>
			</Grid>
		</Grid>
	);
};
