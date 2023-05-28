import { AppBar, Button, Toolbar } from '@mui/material';

const navItems = ['About', 'Projects', 'Contact'];

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ justifyContent: 'end' }}>
        {navItems.map((item) => (
          <Button key={item} color='inherit' size='large'>
            {item}
          </Button>
        ))}

        {/* Dark mode toggle */}
        {
          // TODO: Add dark mode toggle
        }
      </Toolbar>
    </AppBar>
  );
};
