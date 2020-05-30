import { Component, OnInit } from '@angular/core';
import { ProjectDetailService } from './../../services/project-detail.service';
import { ProjectDetail } from './../../interface/project-detail';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectDetails: ProjectDetail[];
  constructor(private projectService: ProjectDetailService) { }
  ngOnInit() {
    this.projectService.getProjects().subscribe(
      (res: any) => {
        this.projectDetails = res;
        console.log(this.projectDetails);
      },
      err => {
        console.log(err);
      }
    );
  }

}
