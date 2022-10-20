
<script>
import { UserManager } from "oidc-client";
import { onMounted, defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "CallbackPage",
  setup() {
    onMounted(() => {
      const router = useRouter();
      let vi = this;
      new UserManager({ response_mode: "query" })
        .signinRedirectCallback()
        .then(function (user) {
          router.push("/");
        })
        .catch(function (e) {
          sessionStorage.clear();
          localStorage.clear();
          router.push("/login");
        });
    });
    return {};
  },
});
</script>
