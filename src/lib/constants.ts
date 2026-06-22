export const APP_NAME = "EduTube";

export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  course: (id: string) => `/courses/${id}`,
} as const;
