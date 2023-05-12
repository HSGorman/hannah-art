import { AppBar, Box, Button, Container, Divider, Grid, IconButton, Menu, MenuItem, Slide, ThemeProvider, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useRef } from "react";
import { useNavigate } from "react-router";

export interface TopBarProps { }

export const TopBar: React.VFC<TopBarProps> = () => {
	const navigate = useNavigate();

	// const pages = ['Home', 'Contact', 'Pricing', 'FAQ'];
	const pages = ['Home'];
	const socialmedia: string[] = [];
	const siteName = 'Hannah Gorman Paintings';

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const changePageCloseNav = (page: string) => {
		navigate(page);
		handleCloseNavMenu();
	}

	const changePageCloseNavMenu = (page: string) => {
		navigate(page);
		handleCloseNavMenu();
	}

	const containerRef = useRef(null);

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={() => changePageCloseNavMenu(page)}
								>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
							{socialmedia.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box sx={{ mx: 11, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

						{pages.map((page) => (
							<Button
								size="large"
								key={page}
								onClick={() => { changePageCloseNav(page) }}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					<h2 className="fancy">{siteName}</h2>

					<Grid sx={{ m: 2 }}>
						<img src="../../../Logo1-small.png" />
					</Grid>
					
				</Toolbar>
			</Container>
		</AppBar>
	);
};
function useHistory() {
	throw new Error("Function not implemented.");
}

