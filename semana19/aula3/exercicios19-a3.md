# Exercicio testes

### 1
Dentro do UserController.ts
```sh
public async getUserById(id: string) {
    const user = await this.userDatabase.getUserById(id);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    };
  }
```
***
### 2a
```sh
describe("Testing UserBusiness.getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'User not found' when user does not exist", async () => {
    const getUserById = jest.fn(
      (id: string) =>
        new User(
          "id",
          "Astrodev",
          "astrodev@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        )
    );

    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const user = await userBusiness.getUserById("id");

    expect(getUserById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});

```
### 2b
```sh
describe("Testing UserBusiness.getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'User not found' when user does not exist", async () => {
    const getUserById = jest.fn(
      (id: string) =>
        new User(
          "id",
          "Astrodev",
          "astrodev@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        )
    );

    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const user = await userBusiness.getUserById("id");

    expect(getUserById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});
```
***
### 3a
```sh
public async getAllUsers(role: UserRole) {
    if (stringToUserRole(role) !== UserRole.ADMIN) {
      throw new UnauthorizedError(
        "You must be an admin to access this endpoint"
      );
    }
    const users = await this.userDatabase.getAllUsers();

    return users.map((user) => ({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    }));
  }
```
***
### 4a
```sh
describe("Testing UserBusiness.allUsers", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (err) {
      expect(err.errorCode).toBe(403);
      expect(err.message).toBe("You must be an admin to access this endpoint");
    }
  });
});
```

### 4b
```sh
describe("Testing UserBusiness.allUsers", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
    const getAllUsers = jest.fn(() => [
      new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "hash",
        stringToUserRole("ADMIN")
      ),
    ]);
    userDatabase = { getAllUsers };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.getAllUsers(UserRole.ADMIN);

    expect(getAllUsers).toHaveBeenCalledTimes(1);
    expect(result).toContainEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});
```
