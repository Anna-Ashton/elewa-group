import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-article-list',
  templateUrl: './elewa-group-article-list.component.html',
  styleUrls: ['./elewa-group-article-list.component.scss'],
})
export class ElewaGroupArticleListComponent {
  @Input() currentIndex: number = 0;

  @Input() items = [
    {
      image: 'https://images.unsplash.com/photo-1617056239820-8ce90ba48193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG91dGRvb3IlMjAlMjBibGFjayUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      timestamp: '',
      title: 'Introducing Conversational Learning',
    
    },
    {
      image: 'https://media.istockphoto.com/id/1324834639/photo/man-signing-the-digital-contract.jpg?b=1&s=170667a&w=0&k=20&c=kZuTM9JgzI0iK4vALqQr-9F4mhBbwY_jHOTg2zlpsKk=',
      timestamp: '',
      title: 'Re-watch the iTalanta Academy launch event',
     
    },
    {
      image: 'https://media.istockphoto.com/id/1347879841/photo/shot-of-a-young-man-using-a-laptop-while-working-in-a-server-room.jpg?b=1&s=170667a&w=0&k=20&c=YkMrXkBzpgYGlCu1WlZn8t9yEWh7ztalNa78aLpn-d4=',
      timestamp: '',
      title: 'Introducing Conversational',
     
    },
  ]

  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
  }

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
