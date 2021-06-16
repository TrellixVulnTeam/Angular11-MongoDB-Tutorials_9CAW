import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void { this.retrieveTutorials(); }

  // Use TutorialService's getAll function to pull all Tutorials and display them
  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Refresh the list of Tutorials to show changes made to the list
  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  // Use TutorialService's deleteAll function to delete all Tutorials
  removeAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      }
    );
  }

  // Use TutorialService's findByTitle function to find a specific Tutorial
  searchTitle(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    
    this.tutorialService.findByTitle(this.title).subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
      },
      error => { 
        console.log(error);
      }
    );
  }

}
