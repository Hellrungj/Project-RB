import React from "react";
import { Carousel } from "react-bootstrap";
import Banner from "./Banner";
import ThumbnailList from "./ThumbnailList";

export default function Home() {
  return (
    <main>
      <Banner />
      <ThumbnailList />
    </main>
  );
}
