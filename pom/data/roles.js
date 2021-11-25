import { Role } from "testcafe";
import loginPage from "../pages/loginPage";
import { CREDENTIALS, URL } from "./constants";

export const VALID_USER = Role(URL.BASE_URL, async() => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.EMAIL, CREDENTIALS.VALID_USER.PASSWORD)
}, {preserveUrl: true})
