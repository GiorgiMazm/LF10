export default class Person {
  constructor(
    private lastName: string | undefined,
    private firstName: string | undefined,
    private birth: string | undefined
  ) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birth = birth;
  }
}
