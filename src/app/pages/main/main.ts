import { Component } from '@angular/core';
import { HeroSection } from '../../components/home/hero-section/hero-section';
import { Divider } from '../../components/divider/divider';
import { AboutMe } from '../../components/home/about-me/about-me';
import { Education } from '../../components/home/education/education';
import { Work } from '../../components/home/work/work';
import { Experience } from '../../components/home/experience/experience';
import { ProjectWork } from '../../components/home/project-work/project-work';

@Component({
  selector: 'app-main',
  imports: [HeroSection,Divider,AboutMe,Education,Work,Experience,ProjectWork],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
