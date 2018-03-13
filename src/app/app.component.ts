import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5 drag and drop';

  dragStart = { value: false, elm: undefined };
  dragEnd = { value: false, elm: undefined };
  dragOver = { value: false, container: undefined };

  logStart(event, elmName): void {
    this.dragEnd.value = false;
    this.dragStart.value = true;
    this.dragStart.elm = elmName;
    console.log(elmName + ' dragging');
    event.dataTransfer.setData('text/plain', 'drop')
    console.log("drag start event")
    console.log(this.dragStart);
  }

  logDrop(event, elmName): void {
    // tracking where element is droppped
    event.preventDefault();
    this.dragEnd.value = true;
    this.dragEnd.elm = elmName;
    console.log(elmName + ' dropped');
    const data = event.dataTransfer.getData("text/plain")
    console.log("drag stop event")
    if (this.dragEnd.value && this.dragOver.value) {
      console.log(this.dragEnd.elm + ' dropped over ' + this.dragOver.container);
      this.name = this.dragEnd.elm + ' dropped over ' + this.dragOver.container;
      // do what you want on  drag
      // reset value at drag end
      this.dragOver.value = false;
      this.dragOver.container = undefined;
    }

  }

  dragOverEvent(event, containerName): void {
    // tracking when sommething is dragged over target container
    this.dragOver.value = true;
    this.dragOver.container = containerName
    console.log("dragging over " + containerName);
    console.log(this.dragOver);

  }
}
