import toast from "react-hot-toast";

export const notifyOnMailSignUp = () =>
  toast.success(
    "If this mail is free, you will receive a confirmation by email",
    {
      duration: 5000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
        zIndex: "2001",
      },
      iconTheme: {
        primary: "#11b3ff",
        secondary: "#fff",
      },
    }
  );

export const errorToast = () =>
  toast.error("Bad login, try again", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
      zIndex: "2001",
    },
    iconTheme: {
      primary: "#fa4b34",
      secondary: "#ffffff",
    },
  });

export const errorMovieToast = () =>
  toast.error("Fill in STARS field", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
      zIndex: "2001",
    },
    iconTheme: {
      primary: "#fa4b34",
      secondary: "#ffffff",
    },
  });

export const errorReviewToast = () =>
  toast.error("Fill in all fields", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
      zIndex: "2001",
    },
    iconTheme: {
      primary: "#fa4b34",
      secondary: "#ffffff",
    },
  });

export const errorToastCreation = () =>
  toast.error("Cannot create new user now", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
    },
    iconTheme: {
      primary: "#fa4b34",
      secondary: "#ffffff",
    },
  });

export const errorName = () =>
  toast.error("The name must consist of at least 3 characters", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
    },
    iconTheme: {
      primary: "#fa4b34",
      secondary: "#ffffff",
    },
  });
export const errorReviewVote = () =>
  toast.error("You have to login first", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
    },
    iconTheme: {
      primary: "#fa4b34",
      secondary: "#ffffff",
    },
  });

export const errorMail = () =>
  toast.error("Write a valid email", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
    },
    iconTheme: {
      primary: "#fa4b34",
      secondary: "#ffffff",
    },
  });

export const errorPassword = () =>
  toast.error("The password must be at least 6 characters long", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
    },
    iconTheme: {
      primary: "#fa4b34",
      secondary: "#ffffff",
    },
  });

export const successToast = () =>
  toast.success("The movie has been added", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
      zIndex: "2001",
    },
    iconTheme: {
      primary: "#11b3ff",
      secondary: "#ffffff",
    },
  });

export const successReviewToast = () =>
  toast.success("The review has been added", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
      zIndex: "2001",
    },
    iconTheme: {
      primary: "#11b3ff",
      secondary: "#ffffff",
    },
  });

export const successEditToast = () =>
  toast.success("The movie data have been changed", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
      zIndex: "2001",
    },
    iconTheme: {
      primary: "#11b3ff",
      secondary: "#ffffff",
    },
  });

export const successDeleteToast = () =>
  toast.success("Deleted", {
    duration: 4000,
    style: {
      padding: "16px",
      textAlign: "center",
      color: "#606770",
      zIndex: "2001",
    },
    iconTheme: {
      primary: "#11b3ff",
      secondary: "#ffffff",
    },
  });
