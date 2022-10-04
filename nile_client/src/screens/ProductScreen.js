import React from "react";
import { useParams } from "react-router-dom";

export default function ProductScreen() {
   const {slug} = useParams();
   console.log(slug);
   console.log({slug});

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
