interface Pipe {
  getToken(content: string, lastToken?: Token): Token;
}
