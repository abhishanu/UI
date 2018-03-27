import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audio-video',
  templateUrl: './audio-video.component.html'
})
export class AudioVideoComponent implements OnInit {
videoIteams:any;
  constructor() { }

  ngOnInit() {
    this.videoIteams = [
      {
        "poster":"../assets/videos/video-1.jpg",
        "videosrc":"../assets/videos/video-1.mp4"
      },
      {
        "poster":"../assets/videos/video-2.jpg",
        "videosrc":"../assets/videos/video-2.mp4"
      },{
        "poster":"../assets/videos/video-3.jpg",
        "videosrc":"../assets/videos/video-3.mp4"
      },{
        "poster":"../assets/videos/video-4.jpg",
        "videosrc":"../assets/videos/video-4.mp4"
      },{
        "poster":"../assets/videos/video-5.jpg",
        "videosrc":"../assets/videos/video-1.mp4"
      },{
        "poster":"../assets/videos/video-6.jpg",
        "videosrc":"../assets/videos/video-2.mp4"
      },{
        "poster":"../assets/videos/video-7.jpg",
        "videosrc":"../assets/videos/video-3.mp4"
      },{
        "poster":"../assets/videos/video-8.jpg",
        "videosrc":"../assets/videos/video-4.mp4"
      }
    ]
  }

}
