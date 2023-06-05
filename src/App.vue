<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">Home</el-menu-item>
  </el-menu>
  <div class="common-layout">
    <div>
      <el-container>
        <el-main>
          <div class="demo-collapse">
            <el-collapse v-model="activeNames">
              <el-collapse-item title="查询条件" name="1">
                <!-- 查询条件 -->
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="Approved by">
                    <el-input v-model="formInline.user" placeholder="Approved by" />
                  </el-form-item>
                  <el-form-item label="Activity zone">
                    <el-select v-model="formInline.region" placeholder="Activity zone">
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">Query</el-button>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
              <el-collapse-item title="结果展示" name="2">
                <!-- 结果table -->
                <el-table
                  v-loading="loading"
                  :data="tableData"
                  style="width: 100%"
                  highlight-current-row
                  height="500"
                >
                  <el-table-column fixed type="index" width="50" />
                  <el-table-column fixed prop="level" label="层次" width="80" />
                  <el-table-column fixed prop="type" label="科类" width="100" />
                  <el-table-column fixed prop="schoolName" label="院校名称" width="180" />
                  <el-table-column prop="pro985" label="985工程" width="100" />
                  <el-table-column prop="pro211" label="211工程" width="100" />
                  <el-table-column prop="proshuangyiliu" label="双一流" width="80" />
                  <el-table-column prop="schoolRunLevel" label="办学性质" width="80" />
                  <el-table-column prop="location" label="所在省市" width="100" />
                  <el-table-column prop="majorName" label="专业名称" width="180" />
                  <el-table-column prop="zhaoshengjihua" label="在辽招生计划数" width="100" />
                  <el-table-column prop="attr2Zhongwai" label="中外合作办学" width="60" />
                  <el-table-column prop="attr2Shifan" label="师范专业" width="60" />
                  <el-table-column prop="attr2Yuke" label="少数民族预科" width="60" />
                  <el-table-column prop="attrShuang" label="双" width="50" />
                  <el-table-column prop="attrGuo" label="国" width="50" />
                  <el-table-column prop="attrSheng" label="省" width="50" />
                  <el-table-column prop="attrTe" label="特" width="50" />
                  <el-table-column prop="attrWan" label="双万" width="60" />
                  <el-table-column prop="location2022" label="2022年分数" width="80" />
                  <el-table-column prop="score2022" label="2022年位次" width="100" />
                  <el-table-column prop="location2021" label="2021年分数" width="80" />
                  <el-table-column prop="score2021" label="2021年位次" width="100" />
                  <el-table-column prop="location2020" label="2020年分数" width="80" />
                  <el-table-column prop="score2020" label="2020年位次" width="100" />
                  <el-table-column prop="location2019" label="2019年分数" width="80" />
                  <el-table-column prop="score2019" label="2019年位次" width="100" />
                  <el-table-column prop="location2018" label="2018年分数" width="80" />
                  <el-table-column prop="score2018" label="2018年位次" width="100" />
                  <el-table-column prop="avgLocation" label="Name" width="100" />
                  <el-table-column prop="avgScore" label="Name" width="50" />
                  <el-table-column prop="preferSubject" label="首选科目" width="80" />
                  <el-table-column prop="unpreferSubject" label="再选科目要求" width="80" />
                  <el-table-column prop="xuezhi" label="学制" width="100" />
                  <el-table-column prop="xuefei" label="学费" width="100" />
                  <el-table-column prop="params" label="专业属性" width="100" />
                  <el-table-column prop="notes" label="专业备注" width="100" />
                </el-table>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref } from 'vue'
import { querySchools } from './api/school-info'

const loading = ref(true)
const activeIndex2 = ref('1')
const queryParam = ref<QueryParam>({ totalScore: 100 })
const activeNames = ref(['1', '2'])
const tableData = ref<Array<SchoolInfo>>([])

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const formInline = ref({
  user: '',
  region: ''
})

const onSubmit = () => {
  console.log('submit!')
}

onMounted(async () => {
  await querySchools(queryParam.value).then((res) => {
    if (res.success) {
      tableData.value = res.data
      loading.value = false
    } else {
      loading.value = true
    }
    console.log(res)
  })
})
</script>

<style scoped>
.pagination-block {
  margin-top: 18px;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
