
import {Model} from './Model';
import {Attributes} from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';


export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const url = 'http://localhost:3000/users';

export class User extends Model<UserProps> {

  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(url),
      new Eventing()
    )
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection(url, (json: UserProps) => User.buildUser(json))
  }

}
