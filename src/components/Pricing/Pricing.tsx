import { Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material"

export interface PricingProps { }

export const Pricing: React.VFC<PricingProps> = () => {

	return (
		<>
			<Typography variant="h3">
					Pricing
				</Typography>
			<Paper>
				<Stack spacing={1} alignItems="center">
					<Stack direction="row" spacing={1}>
						<b>A5</b>
						<p>£30</p>
					</Stack>
					<Stack direction="row" spacing={1}>
						<b>A4</b>
						<p>£70</p>
					</Stack>
					<Stack direction="row" spacing={1}>
						<b>A3</b>
						<p>£150</p>
					</Stack>
					<Stack direction="row" spacing={1}>
						<b>A2</b>
						<p>£250</p>
					</Stack>
					<Stack direction="row" spacing={1}>
						<p>If you have any questions about pricing please contact me by the using the contact form.</p>
					</Stack>
				</Stack>
			</Paper>
		</>
	);
};
