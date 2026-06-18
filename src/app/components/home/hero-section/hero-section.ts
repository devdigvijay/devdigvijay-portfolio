import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgOptimizedImage} from '@angular/common';

interface SocialIcon {
  img: string;
  href: string;
  icon: string;
}
@Component({
  selector: 'ng-hero-section',
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly Name :Signal<string> = signal<string>("Digvijay Patil")
  readonly Designation :Signal<string> = signal<string>("Software Engineer | DevOps Engineer")
  readonly Location :Signal<string> = signal<string>("Pune, Maharashtra")
  readonly socialIcons: Signal<SocialIcon[]> = signal([
    {
      img: '/images/icon/whatsapp.svg',
      href: 'https://wa.link/iau1ri',
      icon: 'WhatsApp'
    },
    {
      img: '/images/icon/linkedin.svg',
      href: 'https://www.linkedin.com/in/devdigvijay/',
      icon: 'Linkedin'
    },
    {
      img: '/images/icon/instagram.svg',
      href: 'https://www.instagram.com/digvijay_patil_dk',
      icon: 'Instagrame'
    },
    {
      img: '/images/icon/github.svg',
      href: 'https://github.com/devdigvijay',
      icon: 'Github'
    },
    {
      img: '/images/icon/domain.svg',
      href: 'https://buildnx.in',
      icon: 'Domain'
    }
  ]);


}
