import { Button } from "@mui/material";

function PetButton({ onPetClick }) {
    return (
        <Button sx={{margin: '1em auto', maxWidth: '20em'}} variant="contained" color="secondary" onClick={onPetClick}>
            PET
        </Button>
    )
}

export default PetButton;