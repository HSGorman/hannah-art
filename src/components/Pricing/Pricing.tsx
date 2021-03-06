import { Paper, Stack, Table, TableRow, TableCell, Typography, TableContainer, TableBody } from "@mui/material";

export interface PricingProps { }

export const Pricing: React.VFC<PricingProps> = () => {

	const prices: [string, string][] = [
		["A5", "£30"],
		["A4", "£70"],
		["A3", "£150"],
		["A2", "£250"],
	];

	return (
		<>
			<Paper>
				<Typography variant="h3" sx={{ m: 1 }}>
					Pricing
				</Typography>
				<TableContainer component={Paper}>
					<Table>
						<TableBody>
							{prices.map((i) => (
								<TableRow>
									<TableCell>
										<Typography variant="h4" textAlign="center">
											{i[0]}
										</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h4" textAlign="center">
											{i[1]}
										</Typography>
									</TableCell>
								</TableRow>
							))
							}
						</TableBody>
					</Table>
				</TableContainer>
				<Stack direction="row" spacing={0}>
					<Typography variant="subtitle1" sx={{ m: 3, justify: "center" }}>
						All prices are estimates and will depend on what is being painted.
					</Typography>
					<Typography variant="subtitle1" sx={{ m: 3, justify: "center" }}>
						If you have any questions about pricing, please contact me by the using the contact form.
					</Typography>
				</Stack>

			</Paper>
		</>
	);
};
