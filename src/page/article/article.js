import React, { Component } from 'react';
import { Spin } from 'antd';
import './article.scss'
import service from '../../api/index'
import * as filter from '../../utils/index'

class article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      activeList: [],
      typeList: [],
      loading: true
    };
  }
  // 获取文章列表
  async getArticleList () {
    this.setState({
      loading: true
    })
    let data = await service.article.getArticleList({
      categoryId: this.state.categoryId
    })
    data.result.forEach(item => {
      this.state.typeList.forEach(child => {
        if (item.categoryId === child.id) {
          item.categoryName = child.name
        }
      })
    })
    this.setState({
      activeList: data.result,
      loading: false
    })
  }
  // 获取分类列表
  async articleCategoryList () {
    let data = await service.article.articleCategoryList()
    this.setState({
      typeList: data.result
    })
  }
  // 跳转文章详情页
  lookArticle (item) {
    this.props.history.push('/home/readArticle/' + item.id)
  }
  // 选择标签
  async selectCategory (item) {
    if (this.state.categoryId === item.id) {
      await this.setState({
        categoryId: ''
      })
    } else {
      await this.setState({
        categoryId: item.id
      })
    }
    await this.getArticleList()
  }
  async componentDidMount () {
    await this.articleCategoryList()
    await this.getArticleList()
  }
  render() {
    return (
      <div className="article">
        {/* 标签循环 */}
        <div>
          { this.state.typeList.map((item, index) => {
            return <span key={index} className={this.state.categoryId === item.id ? 'active' : null} onClick={this.selectCategory.bind(this, item)}>
              { item.name }
            </span>
          }) }
        </div>
        {/* 文章列表循环 */}
        <Spin spinning={this.state.loading}>
          <ul>
            { this.state.activeList.map((item, index) => {
              return <li key={index}>
                <h3 onClick={this.lookArticle.bind(this, item)}>
                  <span>
                    {item.title}
                  </span>
                </h3>
                <p dangerouslySetInnerHTML={{__html: item.content.slice(0, 500)}}></p>
                <p>
                  <span>
                    创建时间：{ filter.dateFormat(item.creatTime, 'yyyy-MM-dd HH:mm:ss') }
                  </span>
                  <span>
                    标签：{ item.categoryName}
                  </span>
                  <span>
                    浏览数：{ item.readCount }
                  </span>
                </p>
              </li>
            }) }
            {/* 无数据展示 */}
            {this.state.activeList.length === 0 &&
              <p>
                该标签下暂时没有文章！
              </p>
            }
          </ul>
        </Spin>
      </div>
    );
  }
}

export default article;
