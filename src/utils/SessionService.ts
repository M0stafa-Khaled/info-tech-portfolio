import { IUser } from "../interfaces";

class SessionService {
  // Token
  setToken(token: string) {
    sessionStorage.setItem("token", token);
  }

  getToken(): string | null {
    return sessionStorage.getItem("token");
  }

  // User
  setUser(user: IUser) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  getUser(): IUser | undefined {
    const userString = sessionStorage.getItem("user");
    return userString ? JSON.parse(userString) : undefined;
  }

  // Role
  setRole(role: string) {
    sessionStorage.setItem("role", role);
  }

  getRole(): string | null {
    return sessionStorage.getItem("role");
  }

  clearAll() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");
  }
}

export default new SessionService();
