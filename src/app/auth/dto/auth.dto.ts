export class AuthDto {
  _id: number;
  username: string;
  role: string;

  constructor(partial: Partial<AuthDto>) {
    Object.assign(this, partial);
  }
}
