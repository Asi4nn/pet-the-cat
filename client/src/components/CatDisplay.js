import { Box, ButtonBase } from "@mui/material";

function CatDisplay({ imgSrc, onImgClick }) {
  return (
    <Box 
      margin='1em auto'
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <ButtonBase onClick={onImgClick}>
        <img src={imgSrc} alt="cat" object-fit='cover' width='100%'></img>
      </ButtonBase>
    </Box>
  );
}

export default CatDisplay;