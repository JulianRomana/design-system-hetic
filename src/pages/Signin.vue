<template>
  <div :class="$style.wrapper">
    <h1> Signin page </h1>
    <Input label="email" placeholder="mail@mail.com" type="email" />
    <Input label="password" type="password" />
    <Button> signin </Button>
  </div>
</template>


<script>
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { ref } from 'vue'

export default {
  name: 'Signin',
  components: { 
    Button,
    Input,
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
  
}
</style>