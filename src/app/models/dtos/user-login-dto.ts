import { TokenDto } from './token-dto'
import { UserDto } from './user-dto'

export interface UserLoginDto {
  loggedInUser: UserDto
  userToken: TokenDto
}
