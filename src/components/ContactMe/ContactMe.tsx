import { Grid, MenuItem, TextField, Typography } from "@mui/material";

export interface ContactMeProps { }

export const ContactMe: React.VFC<ContactMeProps> = () => {
	const options = ['A5 Canvas', 'A4 Canvas', 'A3 Canvas', 'A2 Canvas', 'Canvas board', 'Stretched Canvas'];

	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant="h2">
					Contact Me!
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<TextField
					label="Name"
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					label="EMail"
				/>
			</Grid>
			<Grid item xs={12} sx={{m: 3}}>
				<TextField
					select
					label="Select"
					value={'A5 Canvas'}
				>
					{options.map((option) => (
						<MenuItem
							key={option}
							value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</Grid>
		</Grid>
	);
};
