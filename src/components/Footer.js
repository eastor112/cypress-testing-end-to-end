import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Demo() {

    const style = {
        background: "#F50057",
        marginTop: "20px"
    }

    return (
        <AppBar position="static" style={style}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                Created by @khriztianmoreno | Powered by edamam
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
