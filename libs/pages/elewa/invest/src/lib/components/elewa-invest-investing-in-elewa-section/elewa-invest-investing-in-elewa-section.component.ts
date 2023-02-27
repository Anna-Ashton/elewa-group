import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-investing-in-elewa-section',
  templateUrl: './elewa-invest-investing-in-elewa-section.component.html',
  styleUrls: ['./elewa-invest-investing-in-elewa-section.component.scss'],
})
export class ElewaInvestInvestingInElewaSectionComponent {
  @Input() imageURL:string = 'https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
}
