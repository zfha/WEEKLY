import Token from '../token';
import Pipe from './pipe';

class BlankPipe implements Pipe {
  getToken(content: string, lastToken?: Token): Token {
    const regex = new RegExp(/^(\s+)/);
    const matchs = content.match(regex);
    if (matchs) {
      return new Token(
        TokenEnum.WHITEBLANK,
        matchs[0],
        TokenEnum.WHITEBLANK.toString()
      );
    }
    return null;
  }
}

export default BlankPipe;
