import React from "react";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import blogsImage from "../images/blogs_image.svg";
import PageIntro from "./PageIntro";
import PlaylistCard from "./PlaylistCard";
import { useLocation } from "react-router-dom";

function DisplayPlaylist(props) {
  const location = useLocation(); // Get current URL information.
  const searchParams = new URLSearchParams(location.search); //Extract query parameters from URL.
  const playlistId = searchParams.get("playlistId"); // Get the value of 'playlistId' parameter.
  return (
    <>
      <PageIntro
        image={blogsImage}
        name="blogsPage"
        heading="Blogs"
        description="Writing blogs is one of the things that I do. Whenever I learn
            something new, be it technical or generic, I try to write a blog
            on it. You can explore this space to read about the various blogs
            that I have written."
      />

      <section className="section">
        <div className="col p-3 d-flex flex-column position-static card_column">
          <div className="row mx-0 my-0">
            <div className="youtube_playlist">
              <YouTubePlaylist
                apiKey="AIzaSyC-g41EmDYR283UZ1GOY6JQzlnr406dGX4" //"YOUR_YOUTUBE_API_KEY"
                playlistId={playlistId} //"YOUR_YOUTUBE_PLAYLIST_ID"
                uniqueName="react playlist" //"THIS_PLAYLIST_INSTANCE_NAME"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DisplayPlaylist;
