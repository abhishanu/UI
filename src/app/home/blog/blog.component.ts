import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
    private blogList: any = [];
    constructor(){

    }

    ngOnInit(){
      this.blogList = [
        {
          "title": "Jagannath Puri Temple facts",
          "description": "Jagannath Temple, Puri, Odisha is a living example of our immense faith in the...",
          "image": "../assets/blog/1.jpg",
          "url": "http://google.co.in",
          "postedBy": "Team Blogger",
          "postedOn": "Mar 19, 2018",
          "tags": [
            {
              "tag": "Temple",
              "url": "#"
            },
            {
              "tag": "Pooja",
              "url": "#"
            },
            {
              "tag": "Blog",
              "url": "#"
            },
            {
              "tag": "Astro",
              "url": "#"
            }
            ]
        },
        {
          "title": "Career Astrology by Date of Birth",
          "description": "The success and happiness of every individual depends on his career...",
          "image": "../assets/blog/2.jpg",
          "url": "http://google.co.in",
          "postedBy": "Team Blogger",
          "postedOn": "Mar 19, 2018",
          "tags": [
            {
              "tag": "Temple",
              "url": "#"
            },
            {
              "tag": "Pooja",
              "url": "#"
            },
            {
              "tag": "Blog",
              "url": "#"
            },
            {
              "tag": "Astro",
              "url": "#"
            }
            ]
        },
        {
          "title": "17th March 2018 Daily Horoscope",
          "description": "Plan your day ahead with daily zodiac horoscope predictions ...",
          "image": "../assets/blog/4.jpg",
          "url": "http://google.co.in",
          "postedBy": "Team Blogger",
          "postedOn": "Mar 19, 2018",
          "tags": [
            {
              "tag": "Temple",
              "url": "#"
            },
            {
              "tag": "Pooja",
              "url": "#"
            },
            {
              "tag": "Blog",
              "url": "#"
            },
            {
              "tag": "Astro",
              "url": "#"
            }
            ]
        },
        {
          "title": "9 must know rituals of Navratri",
          "description": "The Chaitra Navratri commences on first day (pratipada) of brighter half o ...",
          "image": "../assets/blog/3.jpg",
          "postedBy": "Team Blogger",
          "postedOn": "Mar 19, 2018",
          "tags": [
            {
              "tag": "Temple",
              "url": "#"
            },
            {
              "tag": "Pooja",
              "url": "#"
            },
            {
              "tag": "Blog",
              "url": "#"
            },
            {
              "tag": "Astro",
              "url": "#"
            }
            ]
        }
      ];
    }
}