import React, { useState, useEffect } from "react";
// import "./YoutubeVideos.css";


function YoutubeVideos() {
  const [videoInfo, setVideoInfo] = useState([]);
  //   TO GET CHANNEL ID =https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=Apple&key=YOUR_API_KEY


  useEffect(() => {
    const API_KEY = "AIzaSyCl9F2OcmfZchaGvAJAwOARE98W5R_bPdc";
    const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw"; // Apple official
    const MAX_RESULTS = 8;

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&maxResults=${MAX_RESULTS}&type=video&key=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setVideoInfo(data.items); // API already returns newest first
        }
      })
      .catch((err) => console.log("Error fetching videos:", err));
  }, []);
  console.log(videoInfo);
  return (
    <div className="allVideoWrapper">
      <div className="container">
        <h3 className="text-center mb-4">Latest Apple Videos</h3>
        <div className="row">
          {videoInfo.map((video) => {
            const id = video.id.videoId;
            const thumb = video.snippet.thumbnails.high.url;

            return (
              <div className="col-12 col-lg-6 mb-4" key={id}>
                <div className="card h-100 shadow-sm">
                  <a
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={thumb}
                      className="card-img-top"
                      alt={video.snippet.title}
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href={`https://www.youtube.com/watch?v=${id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        {video.snippet.title}
                      </a>
                    </h5>
                    <p className="card-text text-truncate">
                      {video.snippet.description}
                    </p>
                    <small className="text-muted">
                      {video.snippet.publishedAt}
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
