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
    <el-menu-item index="1">森澜志愿通推荐系统（本地版）</el-menu-item>
  </el-menu>
  <div class="common-layout">
    <div>
      <el-container>
        <el-main>
          <div class="demo-collapse">
            <el-collapse v-model="activeNames">
              <el-collapse-item title="查询条件" name="1">
                <!-- 查询条件 -->
                <el-form
                  :inline="false"
                  :model="queryParam"
                  class="demo-form-inline"
                  label-width="120px"
                >
                  <el-form-item label="总分">
                    <el-input
                      v-model="queryParam.totalScore"
                      style="max-width: 190px"
                      placeholder="请输入"
                    />
                  </el-form-item>
                  <el-form-item label="外语">
                    <el-select v-model="queryParam.foreignLanguage" placeholder="请选择">
                      <el-option label="英语" value="英语" />
                      <el-option label="其他" value="其他" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="民族">
                    <el-select v-model="queryParam.minZu" placeholder="请选择">
                      <el-option label="汉族" value="汉族" />
                      <el-option label="其他" value="其他" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="本/专">
                    <el-select
                      v-model="queryParam.level"
                      placeholder="请选择"
                      @change="handleLevelChange"
                    >
                      <el-option label="本科" value="本科" />
                      <el-option label="专科" value="专科" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="首选">
                    <el-select v-model="queryParam.preferredSub" placeholder="请选择">
                      <el-option label="物理" value="物理" />
                      <el-option label="历史" value="历史" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="再选1">
                    <el-select v-model="queryParam.unpreferedSub1" placeholder="请选择">
                      <el-option
                        v-for="sub in UnpreferedSubList"
                        :key="sub"
                        :label="sub"
                        :value="sub"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="再选2">
                    <el-select v-model="queryParam.unpreferedSub2" placeholder="请选择">
                      <el-option
                        v-for="sub in UnpreferedSubList"
                        :key="sub"
                        :label="sub"
                        :value="sub"
                        :disabled="sub === queryParam.unpreferedSub1"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="意向省份">
                    <el-checkbox-group v-model="queryParam.intentionProv">
                      <el-checkbox
                        v-for="province in ProvinceList"
                        :key="province"
                        :label="province"
                        :name="province"
                      />
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="意向专业类">
                    <div v-for="[key, value] of subAndMajMap" :key="key" style="width: 100%">
                      <el-checkbox
                        v-model="checkAllValue[key]"
                        :indeterminate="isIndeterminateValue[key]"
                        @change="handleCheckAllChange($event, key)"
                        style="color: #337ecc"
                        >{{ key }}</el-checkbox
                      >
                      <el-checkbox-group
                        v-model="checkboxValue[key]"
                        @change="handleMajChange($event, key)"
                      >
                        <el-checkbox v-for="maj in value" :key="maj" :label="maj" :name="maj" />
                      </el-checkbox-group>
                      <el-divider />
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询专业</el-button>
                    <el-button type="primary" @click="handleExportExcel">导出表格</el-button>
                    <el-button type="primary" @click="handleClearCheckbox">清除选项</el-button>
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
                  height="600"
                >
                  <el-table-column fixed type="index" width="50" />
                  <el-table-column fixed prop="schoolName" label="院校名称" width="180" />
                  <el-table-column fixed prop="majorName" label="专业名称" width="300" />
                  <el-table-column prop="level" label="层次" width="80" />
                  <el-table-column prop="type" label="科类" width="100" />
                  <el-table-column prop="pro985" label="985工程" width="100" />
                  <el-table-column prop="pro211" label="211工程" width="100" />
                  <el-table-column prop="proshuangyiliu" label="双一流" width="80" />
                  <el-table-column prop="schoolRunLevel" label="办学性质" width="80" />
                  <el-table-column prop="location" label="所在省市" width="120" />
                  <el-table-column prop="zhaoshengjihua" label="在辽招生计划数" width="80" />
                  <el-table-column prop="attr2Zhongwai" label="中外合作办学" width="70" />
                  <el-table-column prop="attr2Shifan" label="师范专业" width="60" />
                  <el-table-column prop="attr2Yuke" label="少数民族预科" width="70" />
                  <el-table-column prop="attrShuang" label="双" width="50" />
                  <el-table-column prop="attrGuo" label="国" width="50" />
                  <el-table-column prop="attrSheng" label="省" width="50" />
                  <el-table-column prop="attrTe" label="特" width="50" />
                  <el-table-column prop="attrWan" label="双万" width="60" />
                  <el-table-column prop="location2022" label="2022年位次" sortable width="130" />
                  <el-table-column prop="score2022" label="2022年分数" sortable width="130" />
                  <el-table-column prop="location2021" label="2021年位次" sortable width="130" />
                  <el-table-column prop="score2021" label="2021年分数" sortable width="130" />
                  <el-table-column prop="location2020" label="2020年位次" sortable width="130" />
                  <el-table-column prop="score2020" label="2020年分数" sortable width="130" />
                  <el-table-column prop="location2019" label="2019年位次" sortable width="130" />
                  <el-table-column prop="score2019" label="2019年分数" sortable width="130" />
                  <el-table-column prop="location2018" label="2018年位次" sortable width="130" />
                  <el-table-column prop="score2018" label="2018年分数" sortable width="130" />
                  <el-table-column prop="avgLocation" label="近三年平均位次" width="120" />
                  <el-table-column prop="avgScore" label="近三年平均分数" width="120" />
                  <el-table-column prop="preferSubject" label="首选科目" width="80" />
                  <el-table-column prop="unpreferSubject" label="再选科目要求" width="100" />
                  <el-table-column prop="xuezhi" label="学制" width="100" />
                  <el-table-column prop="xuefei" label="学费" width="100" />
                  <el-table-column prop="params" label="专业属性" width="100" />
                  <el-table-column prop="notes" label="专业备注" width="360" />
                </el-table>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { querySchools, exportExcel } from './api/school-info'
