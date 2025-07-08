import { GithubStarPayload } from "../../interfaces";

export class GithubService {
  constructor() {}

  onStar(payload: GithubStarPayload): string {
    const { action, starred_at, sender, repository } = payload;

    return `User ${sender.login} ${action} star on ${repository.full_name}`;
  }
}
