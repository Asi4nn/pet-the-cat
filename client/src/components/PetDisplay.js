import { Box } from "@mui/material";

function PetDisplay({ petCount }) {
    return (
        <Box>
            <h3>Total Pets: {petCount}</h3>
        </Box>
    );
}

export default PetDisplay;