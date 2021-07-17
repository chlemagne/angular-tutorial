import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  reactionType = ReactionType;
  @Output("your-reaction") reaction: ReactionType;
  @Output("number-of-reactions") number: number;

  constructor() {
    this.reaction = ReactionType.Default;
    this.number = 327;
  }

  onClick(reaction: ReactionType) {
    switch (reaction) {
      case ReactionType.ThumbsUp:
        this.reaction = (this.reaction !== ReactionType.ThumbsUp) ?
          ReactionType.ThumbsUp : ReactionType.Default;
        break;

      case ReactionType.ThumbsDown:
        this.reaction = (this.reaction !== ReactionType.ThumbsDown) ?
          ReactionType.ThumbsDown : ReactionType.Default;
        break;

      case ReactionType.Love:
        this.reaction = (this.reaction !== ReactionType.Love) ?
          ReactionType.Love : ReactionType.Default;
        break;

      case ReactionType.Angry:
        this.reaction = (this.reaction !== ReactionType.Angry) ?
          ReactionType.Angry : ReactionType.Default;
        break;

      case ReactionType.Default:
      default:
        break;
    }

    this.number += (this.reaction !== ReactionType.Default) ? 1 : -1;
  }
}

export enum ReactionType {
  Default,
  ThumbsUp,
  ThumbsDown,
  Love,
  Angry
}
