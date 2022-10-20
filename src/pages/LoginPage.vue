
<script>
import userManager from "../auth/authService";
import { defineComponent } from "vue";
import { config } from "../config";
export default defineComponent({
  name: "LoginPage",
  setup() {
    getAuth();
    async function getAuth() {
      let vi = this;
      try {
        let user = await userManager.getUser();
        if (!user) {
          userManager.signinRedirect();
        } else {
          vi.setUser(user);
          vi.$router.push("/");
        }
      } catch (err) {
        alert("error");
        document.location = config.auth.post_logout_redirect_uri;
      }
    }
    return { getAuth };
  },
});
</script>
