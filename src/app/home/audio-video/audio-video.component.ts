import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audio-video',
  templateUrl: './audio-video.component.html'
})
export class AudioVideoComponent implements OnInit {
videoIteams:any;
audioList:any=[];
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
    ];
    this.audioList = [
      {
        "src":"../assets/audio/poster-1.png",
        "name":"HH Gopal Krishna Goswami Ji Maharaj",
        "audiosrc":"../assets/audio/audio-1.mp3",
        "date":"22/06/2013",
        "title":"GKG CC Antya Lila 06-51 Chida Dahi Festival"
      },
      {
        "src":"../assets/audio/poster-2.jpg",
        "name":"HG Sundar Gopal Das",
        "date":"06/02/2013",
        "audiosrc":"../assets/audio/audio-2.mp3",
        "title":"Human life is not for Sense Gratification"
      },
      {
        "src":"../assets/audio/poster-1.png",
        "name":"HH Gopal Krishna Goswami Ji Maharaj",
        "date":"10/06/2014",
        "audiosrc":"../assets/audio/audio-1.mp3",
        "title":"GKG CC Antya Lila 06-51 More"
      },{
        "src":"../assets/audio/poster-2.jpg",
        "name":"HG Sundar Gopal Das",
        "date":"06/02/2013",
        "audiosrc":"../assets/audio/audio-2.mp3",
        "title":"Human life is not for Sense Gratification"
      },{
        "src":"../assets/audio/poster-1.png",
        "name":"HH Gopal Krishna Goswami Ji Maharaj",
        "audiosrc":"../assets/audio/audio-2.mp3",
        "date":"22/06/2013",
        "title":"GKG CC Antya Lila 06-51 Chida Dahi Festival"
      },{
        "src":"../assets/audio/poster-2.jpg",
        "name":"HH Gopal Krishna Goswami Ji Maharaj",
        "date":"10/06/2014",
        "audiosrc":"../assets/audio/audio-1.mp3",
        "title":"GKG CC Antya Lila 06-51 More"
      }
    ];
  }

}
