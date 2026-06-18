import { Component } from '@angular/core';
import { Badge } from '../../ui/badge/badge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-about-me',
  imports: [Badge,CommonModule],
  templateUrl:'./about-me.html',
})
export class AboutMe {
  servicesBedge = ["Software Engineer", "Cloud Engineer", "Web Developer", "AI/ML Developer", "Agentic-Ai Developer", "Golang Developer", "Project Engineer", "Consultant", "Platform Engineer", "Google Cloud Engineer", "AWS Engineer"];
}
