import { BookmarkDetails } from 'src/app/models/bookmark-details.model';
import { BookmarkService } from './../../services/bookmark.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit, OnDestroy {
  bookmarks: BookmarkDetails[] = []
  constructor(private _BookmarkService: BookmarkService) { }

  ngOnInit(): void {
    $('.bookmarks').fadeOut(0).fadeIn(500);
    this.bookmarks = this._BookmarkService.getBookmarks()
  }

  ngOnDestroy(): void {
    $('.bookmarks').fadeOut(500).fadeIn(0);
  }
}
