import axios from './axios'

export function getArticleList (data) {
  return axios.get('/front/article', {params: data}).then((res) => res.data)
}
export function articleCategoryList () {
  return axios.get('/front/article/category').then((res) => res.data)
}
export function articleDetail (data) {
  return axios.get('/front/article/detail', {params: data}).then((res) => res.data)
}
