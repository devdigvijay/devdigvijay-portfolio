import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Badge } from '../../ui/badge/badge';

interface ExperienceType {
  icon: string;
  role: string;
  organization: string;
  startYear: string;
  endYear: string;
  location: string;
  bulletPoints: string[];
  technology: string[];
}

@Component({
  selector: 'ng-experience',
  imports: [CommonModule,Badge],
  template: `
          <section>
            <div class="container">
                <div class="border-x border-primary/10">
                    <div class="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div class="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p class="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Experience
                            </p>
                        </div>
                    </div>
                    <div class="border-t border-primary/10">
                        <div class="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            @for (experience of experienceData(); track $index) {
                            <div class="flex flex-col gap-5 border-dashed border-b border-primary/10 pt-8 sm:pt-10 pb-8 sm:pb-10"
                                [class.first:pt-0]="$first" [class.last:pb-0]="$last" [class.border-b-0]="$last">
                                <img [src]="experience.icon" alt="icon" width="32" height="19">
                                <div class="flex flex-wrap gap-2 items- justify-between">
                                    <h5> {{ experience.organization }}</h5>-<p class="text-primary">{{ experience.role }}</p>
                                    <div class="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                                        <div class="w-4 h-2 rounded-sm" [ngClass]="{
                              'bg-primary': experience.endYear === 'Present',
                              'bg-primary/10': experience.endYear !== 'Present'}">
                                        </div>
                                        <p class="text-sm xs:text-base text-primary">
                                            {{ experience.startYear }}
                                            –
                                            {{ experience.endYear }}
                                            ·
                                            {{ experience.location }}
                                        </p>
                                    </div>
                                </div>
                                <ul>
                                    @for (point of experience.bulletPoints; track $index) {
                                    <li class="flex items-start gap-2 text-base font-normal text-secondary">
                                        <span class="w-2.5 h-2.5 text-secondary">•</span>
                                        {{ point }}
                                    </li>
                                    }
                                </ul>
                                <div class="flex flex-wrap gap-2 sm:gap-3">
                                    @for (value of experience.technology; track $index) {
                                      <ng-badge variant="outline" class="py-1.5 px-3 rounded-lg">
                                          <p class="text-xs sm:text-sm font-medium text-primary"> {{ value }} </p>
                                      </ng-badge>
                                      }
                                </div>
                              </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Experience {

  readonly experienceData: Signal<ExperienceType[]> = signal([
    {
      icon: '/images/icon/infosys.png',
      organization:"Infosys Limited",
      role: 'Associate Consultant',
      startYear: '2024',
      endYear: 'Present',
      location: 'Pune, Maharashtra, India',
      technology:["AWS","Jenkins","Github","Linux","EKS","Argo CD","IAM","RAG","Deep-Agents","LLM"],
      bulletPoints: [
        'Collaborated with cross-functional teams to streamline development, deployment, and monitoring processes.',
        'Configured custom AWS AMIs with pre-installed application binaries and integrated them with Launch Templates.',
        'Managed and deployed containerized applications using Docker, Kubernetes, AWS EKS, and Istio.',
        'Designed and enforced least-privilege IAM policies to secure AWS resources and access management.',
        'Configured Cloud CDN and Load Balancers to optimize application performance and global traffic distribution.',
        'Managed Kubernetes deployments using Helm and Argo CD, improving deployment reliability and rollback efficiency.',
        'Developed and deployed RAG-based AI chatbots using LangChain and LLMs for aircraft maintenance document retrieval.',
        'Designed CI/CD pipelines with Ansible to automate application deployment across 200+ Linux servers.',
        'Automated data ingestion, embedding generation, and vector search workflows using Python, LangChain, and OpenAI APIs.',
        'Developed and deployed Python-based LLM services using OpenAI and Hugging Face models for NLP applications.'
      ]
    },
    {
      icon: '/images/icon/tcs.png',
      organization:"Tata Consultancy Services",
      role: 'System Engineer',
      startYear: '2022',
      endYear: '2024',
      location: 'Pune, Maharashtra, India',
      technology:["GCP","Github Action","gRPC","SQS","Pub/Sub","Openshift","Docker","Kubernetes","VPC","Jfrog","Event-driven"],
      bulletPoints: [
        'Mentored junior engineers and conducted code reviews to improve code quality, maintainability, and performance.',
        'Replaced legacy REST APIs with high-performance gRPC services, reducing inter-service latency by 40%.',
        'Developed RAG pipelines for document ingestion, embeddings, vector search, and AI-powered applications.',
        'Managed and integrated GCP services to implement secure, scalable, and reliable DevOps practices.',
        'Configured Linux crontab jobs for scheduled processing, automation, and log management in Go services.',
        'Integrated Helm charts with CI/CD pipelines for automated packaging, versioning, and application releases.',
        'Troubleshot and performed RCA for pod-level and microservice issues in OpenShift-based banking applications.',
        'Configured and maintained Akamai CDN to optimize application performance, content delivery, and security.',
        'Implemented SNS fan-out architecture for scalable event distribution across SQS queues and Lambda functions.',
        'Developed and deployed serverless applications using Google Cloud Functions for event-driven processing.'
      ]
    },
    {
      icon: '/images/icon/dbds.png',
      organization:"DBDS Robotics Pvt",
      role: 'Project Engineer',
      startYear: '2019',
      endYear: '2022',
      location: 'Nashik, Maharashtra, India',
      technology:["IEC 61131-3","GitLab","CI/CD","IIOT","Robotics","PLC","Vision","Automation","Troubleshoting"],
      bulletPoints: [
        'Delivered end-to-end frontend, backend, and IEC 61131-3 solutions across the complete development lifecycle.',
        'Led R&D for vision-based inspection systems by integrating Angular and web servers, increasing throughput by 30%.',
        'Integrated IIoT gateways, HMI devices, and robotic control systems for real-time monitoring and data collection.',
        'Migrated Java microservices to Go, reducing memory consumption by over 80% per service container.',
        'Developed and optimized robotics and PAC programs for pharmaceutical automation and special-purpose machines (SPM).',
        'Programmed and optimized IEC 61131-3 automation solutions from design and development to deployment and maintenance.',
        'Implemented IIoT gateways for remote monitoring and data transfer, improving operational efficiency by 35% and reducing costs by 20%.',
        'Utilized Harness CI/CD to automate application build, deployment, and release processes.',
        'Designed and implemented end-to-end CI/CD pipelines, reducing manual effort and improving delivery efficiency.',
        'Developed and maintained Docker images for microservices, optimizing security, performance, and deployment consistency.'
      ]
    }
  ]);
}

