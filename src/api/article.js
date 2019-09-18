import axios from './axios'

export function getArticleList () {
  return axios.get('/front/article').then((res) => res.data)
}
export function articleCategoryList () {
  return axios.get('/front/article/category').then((res) => res.data)
}
