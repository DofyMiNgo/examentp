import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  username: string='';



  constructor(private route:ActivatedRoute,private router:Router,private location:Location){}
  
  deflog(){
    this.router.navigate(['/login']);
  }
  return(){
    this.location.back();
  }
}


