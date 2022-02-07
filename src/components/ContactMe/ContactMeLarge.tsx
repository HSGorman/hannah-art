import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../../../styles/image.scss';
import '../../../styles/shadow-drop.scss';
import { flexbox } from "@mui/system";
import { useState } from "react";

export interface ContactMeLargeProps {
	sizeOptions: string[],
	canvasOptions: string[]
 }

export const ContactMeLarge: React.VFC<ContactMeLargeProps> = ({sizeOptions, canvasOptions}: ContactMeLargeProps) => {

	const [sizes] = useState(sizeOptions);
	const [canvasTypes] = useState(canvasOptions);

	return (
		<Grid container>
			<Grid item xs={3} sx={{ mx: 11, m: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<img src='./small-Car.jpeg' className="shadow-drop" />
			</Grid>
			<Grid item xs={4}>
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
						<Typography sx={{ m: 3 }}>I will paint most things, however, I need a good reference photo to create a good painting.</Typography>
						<Link to="/Faq">See what makes a good reference photograph.</Link>
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

					<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 2 }}>
						<TextField fullWidth
							label="Additional information"
						/>
					</Grid>
					<Grid item xs={12} sx={{ ml: 3, mr: 3 }} >
						<Button variant="contained" fullWidth >Send</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={3} sx={{ mx: 11, m: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<img src='./small-Car2.jpeg' className="shadow-drop" />
			</Grid>
		</Grid>
	);
};
