<template>
  <el-descriptions :title="props.info.majorName" :column="1">
    <el-descriptions-item label="专业代码" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.majorCode1 }}</el-descriptions-item
    >
    <el-descriptions-item label="学科门类代码" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.subjectCode }}</el-descriptions-item
    >
    <el-descriptions-item label="专业名称" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.majorName }}</el-descriptions-item
    >
    <el-descriptions-item label="隶属学科门类名称" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.subjectName }}</el-descriptions-item
    >
    <el-descriptions-item label="主干学科" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.mainSubjects }}</el-descriptions-item
    >
    <el-descriptions-item label="授予学位" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.degreeName }}</el-descriptions-item
    >
    <el-descriptions-item label="学制" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.length }}</el-descriptions-item
    >
    <el-descriptions-item label="层次" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.level }}</el-descriptions-item
    >
    <el-descriptions-item label="主要课程" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.majorCourse }}</el-descriptions-item
    >
    <el-descriptions-item label="专业特点" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.majorFeature }}</el-descriptions-item
    >
    <el-descriptions-item label="就业前景" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.careerProspects }}</el-descriptions-item
    >
    <el-descriptions-item label="就业方向" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.careerDirection }}</el-descriptions-item
    >
    <el-descriptions-item label="从事职业" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.jobs }}</el-descriptions-item
    >
    <el-descriptions-item label="考研方向" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.graduateDirection }}</el-descriptions-item
    >
    <el-descriptions-item label="推荐学校" label-align="right" align="left"  label-class-name="my-label" width="150px">
      {{ props.info.schoolRecommend }}</el-descriptions-item
    >
    <!-- <el-descriptions-item label="Telephone" label-align="right" align="center"
      >18100000000</el-descriptions-item
    >
    <el-descriptions-item label="Place" label-align="right" align="center"
      >Suzhou</el-descriptions-item
    >
    <el-descriptions-item label="Remarks" label-align="right" align="center">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address" label-align="right" align="center"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</el-descriptions-item
    > -->
  </el-descriptions>
</template>

<script setup lang="ts">
const props = defineProps<{
  info: BenkeMajorInfo
}>()
</script>

<style>
.my-label {
  font-weight: bold;
  color:rgb(1 22 92) !important;
}
</style>
