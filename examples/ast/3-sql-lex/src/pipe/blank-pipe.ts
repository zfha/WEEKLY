class BlankPipe implements Pipe {
  getToken(content: string, lastToken?: Token): Token {
    const regex = new RegExp(/^\/\*.*?(?:\*\/|$)/);
    const matchs = content.match(regex);
    if (matchs) {
      return new Token(TokenEnum.ANNOTAION, matchs[0]);
    }
    return null;
  }
}
