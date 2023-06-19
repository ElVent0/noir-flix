const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const loginWithGoogle = async (supabase, errorToast) => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      errorToast();
    }
  } catch (e) {
    console.error("signInWithOAuth error", e);
  }
};

export const loginWithMail = async (
  userMail,
  errorMail,
  userPassword,
  errorPassword,
  supabase,
  setIsLoginModal,
  errorToast
) => {
  if (userMail.length === 0) {
    errorMail();
    return;
  } else if (!emailRegex.test(userMail)) {
    errorMail();
    return;
  } else if (userPassword.length < 6) {
    errorPassword();
    return;
  }

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: userMail,
      password: userPassword,
    });

    setIsLoginModal(false);

    if (error) {
      errorToast();
    }
  } catch (e) {
    console.error("signInWithPassword error", e);
  }
};

export const createUserWithMail = async (
  userName,
  errorName,
  errorMail,
  userMail,
  userPassword,
  errorPassword,
  supabase,
  errorToastCreation,
  setIsLoginModal,
  notifyOnMailSignUp
) => {
  if (userName.length < 2) {
    errorName();
    return;
  } else if (userMail.length === 0) {
    errorMail();
    return;
  } else if (!emailRegex.test(userMail)) {
    errorMail();
    return;
  } else if (userPassword.length < 6) {
    errorPassword();
    return;
  }

  try {
    const { error } = await supabase.auth.signUp({
      email: userMail,
      password: userPassword,
      options: { data: { name: userName } },
    });

    if (error) {
      errorToastCreation();
    }
  } catch (e) {
    console.error("signUp error", e);
  }

  setIsLoginModal(false);
  notifyOnMailSignUp();
};

export const logout = async (supabase) => {
  await supabase.auth.signOut();
};
