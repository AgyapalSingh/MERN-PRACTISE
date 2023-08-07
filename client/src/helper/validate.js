import toast from "react-hot-toast";

// Validate Login page Username

export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  return errors;
}

// Validate username

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username");
  }

  return error;
}