import { ProvinceList, SubAndMajBenke, SubAndMajZhuanke, UnpreferedSubList } from './utils/constant'
import { cloneDeep } from 'lodash-es'
import { ElMessage } from 'element-plus'

const loading = ref(false)
const activeIndex2 = ref('1')
const queryParam = ref<QueryParam>({ totalScore: 100 })
const activeNames = ref(['1', '2'])
const tableData = ref<Array<SchoolInfo>>([])
const subAndMajMap = ref<Map<string, Array<string>>>(new Map())
const checkboxValue = ref<{ [key: string]: string[] }>({})
const isIndeterminateValue = ref<{ [key: string]: boolean }>({})
const checkAllValue = ref<{ [key: string]: boolean }>({})

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleLevelChange = (val: string) => {
  if (val === '本科') {
    subAndMajMap.value = SubAndMajBenke
  } else {
    subAndMajMap.value = SubAndMajZhuanke
  }
  handleClearCheckbox();
}

const handleCheckAllChange = (val: boolean, key: string) => {
  checkboxValue.value[key] = (val ? subAndMajMap.value?.get(key) : []) as string[]
  isIndeterminateValue.value[key] = false
}

const handleMajChange = (value: string[], key: string) => {
  const checkedCount = value.length
  checkAllValue.value[key] = checkedCount === subAndMajMap.value?.get(key)?.length
  isIndeterminateValue.value[key] =
    checkedCount > 0 && checkedCount < (subAndMajMap.value?.get(key) as string[]).length
}

const formatCheckboxValue = () => {
  for (const key in checkboxValue.value) {
    if (Object.prototype.hasOwnProperty.call(checkboxValue.value, key)) {
      const values = checkboxValue.value[key] ?? '';
      queryParam.value.intentionSubAndMaj = (queryParam.value.intentionSubAndMaj as string[]).concat(values);
    }
  }
}

const onSubmit = async () => {
  loading.value = true
  await querySchools(formatQueryParam()).then((res) => {
    if (res.success) {
      tableData.value = res.data
      loading.value = false
    } else {
      loading.value = true
    }
  })
}

const handleClearCheckbox = () => {
  queryParam.value.intentionProv = []
  for (const key in checkboxValue.value) {
    if (Object.prototype.hasOwnProperty.call(checkboxValue.value, key)) {
      checkboxValue.value[key] = [];
      isIndeterminateValue.value[key] = false;
      checkAllValue.value[key] = false;
    }
  }
}

const formatQueryParam = () : QueryParam => {
  formatCheckboxValue()
  const queryBody = cloneDeep(queryParam.value)
  queryBody.intentionProv = (queryBody.intentionProv as String[]).toString()
  queryBody.intentionSubAndMaj = (queryBody.intentionSubAndMaj as String[]).toString()
  return queryBody
}

const handleExportExcel = async () => {
  ElMessage('报表下载中，请耐心等待。。。')
  await exportExcel(formatQueryParam()).then((res) => {
    if (res.size > 0) {
      const blob = new Blob([res]) //处理文档流
      const fileName = '专业信息表' + '.xlsx'
      const down = document.createElement('a')
      down.download = fileName
      down.style.display = 'none' //隐藏,没必要展示出来
      down.href = URL.createObjectURL(blob)
      document.body.appendChild(down)
      down.click()
      URL.revokeObjectURL(down.href) // 释放URL 对象
      document.body.removeChild(down) //下载完成移除
    } else {
      ElMessage.error('文件不存在')
    }
  })
}

onMounted(async () => {
  subAndMajMap.value = SubAndMajBenke
  queryParam.value = {
    totalScore: 500,
    foreignLanguage: '英语',
    minZu: '汉族',
    level: '本科',
    preferredSub: '物理',
    unpreferedSub1: '化学',
    unpreferedSub2: '生物',
    intentionProv: [],
    intentionSubAndMaj: []
  }
})
</script>

<style scoped>
.pagination-block {
  margin-top: 18px;
}
</style>
