<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Sign up</h1>
    <span :class="$style.signin"> 
      Already have an account ?
      <TextLink to="signin">Log in</TextLink>
    </span>
    <div :class="[$style.input, $style.passwordEmail]">
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
    <Button :class="$style.button"> 
      Sign up 
    </Button>
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

.signin {
  @include typo-bold-title-small;
  margin: $spacing * 3 0 $spacing * 5;
}


.input {
  width: 100%;
  max-width: 230px;
}

.passwordEmail {
  width: 100%;
  margin-bottom: $spacing * 4;
}

.button {
  margin-top: $spacing * 26;
}

</style>