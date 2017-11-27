import { Component } from '@angular/core';

@Component({
  selector: 'my-form',
  template: `    
  <div class="container" style="margin-top: 25px">
    <div class="row">
      <div class="col-md-3">
        <input class="form-control" [(ngModel)]="artist.name" placeholder="Nouvel artiste">
      </div>
      <div class="col-md-9">
        {{artist.name}}
      </div>
    </div>
  </div>
  `,
})
export class FormComponent {
  artist: Artist = {id: 1, name: ''};
}

export class Artist {
  id: number;
  name: string;
}
