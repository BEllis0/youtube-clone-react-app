// import React from 'react';

// // grid elements from the material ui suite; more info at https://material-ui.com
// import { Grid } from '@material-ui/core';

// import { SearchBar, VideoDetail } from './components/';

// import youtube from './api/youtube';
// //import { async } from 'q';

// class App extends React.Component {
    
//     state = {
//         video: [],
//         selectedVideo: null,
//     }


//     // handleSubmit is created to fetch data from youtube api using the searchterm
//     //async is used to ensure that the api is fetching something before the rest of the code runs
    
//     handleSubmit = (searchTerm) => {
//         const response = youtube.get('search', { 
//             params: {
//                 part: 'snippet',
//                 maxResults: 5,
//                 key: 'AIzaSyDB1WsV6h4s5eBt-l6Mz6Kuj2JvQrQiMPE',
//                 q: searchTerm,
//         }
//         });

//         //console the response from the api

//         this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
//     }

//     render() {
//         const { selectedVideo } = this.state;
//         return(
//             <Grid justify="center" container spacing={10}>
//                 <Grid item xs={12}>
//                     <Grid container spacing={10}>
//                         <Grid item xs={12}>
//                             <SearchBar onFormSubmit={this.handleSubmit} />
//                         </Grid>
//                         <Grid item xs={8}>
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </Grid>
//                         <Grid item xs={4}>

//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         )
//     }
// }

// export default App;

import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyDB1WsV6h4s5eBt-l6Mz6Kuj2JvQrQiMPE',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}
