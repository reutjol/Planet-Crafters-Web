const KEY = "pc_user"; // Planet Crafters user

export function loadUserFromStorage() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveUserToStorage(user) {
  try {
    if (!user) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, JSON.stringify(user));
  } catch {
    // ignore
  }
}
