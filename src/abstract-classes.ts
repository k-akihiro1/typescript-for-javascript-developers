export {};

abstract class animal {
  abstract cry(): string;
}

class lion extends animal {
  cry() {
    return "roar";
  }
}

class tiger extends animal {
  cry() {
    return "roar";
  }
}
