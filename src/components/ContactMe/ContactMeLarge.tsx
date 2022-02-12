import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../../../styles/image.scss';
import '../../../styles/shadow-drop.scss';
import { useState } from "react";
import { sendEmail } from "../../SendMail";

export interface ContactMeLargeProps {
	sizeOptions: string[],
	canvasOptions: string[]
 }

export const ContactMeLarge: React.VFC<ContactMeLargeProps> = ({sizeOptions, canvasOptions}: ContactMeLargeProps) => {

	const [sizes] = useState(sizeOptions);
	const [canvasTypes] = useState(canvasOptions);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [canvasType, setCanvasType] = useState("");
	const [canvasSize, setCanvasSize] = useState("");
	const [additional, setAdditional] = useState("");

	return (
		<Grid container>
			<Grid item xs={3} sx={{ mx: 11, m: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<img src='./PaintBrush.jpeg' className="shadow-drop" />
			</Grid>
			<Grid item xs={4} sx={{ m: 11}}>
				<Grid container >
					<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }}>
						<TextField
							fullWidth
							label="Name"
							value={name}
							onChange={(e) => {setName(e.target.value)}}/>
					</Grid>
					<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }}>
						<TextField 
							fullWidth
							label="EMail"
							autoComplete="email"
							value={email}
							onChange={(e) => {setEmail(e.target.value)}}/>
					</Grid>
					<Grid item xs={12} sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }}>
						<TextField fullWidth
							select
							label="Canvas Type"
							value={canvasType}
							onChange={(e) => {setCanvasType(e.target.value)}}
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
						value={canvasSize}
						onChange={(e) => {setCanvasSize(e.target.value)}}
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
							value={additional}
							onChange={(e) => {setAdditional(e.target.value)}}
						/>
					</Grid>
					<Grid item xs={12} sx={{ ml: 3, mr: 3 }} >
						<Button
							variant="contained"
							fullWidth
							onClick={(e) => {
								sendEmail(name, email, canvasType, canvasSize, additional);
							}}>Send</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={3} sx={{ mx: 11, m: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<img src='./PaintBrush.jpeg' className="shadow-drop" />
			</Grid>
		</Grid>
	);
};
