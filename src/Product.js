import React from "react";
import { useParams } from "react-router-dom";

export default function About() {
  let { id } = useParams();
  return <h1>Requested product ID: {id}</h1>;
}
