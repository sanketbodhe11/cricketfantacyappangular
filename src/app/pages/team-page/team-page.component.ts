import { Component } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  selectedPlayers: number = 0;

  addPlayerToContest(button: any): void {
    if (this.selectedPlayers === 11) {
      return;
    }

    this.selectedPlayers++;
    button.style.display = 'none';
    if (this.selectedPlayers === 11) {
      const playerButtons = document.querySelectorAll('.add-contest-btn');
      playerButtons.forEach((button: any) => {
        if (button.style.display !== 'none') {
          button.classList.add('unclickable');
        }
      });
    }
  }
  // players = [
  //   { name: 'Player 1', position: 'Batsman' },
  //   { name: 'Player 2', position: 'Bowler' },
  //   // Add more players here
  // ];
  
  // constructor(private teamService: TeamService) { }
  
  // addPlayerToContest(player: any) {
  //   this.teamService.addPlayer(player);
  // }
  
}
