<template>
  <el-container>
    <!-- <el-header>
    </el-header> -->
    <el-main>
      <!-- <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="专业："> -->
      <div class="search-box">
        <span>专业：</span>
        <el-select v-model="value" placeholder="Select" @change="handleMajorChange" filterable>
          <el-option-group v-for="group in majorsOption" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item" :label="item" :value="item" />
          </el-option-group>
        </el-select>
      </div>
      <!-- </el-form-item>
      </el-form> -->
      <el-divider />
      <BenkeMajorInfo
        :info="(majorInfo as BenkeMajorInfo)"
        v-if="benkeOrZhuanke === '本科'"
      ></BenkeMajorInfo>

      <ZhuankeMajorInfo
        :info="(majorInfo as ZhuankeMajorInfo)"
        v-if="benkeOrZhuanke === '专科'"
      ></ZhuankeMajorInfo>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { SchoolLevel } from '@/utils/constant'
import BenkeMajorInfo from '@/components/BenkeMajorInfo.vue'
import ZhuankeMajorInfo from '@/components/ZhuankeMajorInfo.vue'
import { getAllMajors, getMajorInfor } from '@/api/major'
import { valueEquals } from 'element-plus'

const loading = ref(false)
const value = ref('')
const benkeOrZhuanke = ref('本科')
const majorInfo = ref<BenkeMajorInfo | ZhuankeMajorInfo>({})
const majors = ref<{ [key: string]: Array<string> }>({})
const majorsOption = ref<Array<{ label: string; options: Array<string> }>>([])

// 获取所有 major
const getMajors = async () => {
  loading.value = true
  getAllMajors().then((res) => {
    if (res.success) {
      majors.value = res.data
      convertMajors()
      loading.value = false
    } else {
      loading.value = false
    }
  })
}

// 转换 majors 格式
const convertMajors = () => {
  for (const key in majors.value) {
    if (Object.prototype.hasOwnProperty.call(majors.value, key)) {
      const element = majors.value[key]
      majorsOption.value.push({
        label: SchoolLevel.get(key) as string,
        options: element
      })
    }
  }
}

// 选择 major 获取详细信息
const handleMajorChange = (val: string) => {
  const param = { majorName: val }
  getMajorInfor(param).then((res) => {
    if (res.success) {
      benkeOrZhuanke.value = res.data[0].level ?? ''
      majorInfo.value = res.data[0]
      loading.value = false
    } else {
      loading.value = false
    }
  })
}
onMounted(() => {
  getMajors()
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.search-box {
  align-items: center;
  display: flex;
}
</style>
