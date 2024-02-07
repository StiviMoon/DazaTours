import React from "react";
import { Rating, Typography } from "@material-tailwind/react";
 
export default function RatingWithText() {
  const [rated, setRated] = React.useState(4);
 
  return (
    <div className="justify-center pt-4  flex items-center gap-2 font-bold text-azul_o">
      {rated}.7
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium text-azul_o">
        Based on 134 Reviews
      </Typography>
    </div>
  );
}