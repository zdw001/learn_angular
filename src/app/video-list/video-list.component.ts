import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
	title = "Video List";
	// videoList = ["item 1", "item 2", "item 3"];
	videoList = [
		{
			name: "Item 1",
			slug: "item-1",
			embed: `6wD4V0rvlDI`
		},
		{
			name: "Item 2",
			slug: "item-2",
			embed: `6wD4V0rvlDI`
		},
		{
			name: "Item 3",
			slug: "item-3",
			embed: ""
		},

	]
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl(item){
  	return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed)
  }
}
