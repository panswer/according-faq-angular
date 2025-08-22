import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../../atoms/image/image.component';
import { QaItem } from '../../../interfaces/qa-item';
import { NgFor } from '@angular/common';
import { QaItemComponent } from '../../../interfaces/qa-item-component';

@Component({
  selector: 'app-faq',
  imports: [
    ImageComponent,
    NgFor,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
  qaList: QaItemComponent[] = [];

  ngOnInit(): void {
    this.qaList = [{
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      question: "What is Frontend Mentor, and how will it help me?"
    }, {
      answer: "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
      question: "Is Frontend Mentor free?"
    }, {
      answer: "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
      question: "Can I use Frontend Mentor projects in my porfolio?"
    }, {
      answer: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated \"help\" channel! If you haven't joined yet, you can get an invite to our Discord server here.",
      question: "How can I get help if I'm stuck on a challenge?"
    }].map((item, i) => ({ ...item, id: String(i + 1), isShow: true }));
  }
}
