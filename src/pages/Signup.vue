<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Sign up</h1>
    <span :class="$style.signin"> 
      Already have an account ?
      <TextLink is-blue to="signin">Sign in</TextLink>
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
      type="password" 
      placeholder="*******"
    />
    <Button :class="$style.button"> Signup </Button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TextLink } from '@/components/TextLink'


export default {
  name: 'Signup',
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
}

.passwordEmail {
  margin-bottom: 21px;
}

.signin {
  @include typo-bold-title-small;
  margin: 30px 0 34px;
}

.button {
  margin-top: 125px;
  align-self: flex-end;
}

</style>