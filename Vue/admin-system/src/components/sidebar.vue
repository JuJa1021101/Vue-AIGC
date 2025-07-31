<!-- <template>
    <aside class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :collapse="sidebar.collapse"
            background-color="#324157"
            text-color="#bfcbd9"
        >

            <template v-for="item in menuData">
                <template v-if="item.children">
                    <el-sub-menu
                        :index="item.index"
                        :key="item.index"
                    >
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="submit in item.children">
                            <el-sub-menu
                                v-if="submit.children"
                            >
                                <template #title>{{ submit.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.children"
                                    :key="i"
                                    :index="threeItem.index"
                                    >{{ threeItem.title }}</el-menu-item>
                            </el-sub-menu>
                            <el-sub-menu v-else></el-sub-menu>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.id">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>

        </el-menu>
    </aside>
</template> -->
<!-- <template>
    <aside class="sidebar">
      <el-menu
        class="sidebar-el-menu"
        :collapse="sidebar.collapse"
        background-color="#324157"
        text-color="#bfcbd9"
      >
        <template v-for="item in menuData">
          <template v-if="item.children">
            <el-sub-menu :index="item.index" :key="item.index">
              <template #title>
                <el-icon>
                  <component :is="item.icon" />
                </el-icon>
                <span>{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.children">
                <el-menu-item v-if="subItem.children">
                <template #title>
                  {{ subItem.title }}
                </template>
                <el-menu-item v-for="(threeItem,i) in subItem.children" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}

                </el-menu-item>
                </el-menu-item>
                <el-menu-item v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else> </template>
        </template>
      </el-menu>
    </aside>
  </template> -->
  <template>
    <aside class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :collapse="sidebar.collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            :default-active="onRoutes"
            router
        >
            <template v-for="item in menuData">
                <template v-if="item.children">
                    <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.id">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.children">
                            <el-sub-menu
                                v-if="subItem.children"
                                :index="subItem.index"
                                :key="subItem.index"
                                v-permiss="item.id"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem, i) in subItem.children"
                                    :key="i"
                                    :index="threeItem.index"
                                >
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" v-permiss="item.id">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.id">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </aside>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useSidebarStore } from '../store/sidebar';
import { menuData } from '../components/menu.js'
const sidebar = useSidebarStore()
const route = useRoute
const onRoutes = () =>{
    return route.path
}
</script>

<style lang="css" scoped>

</style>