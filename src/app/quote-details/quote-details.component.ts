import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote ;
  @Output() isComplete = new EventEmitter<boolean>();
  
}
  likeButtonClick(index) {
    this.numberOfLikes++;
  }

  }
  dislikeButtonClick(index) {
    this.numberOfDislikes++;
  }

  goalComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }
}
