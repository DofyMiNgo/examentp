import { Component, ViewChildren, QueryList, ElementRef  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent {
  username:string='';
  showplus: boolean = false;
  grids: any[] = [];
  
  constructor(private route:ActivatedRoute,private router:Router){}
  onLogout(): void{
    this.router.navigate(['/logout']);
  }
  selectedColor: string = '#000000';

  setSelectedColor(color: string) {
    this.selectedColor = color;
  }
  @ViewChildren('gridElement') gridElements!: QueryList<ElementRef>;
  plus(): void {
    this.showplus = true;
    this.grids.push({}); // Add a new grid reference to the array

    // Wait for the new grid to be rendered
    setTimeout(() => {
      const elements = this.gridElements.toArray();
      const lastElement = elements[elements.length - 1];
      lastElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
  
}