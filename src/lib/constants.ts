export const APP_NAME = "EduTube";

export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  course: (id: string) => `/courses/${id}`,
} as const;

export const DEMO_PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMHjMZ";
