class AnnotationPipe implements Pipe {
  getToken(content: string, lastToken?: Token): Token {
    const regex = new RegExp(/^(\s+)/);
    const matchs = content.match(regex);
    if (matchs) {
      return new Token(TokenEnum.WHITEBLANK, matchs[0]);
    }
    return null;
  }
}
