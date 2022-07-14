<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
// const user = useStrapiUser()

const { login } = useStrapiAuth()
// const router = useRouter()
const onSubmit = async () => {
  try {
    await login({
      identifier: 'parz1zhou@outlook.com',
      password: 'Zl990410',
      // password:
      //   '088762e4a2f4c62a4b0b05bc13f8d04467b174de974396e1a4de240502e553569ab8ec1e3c215264a9e184131b3ef5be0b03d00c9f95c8dfab06b7657fc817d3d556209b218d34a7dcd58a491a0c2b7edf05798115fb96efba8160c2fdbab295ad9c6ae4c3aab143cf5435a4a28aaeb9a3bd95123369205e665885ee6e76cab4',
    })
    // router.push('/authenticated-page')
  } catch (e) {
    console.log(e)
  }
}
onSubmit()
</script>
