import React from "react";
import { Link } from "react-router-dom";

function PlaylistCard(props) {
  return (
    <>
      <div className="col-md-4 card_individual">
        <div className="card mb-4 shadow-sm">
          <img
            src="https://i.ytimg.com/vi/B5zka8akZBU/maxresdefault.jpg"
            width="100%"
            height="225"
            alt="css playlist"
          />
          <div className="card-body card-color">
            <p className="card-text excerpt">CSS Playlist</p>
            <div className="d-flex justify-content-between align-items-center">
              <Link
                className="card-btn card-primary"
                to={`/displayPlaylist?playlistId=${
                  props.playlistId
                }&playlistTitle=${encodeURIComponent(props.playlistTitle)}`}
                rel="noopener noreferrer"
              >
                View Playlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaylistCard;
