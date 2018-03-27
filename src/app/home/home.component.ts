import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
private bannerCarouselItems: any;
private shloklItems: any;
  private popularSearchesIteams:any;
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this._commonService.updateBreadCrumb([]);
    this.shloklItems = [
      {"name":"नैनं छिद्रन्ति शस्त्राणि नैनं दहति पावक: । न चैनं क्लेदयन्त्यापो न शोषयति मारुत ॥","source":"श्रीमद्भगवद्गीता (द्वितीय अध्याय, श्लोक 23)"},
      {'name':"हतो वा प्राप्यसि स्वर्गम्, जित्वा वा भोक्ष्यसे महिम्। तस्मात् उत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चय:॥","source":"श्रीमद्भगवद्गीता (द्वितीय अध्याय, श्लोक 37)"},
      {'name':"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत:। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥","source":"श्रीमद्भगवद्गीता (चतुर्थ अध्याय, श्लोक 7)"},
      {'name':"परित्राणाय साधूनाम् विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे-युगे॥","source":"श्रीमद्भगवद्गीता (चतुर्थ अध्याय, श्लोक 8)"},
      {'name':"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥","source":"श्रीमद्भगवद्गीता (द्वितीय अध्याय, श्लोक 47)"},
      {'name':"ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्संजायते कामः कामात्क्रोधोऽभिजायते॥","source":"श्रीमद्भगवद्गीता (द्वितीय अध्याय, श्लोक 62)"},
      {'name':"क्रोधाद्भवति संमोह: संमोहात्स्मृतिविभ्रम:। स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥","source":"श्रीमद्भगवद्गीता (द्वितीय अध्याय, श्लोक 63)"},
      {'name':"यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जन:। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥","source":"श्रीमद्भगवद्गीता (तृतीय अध्याय, श्लोक 21)"},
      {'name':"श्रद्धावान्ल्लभते ज्ञानं तत्पर: संयतेन्द्रिय:। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥","source":"श्रीमद्भगवद्गीता (चतुर्थ अध्याय, श्लोक 39)"},
      {'name':"सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुच:॥","source":"श्रीमद्भगवद्गीता (अठारहवां अध्याय, श्लोक 66)"}
    ]
    this.bannerCarouselItems = [
      {
        "src": "../assets/banner/1.jpg",
        "title": "Akshardham Temple",
        "description": "Akshardham or Swaminarayan Akshardham complex is a Hindu mandir."
      },

      {
        "src": "../assets/banner/5.jpg",
        "title": "Golden Temple",
        "description": "this is a test description for the title"
      },
      {
        "src": "../assets/banner/2.jpg",
        "title": "Haridwar Har Ki Pauri.",
        "description": "Haridwar, visit Mansa Devi Temple & Ganga aarti at Har Ki Pauri"
      },
      {
        "src": "../assets/banner/3.jpg",
        "title": "ARULMIGU MEENAKSHI SUNDARESHWARAR THIRUKKOIL",
        "description": "this is a test description for the title"
      },
      {
        "src": "../assets/banner/4.jpg",
        "title": "Badrinath Temple",
        "description": "this is a test description for the title"
      },

    ];
    this.popularSearchesIteams = [
      {
        "heading":"Temple In Manali 1",
        "type":"Tours"
      },
      {
        "heading":"Gau Sewa 2",
        "type":"Event"
      },
      {
        "heading":"Religious Tour in Kerla 3",
        "type":"Tours"
      },
      {
        "heading":"Live VashnoDevi Aarti 4",
        "type":"Video Streaming"
      },
      {
        "heading":"Temple In Manali 5",
        "type":"Tours"
      },
      {
        "heading":"Gau Sewa 6",
        "type":"Event"
      },
      {
        "heading":"Religious Tour in Kerla 7",
        "type":"Tours"
      },
      {
        "heading":"Live VashnoDevi Aarti 8",
        "type":"Video Streaming"
      },
       {
        "heading":"Temple In Manali 9",
        "type":"Tours"
      },
      {
        "heading":"Gau Sewa 10",
        "type":"Event"
      },
      {
        "heading":"Religious Tour in Kerla 11",
        "type":"Tours"
      },
      {
        "heading":"Live VashnoDevi Aarti 12",
        "type":"Video Streaming"
      },
      {
        "heading":"Temple In Manali 13",
        "type":"Tours"
      },
      {
        "heading":"Gau Sewa 14",
        "type":"Event"
      },
      {
        "heading":"Religious Tour in Kerla 15",
        "type":"Tours"
      },
      {
        "heading":"Live VashnoDevi Aarti 16",
        "type":"Video Streaming"
      },

    ];
  }

}
