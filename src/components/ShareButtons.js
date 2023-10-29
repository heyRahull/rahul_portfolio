import React from "react";
import { InlineShareButtons } from "sharethis-reactjs";

const ShareButtons = () => {
  return (
    <>
      <div class="share-box">
        <h6 class="share-title">
          <strong>Share with your friends</strong>
        </h6>
        <InlineShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            labels: "null", // button labels (cta, counts, null)
            language: "en", // which language to use (see LANGUAGES)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "whatsapp",
              "linkedin",
              "telegram",
              "email",
              "twitter",
            ],
            padding: 10, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            show_total: false,
            size: 40, // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS

            min_count: 10, // (threshold for total share count to be displayed)
            url: "https://www.sharethis.com", // (defaults to current url)
            image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
            description: "custom text", // (defaults to og:description or twitter:description)
            title: "custom title", // (defaults to og:title or twitter:title)
            message: "custom email text", // (only for email sharing)
            subject: "custom email subject", // (only for email sharing)
            username: "custom twitter handle", // (only for twitter sharing)
          }}
        />
      </div>
    </>
  );
};

export default ShareButtons;
