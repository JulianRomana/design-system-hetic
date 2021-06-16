<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title"> Sign in </h1>
    <span :class="$style.signup"> 
      Don't have an account ?
      <TextLink is-blue to="signup">Sign up</TextLink>
    </span>
    <Input 
      v-model="email" 
      label="Email" 
      placeholder="mail@mail.com" 
      type="email" 
      :class="$style.passwordEmail" 
    />
    <Input 
      v-model="password" 
      label="Password" 
      placeholder="*******" 
      type="password" 
    />
    <TextLink to="" :class="$style.textLink">
      Forgot password ?
    </TextLink>
    <Button :class="$style.button"> Sign in </Button>
  </div>
</template>


<script>
import { ref } from 'vue'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TextLink } from '@/components/TextLink'

export default {
  name: 'Signin',
  components: { 
    Button,
    Input,
    TextLink,
  },
  setup() {
    const email = ref('')
    const password = ref('')

    return { email, password }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  @include typo-bold-title;
  color: $neutral;
}

.passwordEmail {
  margin-bottom: 21px;
}

.signup {
  @include typo-bold-title-small;
  margin: 30px 0 34px;
}

.textLink {
  margin: 40px 0 56px;
}

.button {
  align-self: flex-end;

}
</style>