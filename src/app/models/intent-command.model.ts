export class IntentCommand {
  id: number;
  intentName: string;
  inSent: string;
  successResponse: string;
  errorResponse: string;

  constructor() {
    this.id = 0;
  }
}
