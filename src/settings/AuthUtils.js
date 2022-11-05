export default class AuthService {
    constructor() {}
  
    setApiKey(apiKey) {
      localStorage.setItem("apiKey", apiKey);
    }
  
    isAuthenticated() {
      if (localStorage.getItem("apiKey") != null) {
        return true;
      }
      return false;
    }
  
    getApiKey() {
      return localStorage.getItem("apiKey");
    }
  
    logout() {
      localStorage.removeItem("apiKey");
      localStorage.removeItem("user_role");
      localStorage.removeItem("user_permissions");
    }

    setUserRole(userRole){
      localStorage.setItem("user_role", userRole);
    }

    getUserRole() {
      return localStorage.getItem("user_role");
    }

    setUserPermissions(userPermissions){
      localStorage.setItem("user_permissions", userPermissions);
    }

    getUserPermissions() {
      return localStorage.getItem("user_permissions");
    }

  }