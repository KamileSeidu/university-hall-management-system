import { redirect } from "react-router-dom";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Return error for display in the form
      return {
        error: data.error || "Login failed",
        status: response.status,
      };
    }

    // Store the token in localStorage
    localStorage.setItem("token", data.token);

    //calculating the expiration date of the token
    // const expiration = new Date();
    // expiration.setHours(expiration.getHours() + 1);
    // localStorage.setItem("expiration", expiration.toISOString());

    // Redirect to dashboard or home page after successful login
    return redirect("/");
  } catch (error) {
    return {
      error: "Network error. Please try again.",
      status: 500,
    };
  }
}

export function logoutAction() {
  localStorage.removeItem("token");
  return redirect("/login");
}
