<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>


<script>
  import axios from 'axios'

  export default {
    // async data() {
    //   console.log(await axios.get('/api/distance-list'))
    //   return {
    //     options: (await axios.get('/api/distance-list')),
    //     value: ''
    //   }
    // }
    // async asyncData () {
    //   let { data } = await axios.get(('/api/distance-list'))
    //   console.log(data)
    //   return {
    //     options: data,
    //     value: ''
    //   }
    // }
    data() {
      // let data = axios.get('/api/distance-list')
      // return {data}
      axios.get('/api/distance-list').then(({data})=> {
        this.options = data.data
      })
      return {
        options: [],
        value: ''
      }

    }
  }
</script>
