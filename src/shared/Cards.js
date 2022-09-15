import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";

function Cards({
  subheading: sbheading,
  heading,
  description,
  functionalities,
  buttonName,
  toggleComponentFromParent,
}) {
  const [counter, setCounter] = useState(false);

  useEffect(() => {
    return () => {
      // Logic here for unmounting phase for functional component
      console.log("Unmounting phase of Functional Component");
    };
  }, []);
  const handleToggle = () => {
    toggleComponentFromParent(counter);
    setCounter(!counter);
  };
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {sbheading}
        </Typography>
        <Typography variant="h5" component="div">
          {heading}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">{functionalities}</Typography>
      </CardContent>
      <CardActions>
        {buttonName ? (
          <Button size="small" onClick={handleToggle}>
            {buttonName}
          </Button>
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  );
}

Cards.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  functionalities: PropTypes.string.isRequired,
  buttonName: PropTypes.string,
};

export default Cards;
