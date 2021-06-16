<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title"> Login in </h1>
    <span :class="$style.signup"> 
      Don't have an account ?
      <TextLink to="signup">Sign up</TextLink>
    </span>
    <div :class="[$style.input, $style.email]">
      <Input 
        v-model="email"
        label="Email"
        placeholder="mail@mail.com"
        type="email"
      />
    </div>
    <div :class="$style.input">
      <Input 
        v-model="password" 
        label="Password" 
        placeholder="*******" 
        type="password" 
      />
    </div>
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

.input {
  width: 100%;
  max-width: 230px;
}
.email {
  margin-bottom: $spacing * 4;
}

.signup {
  @include typo-bold-title-small;
  margin: $spacing * 3 0 $spacing * 5;
}

.textLink {
  margin: $spacing * 7 0 $spacing * 13;
}

</style>