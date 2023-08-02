import React from "react";
import YoutubeImage from "../images/youtubeTutorial.png";
import PageIntro from "./PageIntro";
import PlaylistCard from "./PlaylistCard";

function Youtube() {
  return (
    <>
      <PageIntro
        image={YoutubeImage}
        name="blogsPage"
        heading="YouTube Tutorials"
        description="Welcome to the YouTube Tutorials page! As a passionate educator and coding enthusiast, I love to share my knowledge with the world. In my free time, I enjoy creating engaging and informative coding tutorials that cater to learners of all levels. "
      />

      <section className="section">
        <div className="col p-3 d-flex flex-column position-static card_column">
          <div className="row mx-0 my-0">
            <PlaylistCard
              playlistId={"PLCVRCLNdg3_v54_rI8kbRrBs9kNymr8uX"}
              playlistTitle="CSS"
              image="https://i.ytimg.com/vi/RieFzvYfaGM/maxresdefault.jpg"
            />
            <PlaylistCard
              playlistId={"PLCVRCLNdg3_vYPLHhfxiVAlLvKKBxAfdj"}
              playlistTitle="React JS"
              image="https://i.ytimg.com/vi/n3a2VIju98k/maxresdefault.jpg"
            />
            <PlaylistCard
              playlistId={"PLCVRCLNdg3_u-LTpRllKWJIFyyjWGvohC"}
              playlistTitle="React JS in Hindi"
              image="https://i.ytimg.com/vi/D80n4icoUvk/maxresdefault.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Youtube;
