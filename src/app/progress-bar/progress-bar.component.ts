import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit{

public interval!:any;
public progressWidth: number;
public isIncrementing!: boolean;

  constructor(){
    this.progressWidth= 0;
  }

  ngOnInit(){
    this.interval = setInterval(() => {
      if (this.progressWidth < window.innerWidth) {
        this.progressWidth += 10;
        this.isIncrementing = true;
      } else {
        clearInterval(this.interval);
        this.isIncrementing = false;
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
